const FarmerModel = require("../models/farmers");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.createFarmer = async (req, res) => {
    try {
        const { password, ...otherFields } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new object with the hashed password and other fields
        const farmer = await FarmerModel.create({
            ...otherFields,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            response: farmer,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

exports.loginFarmer = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const farmer = await FarmerModel.findOne({ "phone": phone });
        if (!farmer) {
            return res.status(401).json({
                success: false,
                error: "Invalid phone number or password",
            });
        }
        const passwordMatch = await bcrypt.compare(password, farmer.password);
        if (passwordMatch) {
            // Passwords match, generate a JWT token
            const token = jwt.sign({ farmerId: farmer._id }, 'q1w2e3', { expiresIn: '1m' });
            // Set token as a secure HTTP-only cookie
            res.cookie('token', token, { httpOnly: true, secure: true });

            // Respond with success and farmer data
            res.status(200).json({
                success: true,
                response: farmer,
            });
        } else {
            // Passwords do not match
            res.status(401).json({
                success: false,
                error: "Invalid phone number or password",
            });
        }

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

exports.logoutFarmer = async (req, res) => {
    try {
        // Clear the token cookie on the client side
        res.clearCookie('token', { httpOnly: true, secure: true });

        // Respond with a success message
        res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

exports.checkLoggedIn = async (req, res) => {
    try {
        // Extract the token from the request headers or cookies
        const token = res.locals.cookie.token;
        if (!token) {
            // If no token is found, the user is not logged in
            return;
        }

        // Verify the token
        const decoded = jwt.verify(token, 'q1w2e3');

        if (!decoded) {
            // If the decoded information is not as expected, the user is not logged in
            return;
        }
        console.log(decoded);

        res.locals.farmer = await FarmerModel.findOne({"_id": decoded.farmerId});
        console.log(res.locals.farmer);
    } catch (error) {
        // If there's an error in verification, the token is invalid, and the user is not logged in
        console.log(error);
    }
};
