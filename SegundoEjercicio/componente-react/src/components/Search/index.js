import React, { useState, useContext, useRef } from 'react'
import './styles.scss'
import { Context } from '../../context'

export const Search = ({ product }) => {
    const ref = useRef(null)
    const { setInputValue, setInputValue2 } = useContext(Context)
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        const { offsetLeft, offsetTop } = ref.current
        const filterProduct = product.filter(item => {
            const value = e.target.value
            setValue(value)
            return item.includes(value.toUpperCase())
        })
        if(offsetLeft === 14 || offsetTop === 64){
            setInputValue(filterProduct)
        }
        if(offsetLeft === 398 || offsetTop === 270){
            setInputValue2(filterProduct)
        }
        return filterProduct
    }
    return(
             <form className="search">
              <input 
                ref={ref}
                type="text" 
                className="search__input"  
                placeholder="Buscar columna"
                value={value}
                onChange={handleChange}
            />
            </form>
    )
}