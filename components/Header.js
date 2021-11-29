import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'
function Header(){
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div className="flex items-center h-10 relative cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center cursor-pointer justify-center rounded-full md:border-2 p-2">
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
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>

                <div className="flex items-center space-x-2 cursor-pointer border-2 rounded-full p-2">
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}

export default Header;