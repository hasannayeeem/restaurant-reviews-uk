import React, { useEffect, useState } from 'react'
// import CardsHeader from '../home/Cards/CardsHeader'
import useRestaurants from '../../hooks/useRestaurants'
import Card from '../home/Cards/Card'
import Topbar from '../../components/Topbar'

const Restaurants = () => {
	const [restaurants] = useRestaurants([])
	const [type, setType] = useState();
	const [searchTerm, setSearchTerm] = useState();
	const [filteredRestaurants, setFilteredRestaurants] = useState()
	console.log({restaurants, filteredRestaurants});
	const combinedRestaurants = filteredRestaurants ? filteredRestaurants : restaurants;
	  useEffect(()=>{
		filteredRestaurants &&  setFilteredRestaurants(restaurants.filter((restaurant)=> restaurant[type]?.toLowerCase().includes(searchTerm?.toLowerCase())))
	  },[searchTerm, restaurants, type])
	return (
		<div>
            {/* <CardsHeader /> */}
			<Topbar setSearchTerm={setSearchTerm} setType={setType}/>
			<div className='flex justify-center items-center py-12'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					{combinedRestaurants.map(restaurant => (
						<Card restaurant={restaurant} key={restaurant._id}></Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Restaurants