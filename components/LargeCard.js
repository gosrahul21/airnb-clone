import Image from "next/image"

function LargeCard({url}) {

    return (
        <section className='relative  flex flex-col sm:inline sm:h-96 w-full py-16 cursor-pointer'>

        <div className="p-2 bg-gray-900 sm:bg-white rounded-xl ">

        <div className="flex flex-col items-center sm:absolute sm:inline sm:top-1/3 sm:px-20">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Try hosting</h1>
            <p className="text-white mt-2 text-md w-80">Earn extra income and unlock new opportunities by sharing your spaces.</p>

            <button className="bg-white rounded-md py-2 px-4 mt-4">
              Learn more
            </button>
        </div>

            <div className='relative h-60 sm:h-96 w-full'>
                <Image 
                src={url}
                layout='fill'
                className='rounded-lg'
                />

        </div>
        </div>


        
        
        </section>

    )
}

export default LargeCard
