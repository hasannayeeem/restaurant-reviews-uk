import { useEffect, useState } from "react"

const useRestaurant = ({restaurantId}) =>{
    const [restaurant, setRestaurant] = useState([]);
    const [resLoading, setResLoading] = useState(true)
    console.log(restaurantId);
    useEffect( () =>{
        fetch(`http://localhost:5000/api/v1/get-single-restaurant/${restaurantId}`)
        // fetch(`tests.json`)
        .then(res => res.json())
        .then(data => {
            setRestaurant(data?.singleRestaurant)
            setResLoading(false)
        });   
    },[restaurant, restaurantId, resLoading, setRestaurant]);
    return [restaurant, resLoading, setRestaurant];
}
export default useRestaurant;