import {HeartIcon} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
function SearchCard() {
    return (
        <div className=" flex p-4 border-b-[1px] border-gray-300 cursor-pointer">
            <div className=" relative h-52 w-72">
                <Image
                    src="https://a0.muscache.com/im/pictures/1aba6de7-1aba-42a3-b1fe-491595e2b145.jpg?im_w=720"
                    layout='fill'
                    
                    objectPosition="left"
                    className='rounded-2xl'
                />
            </div>

            <div className='flex flex-col  justify-between px-3'>
                <div>
                    <p className="text-sm text-gray-500  leading-3">Entire bungalow in Ranchi</p>
                    <p className="text-lg text-gray-900 mt-2 mb-1.5">Khusi</p>
                    <hr className='w-10' />
                    <p className="text-sm text-gray-500 leading-3 mt-2">7 guests · 3 Bedrooms · 3 beds · 2 bathrooms</p>
                </div>
       

                <div className="flex justify-between items-end">
                    <p className='text-sm font-semibold'>{<StarIcon className="text-red-500 h-5 w-5"/>}4.78<span className="font-light text-gray-800">(65 reviews)</span></p>
                    <div>
                        <h1 className="font-bold">₹4,649<span className='font-thin text-base'>/night</span></h1>
                        <p className="text-sm hover:underline">₹5,249total</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SearchCard
