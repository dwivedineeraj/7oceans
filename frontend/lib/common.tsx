// Function to get subjects
export function getSubjects(): Promise<any[]> {
    return fetch(process.env.apiUrl as string)
        .then(response => response.json())
        .then(data => {
            // Process the data here
            return data;
        })
        .catch(error => {
            console.error('Error fetching subjects:', error);
            return [];
        });
}

// Function to get pipelines
export function getPipelines(): Promise<string[]> {
    const apiUrl = process.env.API_ADDRESS; // Replace API_ADDRESS with the actual environment variable name

    return fetch(process.env.apiUrl as string)
        .then(response => response.json())
        .then(data => {
            // Process the data here
            return data;
        })
        .catch(error => {
            console.error('Error fetching pipelines:', error);
            return [];
        });
}

// Function to get leads
export function getLeads(): Promise<string[]> {
    const apiUrl = process.env.API_ADDRESS; // Replace API_ADDRESS with the actual environment variable name

    return fetch(process.env.apiUrl as string)
        .then(response => response.json())
        .then(data => {
            // Process the data here
            return data;
        })
        .catch(error => {
            console.error('Error fetching leads:', error);
            return [];
        });
}
