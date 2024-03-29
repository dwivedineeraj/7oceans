// Loading.js

import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-r-4 border-gray-300 h-12 w-12"></div>
            <span className="ml-3 text-gray-700">Loading...</span>
        </div>
    );
};

export default Loading;
