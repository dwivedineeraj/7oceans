type Student = {
    "id": string,
    "name": string,
    "numbers": string,
    "batch": string,
    "createdAt": string,
    "avatar": string,
    "selected"?: boolean
}

interface StudentDoc {
    "id": string,
    "name": string,
    "numbers": string,
    "batch": string,
    "createdAt": string,
    "avatar": string,
    "activities": {
        "id": string
        "updaterName": string,
        "updaterId": string,
        "updateTime": string,
        "description": string,
    }[],
}

interface Batch {
    "id": string
    "name": string,
    "time": string,
    "type": string,
    "noOfStudents": number,
    "createdOn": string,
    "createdBy": string,
    "editedOn"?: string,
    "editedBy"?: string,
}

interface Activity {
    "id": string
    "updaterName": string,
    "updaterId": string,
    "updateTime": string,
    "description": string,
}

interface Lead {
    "id": string,
    "name": string,
    "dob": string,
    "guardianName"?: string,
    "subject": string,
    "trialDateTime"?: string,
    "studentPhone": string,
    "studentEmail": string,
    "guardianPhone"?: string,
    "guardianEmail"?: string,
    "gender": string,
    "avatar": string,
    "activities": Activity[],
}


interface Stage {
    "name": string,
    "id": string,
    "position": number,
}

interface Pipeline {
    "name": string,
    "id": string,
    "stages": Stage[],    
}

interface Subject {
    "name": string,
    "id": string,
}
