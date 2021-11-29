import Image from 'next/image'

function MediumCard({img,title}) {
    return (
        <div>
            <img src={img} className="min-h-[280px]
 min-w-[280px] rounded-lg object-cover transition hover:scale-105 duration-300 ease-out"/>
            <h1 className='pt-2 text-md font-semibold'>{title}</h1>
        </div> 
    );
}

export default MediumCard
