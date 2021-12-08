import { Header,Footer,Map } from "../components"
import {SearchCard} from '../components'
import {useParams} from 'react-router-dom'

function search({searchResults}) {
    console.log(searchResults)
    const button = "px-4 py-1 text-sm rounded-2xl border-[1px] cursor-pointer whitespace-nowrap"
    // console.log('params',useParams())
    const headerPart = (
        <section className='p-1 sticky top-20 flex-nowrap overflow-x-auto bg-white z-10 flex sm:p-2 md:p-4 w-full shadow-sm'>
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
            <main className='flex xl:grid xl:grid-cols-2 justify-center sm:justify-start'>
                <section className="flex">
                    <div className="">
                        <p className="p-4 ">
                        26 stays in Ranchi
                        </p>
                        {searchResults.map((data,id)=>(
                            <SearchCard key={id} data={data} />
                        ))}
                        {searchResults.map((data,id)=>(
                            <SearchCard key={id} data={data} />
                        ))}
                        
                        {/*
                        <SearchCard/>
                        <SearchCard/>
                        <SearchCard/> */}

                    </div>
                    
                    
                </section>
                <section className="hidden xl:flex sticky h-[100vh] top-32">
                         {searchResults&& <Map searchResults={searchResults} />}
                </section>

            </main>
            <Footer/>
        </div>
    )
}

export default search;

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz').then((res)=>res.json());
    // console.log(searchResults)
    return {
        props:{
            searchResults
        }
    };
}
