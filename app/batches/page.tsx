// Batches.js

import React from 'react';
import getBatches from '@/lib/getBatches';
import Link from 'next/link';

const Batches = async () => {
    const batches: Batch[] = await getBatches();

    return (
        <div className="container mx-auto p-8 grid grid-cols-1 gap-4">
            {batches.map((batch) => (
                <div key={batch.id} className="card">
                    <Link href={`/batches/${batch.id}`} className="text-blue-500 hover:underline">
                        {`${batch.name} [${batch.time}]`}
                    </Link>
                    <p className="text-gray-600 mb-2">{batch.type}</p>
                    <p className="text-gray-600 mb-2">Created on: {batch.createdOn}</p>
                    <p className="text-gray-600 mb-2">Created by: {batch.createdBy}</p>
                    {batch.editedBy && <p className="text-gray-600 mb-2">Edited by: {batch.editedBy}</p>}
                    {batch.editedOn && <p className="text-gray-600 mb-2">Edited on: {batch.editedOn}</p>}
                </div>
            ))}
        </div>
    );
};

export default Batches;
