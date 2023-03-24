import React, { useEffect } from 'react'

const GifGridItem = ({id,title,img}) => {
    
    
  return (
    <div className='card-wrapper '>
    <div data-id={id} key={id} className='card card-grid animate__animated animate__fadeIn  ' >
    <h4>{title} </h4>
    <img src={img} alt=''></img>
  </div>
  </div>
  )
}

export default GifGridItem