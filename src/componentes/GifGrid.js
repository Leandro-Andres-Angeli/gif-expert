import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
  
   const [images, setImages] = useState(0)
const {loading,data} = useFetchGifs(category)
console.log(loading)
console.log(data)
  //  useEffect(() => {
     
 
  //  getGifs(category).then(imgs=> setImages( imgs))
  //  }, [category ])
   
    
  return (
    <div className=' animate__animated animate__fadeIn animate__delay-2s ' style={{"margin":" 20px" }} >
        <h3>{category}</h3>
      <div style={{"margin":" 20px" }}>{ loading ? 'data cargando...' : 'cargado'} </div>   
      {/* <div className='card-grid'>
         {images.data.map((data)=>
            <GifGridItem key={data.id} {...{...data}} />
          )}
      </div> */}
         <div className='card-grid animate__animated animate__fadeIn '>
         {data.map((data)=>
            <GifGridItem key={data.id} {...{...data}} />
          )}
      </div>
    </div>
  )
}
export  default GifGrid