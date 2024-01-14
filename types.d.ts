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