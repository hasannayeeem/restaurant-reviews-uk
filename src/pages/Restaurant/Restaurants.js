import React from 'react'
// import CardsHeader from '../home/Cards/CardsHeader'
import useRestaurants from '../../hooks/useRestaurants'
import Card from '../home/Cards/Card'
import Topbar from '../../components/Topbar'

const Restaurants = () => {
	const [restaurants] = useRestaurants([])
	return (
		<div>
            {/* <CardsHeader /> */}
			<Topbar />
			<div className='flex justify-center items-center py-12'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					{restaurants.map(restaurant => (
						<Card restaurant={restaurant} key={restaurant._id}></Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Restaurants