import { useEffect, useState } from "react"

const useRestaurants = () =>{
    const [restaurants, setRestaurants] = useState([]);
    useEffect( () =>{
        // fetch('http://localhost:5000/api/v1/getAllPayment')
        fetch('restaurants.json')
        .then(res => res.json())
        .then(data => {
            setRestaurants(data)
        });
        
    },[restaurants, setRestaurants]);
    return [restaurants, setRestaurants];
}
export default useRestaurants;