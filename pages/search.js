import Header from "../components/Header"
import {SearchCard} from '../components'
function search() {
    const button = "px-4 py-1 text-sm rounded-2xl border-[1px] cursor-pointer"
    const headerPart = (
        <section className='sticky top-20 flex-nowrap overflow-x-auto bg-white z-50 flex py-4 px-4 w-full shadow-sm'>
            <div className="flex px-2 space-x-2 border-r-[1px] border-gray-200">
                <p className={button}>Price</p>
                <p className={button}>Type of place </p> 
            </div>
            <div className="flex  flex-1 justify-between px-2" >
                <p className={button}>Free cancellation</p>
                <p className={button}>Wifi</p>
                <p className={button}>Air conditioning</p>
                <p className={button}>Washing machine</p>
                <p className={button}>Iron</p>
                <p className={button}>Dedicated workspace</p>
                <p className={button}>Free parking</p>
                <p className={button}>Dryer</p>
                <p className={button}>Filter</p>
            </div>

    </section>
    )
    return (
        <div className='w-full'>
            <Header sticky={true} HeaderPart={headerPart} />
            {headerPart}
            <main className=''>
                <section className="flex">
                    <div className="flex flex-col">
                        <p className="p-4 ">
                        26 stays in Ranchi
                        </p>
                        <SearchCard/>
                        <SearchCard/>
                        <SearchCard/>
                        <SearchCard/>

                    </div>
                    
                    <div>
                          
                    </div>
                </section>

            </main>
            
        </div>
    )
}

export default search
