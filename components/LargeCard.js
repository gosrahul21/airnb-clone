import Image from "next/image"

function LargeCard({url}) {

    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image 
                src={url}
                layout='fill'
                className='rounded-lg'
                />

        </div>

        <div className="absolute top-1/3 px-20">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Try hosting</h1>
            <p className="text-white mt-2 text-md w-80">Earn extra income and unlock new opportunities by sharing your spaces.</p>

            <button className="bg-white rounded-md py-2 px-4 mt-4">
              Learn more
            </button>
        </div>
        
        </section>

    )
}

export default LargeCard
