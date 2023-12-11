import React from 'react';
import { Rotate } from 'react-reveal';
import { Link } from 'react-router-dom';

const Menu = ({menu}) => {
    const { title, image, name, price} = menu;
    return (
        <Link to={`/companies/${name}`}>
            <Rotate top left>
            <div className="lg:max-w-lg py-5 transform hover:-translate-y-2 transition duration-500">
            <figure className="">
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtaO9pf5fV0B_ZZLDw1O_4MYnNRd_8bNYAdlHf0iNCDGi8kDlD3GszfCJpZPAmiUQmP0&usqp=CAU'} alt={title} className="p-4 w-52 mx-auto h-52 shadow-lg rounded-xl" />
            </figure>
            <div className=" text-center mt-3">
                <Link to={`/companies/${name}`} className='d-block'>
                    <button className={`w-50 font-bold text-black text-gradient-to-l from-secondary to-primary hover:text-gradient-to-r py-1`}>{name}</button>
                </Link>
            </div>
        </div></Rotate>
        </Link>
    );
};

export default Menu;