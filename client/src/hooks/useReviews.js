import { useEffect, useState } from "react"
import useRestaurant from "./useRestaurant";
import Loading from "../shared/Loading/Loading";

const useReviews = (restaurantId) =>{
    const [reviews, setReviews] = useState([]);
    const [restaurant, resLoading] = useRestaurant(restaurantId);
    resLoading &&  <Loading />
    useEffect( () =>{
        fetch(`http://localhost:5000/api/v1/reviews/${restaurantId}`)
        // fetch('https://restaurant-review-5my4yx1aq-hasannayeem.vercel.app/api/v1/get-all-restaurant')
        // fetch('reviews.json')
        .then(res => res.json())
        .then(data => {
            setReviews(data.allRestaurant)
        });
        
    },[reviews, restaurantId, setReviews]);
    return [restaurant?.reviews];
}
export default useReviews;