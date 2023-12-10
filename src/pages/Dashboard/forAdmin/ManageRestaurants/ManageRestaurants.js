import React from 'react';
import useRestaurants from '../../../../hooks/useRestaurants';
import RestaurantRow from './RestaurantRow';

const ManageRestaurants = () => {
    const [restaurants] = useRestaurants();
    return (
        <div className='lg:px-4 px-2 pb-5'>
            <h2 className="text-2xl px-4 mb-2 text-gray-200">All Restaurants: {restaurants?.length}</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="text-gray-400 w-full text-sm text-left">
                    <thead className={`bg-gray-700 text-gray-400 text-xs uppercase`}>
                        <tr>
                        <th scope='col' className='py-2  sm:py-3'></th>
                        <th scope='col' className='py-2 sm:py-3'>
                                Image
                            </th>
                            <th scope='col' className='py-2 sm:py-3'>
                                Name
                            </th>
                            <th scope='col' className='py-2 sm:py-3 text-center'>
                                status
                            </th>
                            <th scope='col' className='py-2 sm:py-3 text-center'>
                                submission
                            </th>
                            <th scope='col' className='py-2 sm:py-3 text-center'>
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            restaurants?.map((quiz, index)=><RestaurantRow
                                index={index}
                                key={quiz._id}
                                quiz={quiz}
                                // refetch={refetch}
                                ></RestaurantRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageRestaurants;