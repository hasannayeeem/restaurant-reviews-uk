import React from 'react';
import hero from '../../../assests/optional/herov5.png'

const Banner = () => {
    return (
        <div className='bg-bg-p'>
			<section
				className={`${1>2 ? "bg-gray-900" : "bg-p"} duration-300 cover bg-blue-teal-gradient text-center sm:text-left relative   px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-64 overflow-hidden sm:py-48 flex
				items-end sm:items-center h-[550px]  sm:pb-40 pb-16  sm:min-h-screen`}
			>
				<div className='lg:w-3/4 xl:w-7/12 relative z-10 h-100 lg:mt-16'>
					<div>
						<h1 className='text-white leading-9 text-3xl sm:text-4xl font-bold'>
						Welcome to Taste Master! Embark on a Culinary <span className='text-primary'>Adventure</span>  of Flavorful Knowledge!
						</h1>
						<p className='text-blue-100 md:text-lg leading-snug mt-2 sm:px-0 px-5 sm:mt-4'>
						Explore Epicurean Insights with Flavor Master. Delve into a world of culinary knowledge through our extensive collection of free and premium restaurant reviews. Enrich your palate and discover the finest dining experiences curated just for you.
						</p>
						<a
							href='/restaurants'
							className='px-8 py-3 hover:bg-primary bg-[#ef13bc] hover:text-white  transition text-white rounded inline-block mt-4 sm:mt-8 font-semibold'
						>
							Explore
						</a>
					</div>
				</div>
                <div className=''>
					<img
						src={hero}
						alt=''
						className='w-96 hidden lg:block md:block h-full object-cover'
					/>
				</div>
			</section>
		</div>
    );
};

export default Banner;