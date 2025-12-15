import React from 'react';

const ProgressActions = ({ totalHabits, completedHabits, progressPercentage }) => {
    return (
        <div className='text-center  p-4 rounded-xl text-gray-600 mt-5'>
            <p className='text-xl font-bold mb-2'>Overall Progress___
                 {completedHabits} of {totalHabits} habits completed
            </p>
            
            <div className='flex items-center justify-center mb-3'>
                <div className='w-3/4 h-6 bg-red-700 rounded-full mr-4'>
                    <div 
                        className='h-full text-center text-xs text-white bg-green-500 rounded-full transition-all duration-500'
                        style={{ width: `${progressPercentage}%` }}
                    >
                        {/* {progressPercentage}% */}
                    </div>
                </div>
                <p className='text-2xl font-extrabold'>{progressPercentage}%</p>
            </div>
            
            
        </div>
    );
};

export default ProgressActions;