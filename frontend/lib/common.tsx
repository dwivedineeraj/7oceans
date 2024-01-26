// Function to get subjects
export async function getSubjects(): Promise<Subject[]> {
    console.log(process.env)
    return await fetch(process.env.apiUrl as string + '/subjects')
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
export async function getPipelines(): Promise<Pipeline[]> {
    return await fetch(process.env.apiUrl as string + '/pipelines')
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
export async function getLeads(): Promise<Lead[]> {
    return await fetch(process.env.apiUrl as string + '/leads')
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
