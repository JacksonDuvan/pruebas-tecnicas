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
      // No reemplace artículos con ellos mismos
      if (dragIndex === hoverIndex) {
        return
      }
      // Determinar rectángulo en pantalla
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Obtener vertical medio
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determinar la posición del mouse
      const clientOffset = monitor.getClientOffset()
      // Consigue píxeles en la parte superior
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Solo realiza el movimiento cuando el mouse haya cruzado la mitad de la altura de los elementos
      // Al arrastrar hacia abajo, solo muévete cuando el cursor esté por debajo del 50%
      // Al arrastrar hacia arriba, solo muévete cuando el cursor esté por encima del 50%
      // Arrastrando hacia abajo
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Arrastrando hacia arriba
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Tiempo para realizar la acción.
      moveCard(dragIndex, hoverIndex)
      
      // Nota: ¡estamos mutando el elemento del monitor aquí!
      // Generalmente es mejor evitar mutaciones,
      // pero es bueno aquí por el rendimiento
      // para evitar búsquedas costosas de índices.
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
