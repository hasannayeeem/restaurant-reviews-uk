import React from 'react'
import Card from './Card'
import useRestaurants from '../../../hooks/useRestaurants'

const Cards = () => {
	const [restaurants] = useRestaurants([])
	return (
		<div>
            <h2
				style={{ fontFamily: "'Rajdhani', sans-serif" }}
				className={`${
					1>0 && 'text-gray-300'
				} uppercase text-gray-300 mt-8 font-bold text-3xl py-3 text-center`}
			>
				Trending <span className='text-primary'>Restaurants</span>
			</h2>
			<div className='flex justify-center'>
				<div className=' rounded-md w-32 h-1 bg-[#ef13bc]'></div>
				<div className=' rounded-md w-4 h-1 mx-2 bg-[#b60f8f]'></div>
				<div className=' rounded-md w-2 h-1 bg-[#8c2dd4]'></div>
			</div>
			<div className='flex justify-center items-center py-20'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					{restaurants.slice(0, 6).map(restaurant => (
						<Card restaurant={restaurant} key={restaurant._id}></Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Cards