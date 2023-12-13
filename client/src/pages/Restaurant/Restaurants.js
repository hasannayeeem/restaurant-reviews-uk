import React, { useEffect, useState } from 'react';
import useRestaurants from '../../hooks/useRestaurants';
import Card from '../home/Cards/Card';
import Topbar from '../../components/Topbar';

const Restaurants = () => {
  const [restaurants] = useRestaurants([]);
  const [type, setType] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    if (!type && !searchTerm) {
      // If neither type nor searchTerm is set, show all restaurants
      setFilteredRestaurants(null);
    } else {
      // Apply filters
      setFilteredRestaurants(
        restaurants.filter((restaurant) =>
          restaurant[type]?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, type, restaurants]);

  return (
    <div>
      <Topbar setSearchTerm={setSearchTerm} setType={setType} />
      <div className='flex justify-center items-center py-12'>
        <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
          {filteredRestaurants
            ? filteredRestaurants.map((restaurant) => (
                <Card restaurant={restaurant} key={restaurant._id} />
              ))
            : restaurants.map((restaurant) => (
                <Card restaurant={restaurant} key={restaurant._id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
