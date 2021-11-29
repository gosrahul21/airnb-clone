import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
        
        2xl:h-[700px] bg-black' 
        >
            <Image 
                src="https://links.papareact.com/0fm"
                layout='fill'
                objectFit='cover'
                onDragStart={(e)=>e.preventDefault()}
            />
            <div className="flex flex-col absolute top-1/2 items-center w-full">
                <p className="text-sm sm:text-3xl md:text-5xl font-bold">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white 
                px-10 py-4 shadow-md 
                rounded-full font-bold
                my-4 hover:shadow-lg active:scale-90 duration-500
                ">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner;
