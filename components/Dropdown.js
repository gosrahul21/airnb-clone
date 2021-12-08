import {useState,useEffect, Children} from 'react';

function Dropdown({items,children}) {
    const [show,setShow] = useState(true);
    useEffect(()=>{
        const close = ()=>{
            setShow(false);
        }
        window.addEventListener('click',close);

        return ()=>{
            window.removeEventListener('click',close);
        }
    },[])
    
    return (
        <div className="relative">
            <div  onClick={(e)=>{setShow(!show); e.stopPropagation();}}>
                {children}
            </div>
            {show&&<div className="absolute top-14 bg-white text-gray-700 rounded-xl z-[100]  right-0 shadow-md transition duration-500 ease-in">
                {items.map((item)=>(
                    <div className="w-60 cursor-pointer mt-2 mb-2 text-sm hover:bg-gray-100 px-2 py-1 whitespace-nowrap ">
                        {item.name}
                    </div>))}
            </div>}
        </div>
        
    )
}

export default Dropdown
