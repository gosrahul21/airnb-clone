import Image from 'next/image'
import { useEffect,useState } from 'react';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'
function Header(){
    
    const [show,setShow] = useState(false);
    useEffect(()=>{
        onscroll = ()=>{
            if(scrollY>0){
                setShow(true)
            }else
            setShow(false)
        }
    },[setShow])


    return (
        <header className={` ${show?'sticky  shadow-md bg-white':'fixed bg-transparent text-white'}  w-full md:grid md:grid-cols-3 top-0 z-50  p-5 md:px-10`}>
            {/* left */}
            <div className="hidden md:flex items-center h-10 relative cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center bg-white cursor-pointer justify-center rounded-full border-2 p-2">
                <input 
                    type="text" 
                    placeholder="Start your Search"
                    className="outline-none flex-grow cursor-pointer"
                />
                <SearchIcon 
                className='hidden md:inline h-8  bg-red-400 text-white 
                cursor-pointer rounded-full p-2'/>
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