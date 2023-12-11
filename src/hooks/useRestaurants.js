import { useEffect, useState } from "react"

const useRestaurants = () =>{
    const [restaurants, setRestaurants] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/api/v1/get-all-restaurant')
        // fetch('https://restaurant-review-5my4yx1aq-hasannayeem.vercel.app/api/v1/get-all-restaurant')
        // fetch('restaurants.json')
        .then(res => res.json())
        .then(data => {
            setRestaurants(data.allRestaurant)
        });
        
    },[restaurants, setRestaurants]);
    return [restaurants, setRestaurants];
}
export default useRestaurants;