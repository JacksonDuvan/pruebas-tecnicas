import { useState, useCallback } from 'react'
import update from 'immutability-helper'

export const useAddList = () => {
    const [data, setData] = useState([])
    const [item, setItem] = useState([])
    const [count, setCount] = useState(0)
  
    const addItem = (product, color, icon) => {
      setCount(count + 1)
      const newItem = [...item, {id: count, nombre: product}]
      setItem(newItem)
  
      if(!color && !icon){
        setItem([...item])
      }
  
    }
  
    const addElements = () => {
      setData(item)
    }
  
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = data[dragIndex]
        setData(
          update(data, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [data],
    )
  
    return { data, addElements, moveCard, addItem }
  }