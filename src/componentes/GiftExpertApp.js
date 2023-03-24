import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import AddCategory2 from './AddCategoryEjercicio2'
import GifGrid from './GifGrid'

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"])
  //  const handleAdd = (setter)=> setter((prev)=>[...prev,"nuevo"])
  const handleAdd = (setter,value)=> setter((prev)=>[...prev,value])
  return (
    <>
    <h2>GiftExpertApp</h2>
    {/* <AddCategory  {...{handleAdd,setCategories}} /> */}
    <AddCategory2 {...{setCategories}}/>
     {/* <button onClick={()=>handleAdd(setCategories)}>agregar</button>  */}
    <hr/>
    
      <GifGrid  {...{category : categories.at(categories.length - 1)}} ></GifGrid> 
    
    </>
  )
}

GiftExpertApp.propTypes = {}

export default GiftExpertApp