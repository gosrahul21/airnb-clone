import Image from 'next/image'

import { useEffect,useState } from 'react';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'
import { SearchIcon as SearchIconOutline } from '@heroicons/react/outline';
import {DateRangePicker} from 'react-dates'
import { useRouter } from 'next/router'


function Header({sticky}){
    
    const [show,setShow] = useState(sticky);
    const [searchInput,setSearchInput] = useState("");
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [focus,setFocus] = useState(null)
    const [showCalen,setShowCalen] = useState(false)
    const router = useRouter();

    useEffect(()=>{
        onscroll = ()=>{
            if(scrollY>0){
                setShow(true)
            }else
            setShow(false)
        }
    },[setShow])


    return (
        <header className={`fixed ${show?' shadow-sm bg-white':' bg-transparent text-white  '}  w-full ${sticky&&'sticky'} md:grid md:grid-cols-3 transition transform ease-out duration-300 top-0 z-50  p-5 md:px-10`}>
            {/* left */}
            <div onClick={()=>router.push('/')} className="hidden md:flex items-center h-10 relative cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className='flex flex-col items-center justify-center'>
            <div className="p-1 flex items-center bg-white cursor-pointer justify-center w-full rounded-full border-2 sm:p-2">
                <SearchIcon onClick={()=>router.push({
                        pathname:'search',
                        query:{
                            location:"ranchi",
                            district:"Jharkhand"
                        }
                    })}
                    className='sm:hidden h-10 text-[#FE595E] cursor-pointer rounded-full p-2'/>
                <input 
                    type="text" 
                    placeholder="Start your Search"
                    value={searchInput}
                    onClick={()=>setShowCalen(true)}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    className={`outline-none flex-grow cursor-pointer text-gray-800 ml-2`}
                />
                <SearchIcon onClick={()=>router.push({
                    pathname:'search',
                    query:{
                        location:"ranchi",
                        district:"Jharkhand"
                    }
                })}
                className='hidden md:inline h-8  bg-red-400 text-white 
                cursor-pointer rounded-full p-2'/>
            </div>
            {showCalen&& !show && <DateRangePicker 
                className="rounded-full bg-red-600"
                startDate={startDate}
                startDateId="your_unique_start_date_id" 
                endDate={endDate} 
                endDateId="your_unique_end_date_id" 
                onDatesChange={({startDate,endDate}) =>{
                    if(startDate) setStartDate(startDate)
                    if(endDate) setEndDate(endDate)
                }}
                focusedInput={focus} 
                onFocusChange={focusedInput =>setFocus(focusedInput)} 
                
            />}
            </div>
 
            {/* right */}
            <div className={`hidden md:flex items-center justify-end  space-x-4 ${show?'text-gray-500':'text-white'}`}>
                <p className={"hidden md:inline cursor-pointer"}>Become a host</p>
                <GlobeAltIcon className=" h-6"/>

                <div className="flex bg-white items-center space-x-2 cursor-pointer border-2 rounded-full p-2">
                    <MenuIcon className='text-gray-500 h-6'/>
                    <UserCircleIcon className=' text-gray-500 h-6'/>
                </div>
            </div>
           

        </header>
    )
}

export default Header;