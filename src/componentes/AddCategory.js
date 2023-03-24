import React, { useState } from 'react'
import PropTypes from 'prop-types';
const AddCategory = ({handleAdd,setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('prevent')
       const {value}  = e.target.newCategory;
       if(!value.trim()) {
        console.log('validation')
        return
       }
       handleAdd(setCategories,value)
       e.target.reset()
      
    }
  return (
    
    <form onSubmit={ handleSubmit }>
   <label>Add Category
    <input type="text"  name='newCategory' onFocus={()=>setInputValue('')} 
    // required
     onChange={(e)=>setInputValue(e.target.value)}     placeholder="agregar categorias" ></input>
   </label>
   {inputValue}
   </form>
   

  )
}
AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired
}

export default AddCategory