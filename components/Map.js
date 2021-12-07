import ReactMapGl,{Marker} from 'react-map-gl';
import React,{useEffect} from 'react'
import {getCenter} from 'geolib'

function Map({searchResults}) {

    
    
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });
    
    useEffect(()=>{
        const center = getCenter(searchResults.map(({long,lat})=>({latitude:lat,longitude:long})))
        setViewport({
            ...center,
            zoom:11

        })
    },[])
    

    return (
        
        <ReactMapGl
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/gosrahul21/ckwvvk03xf8ud15nvelalnip4"
            mapboxApiAccessToken="pk.eyJ1IjoiZ29zcmFodWwyMSIsImEiOiJja2NoNmdzOGcwejNnMnJubmw2ejFmOXJiIn0.ULVloziKD1RVGSasdRv9Ew"
            onViewportChange={(viewport)=>setViewport(viewport)}
        >
            {searchResults.map(({price,long,lat})=>(
                <Marker
                latitude={lat}
                longitude={long}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p className="bg-white animate-bounce text-gray-500 rounded-xl p-1 cursor-pointer hover:font-semibold shadow-md">{price}</p>
                    
                </Marker>
            ))}
    </ReactMapGl>
    
    )
}

export default Map
