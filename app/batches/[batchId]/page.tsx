'use client'
import React, { useState, useEffect } from 'react';
import { getBatch } from '../../../lib/getBatches'
type Params = {
    params: {
        studentId: string
    }
}



const Batch: React.FC<Params> = ({ params: { batchId } }: Params) => {
    const [batch, setBatch] = useState<Batch | null>(null);

    const fetchBatch = async () => {
        setBatch(await getBatch(batchId))
    }

    useEffect(() => {
        fetchBatch()
    })
    return <>
        {batch &&(
            <div key={batch.id} className="bg-white rounded-md p-4 mb-4 shadow-md">
                    <div className="text-blue-500 hover:underline">
                        {`${batch.name} [${batch.time}]`}
                    </div>
                    <p className="text-gray-600 mb-2">{batch.type}</p>
                    <p className="text-gray-600 mb-2">Created on: {batch.createdOn}</p>
                    <p className="text-gray-600 mb-2">Created by: {batch.createdBy}</p>
                    {batch.editedBy && <p className="text-gray-600 mb-2">Edited by: {batch.editedBy}</p>}
                    {batch.editedOn && <p className="text-gray-600 mb-2">Edited on: {batch.editedOn}</p>}
                </div>
        )}
    </>
}

export default Batch