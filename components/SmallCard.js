import Image from 'next/image'
function SmallCard({location,distance,img}) {
    return (
        <div className='flex hover:bg-gray-100 cursor-pointer px-4 py-2 mt-4 rounded-lg space-x-2 hover:scale-105 transition duration-800 ease-out'>
            {/* left */}
            <div className='relative h-16 w-16'>
                <Image src={img} 
                 layout='fill'
                 className='rounded-lg'
                 onDragStart={(e)=>e.preventDefault()}
                />
            </div>
            {/* right */}
            <div className='flex flex-col px-4 pt-4 justify-center items-center'>
                <p>{location}</p>
                <p>{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard;
