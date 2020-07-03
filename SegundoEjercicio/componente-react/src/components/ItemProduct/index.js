import React, { useRef } from 'react'
import './styles.scss'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import { MdDragHandle } from 'react-icons/md'
import { useDrag, useDrop } from 'react-dnd'

const ItemTypes = {
    CARD: 'card'
}

export const ItemProduct = ({ nombre, ascending, descending, index, id, moveCard }) => {

    const ref = useRef(null)
    const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      
      const clientOffset = monitor.getClientOffset()
      
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      
      moveCard(dragIndex, hoverIndex)
      
      item.index = hoverIndex
    },
  })
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    drag(drop(ref))

    const orderAscending = () => {
        ascending()
    }
    const orderDescending = () => {
        descending()
    }

    console.log(ref)
    return (
        <div className="order" ref={ref} style={{ backgroundColor: isDragging ? '#fff' : '' }}>
            <div className="order__icon">
                <MdDragHandle size={25}/>
            <p className="order__p">{nombre}</p>
            </div>
            <div>
                <AiOutlineSortAscending size={25} className="order__btn" onClick={orderAscending}/>
                <AiOutlineSortDescending size={25} className="order__btn" onClick={orderDescending}/>
            </div>
        </div>
    )
}
