import {HeartIcon} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
function SearchCard({data}) {
    const {img,location,title,description,star,price,total,long,lat} = data;
    return (
        <div className="p-1 flex   w-full  sm:p-4 border-b-[1px] border-gray-300 cursor-pointer">
            <div className="relative h-52 w-72">
                <Image
                    src={img}
                    layout='fill'
                    
                    objectPosition="left"
                    className='rounded-2xl'
                />
            </div>

            <div className='hidden sm:flex  flex-col  justify-between px-3'>
                <div>
                    <p className="text-xs sm:text-sm text-gray-500  leading-3">{location}</p>
                    <p className="text-md sm:text-lg text-gray-900 mt-2 mb-1.5">{title}</p>
                    <hr className='w-10' />
                    <p className="text-xs sm:text-sm text-gray-500 leading-3 mt-2">{description}</p>
                </div>
       

                <div className="flex justify-between items-end">

                    <p className='text-xs sm:text-sm font-semibold'><StarIcon className="inline sm:text-sm text-red-500 h-5 w-5 mr-1"/>{star}<span className="font-light text-gray-800">(65 reviews)</span></p>
                    <div>
                        <h1 className="font-bold">₹{price}<span className='font-thin text-base'></span></h1>
                        <p className="text-sm hover:underline">{total}</p>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

export default SearchCard
