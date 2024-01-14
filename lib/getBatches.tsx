const batches: Batch[] = [
    {
      "id": "1",
      "name": "Batch A",
      "time": "9:00 AM - 12:00 PM",
      "type": "Morning",
      "noOfStudents": 30,
      "createdOn": "2024-01-13T08:00:00",
      "createdBy": "Admin",
      "editedOn": "2024-01-13T10:30:00",
      "editedBy": "Editor",
    },
    {
      "id": "2",
      "name": "Batch B",
      "time": "2:00 PM - 5:00 PM",
      "type": "Afternoon",
      "noOfStudents": 25,
      "createdOn": "2024-01-14T09:30:00",
      "createdBy": "Admin",
    },
    {
      "id": "3",
      "name": "Batch C",
      "time": "6:00 PM - 9:00 PM",
      "type": "Evening",
      "noOfStudents": 20,
      "createdOn": "2024-01-15T11:45:00",
      "createdBy": "Admin",
    },
    {
      "id": "4",
      "name": "Batch D",
      "time": "10:00 AM - 1:00 PM",
      "type": "Morning",
      "noOfStudents": 35,
      "createdOn": "2024-01-16T07:15:00",
      "createdBy": "Admin",
      "editedOn": "2024-01-16T11:00:00",
      "editedBy": "Editor",
    },
    {
      "id": "5",
      "name": "Batch E",
      "time": "4:00 PM - 7:00 PM",
      "type": "Afternoon",
      "noOfStudents": 28,
      "createdOn": "2024-01-17T10:00:00",
      "createdBy": "Admin",
    },
  ];
  
export default async function getBatches () {
  const res1: Batch[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve(batches);
    }, 1000);
  })
  return res1
}

export async function getBatch (batchId: string) {
  const res1: Batch = await new Promise(resolve => {
    setTimeout(() => {
      resolve(batches[0]);
    }, 1000);
  })
  return res1
}
