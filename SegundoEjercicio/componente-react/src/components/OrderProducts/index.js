import React from 'react'
import './styles.scss'
import { ItemProduct } from '../ItemProduct'

export const OrderProducts = ({ data, addItem, moveCard }) => {
    
    const ascending = () => {
        addItem()
        data.sort((a, b) => {
            if(a.nombre > b.nombre){
                return 1
            }
            if(a.nombre < b.nombre){
                return -1
            }
            return 0
        })
    }
    const descending = () => {
        addItem()
        data.sort((a, b) => {
            if(b.nombre > a.nombre){
                return 1
            }
            if(b.nombre < a.nombre){
                return -1
            }
            return 0
        })
    }

    return(
        <div>
            <h3 className="App__h3">¿Cómo quieres ordenarlos?</h3>
            <div className="order-container">
            {
                data.map((item, index) => (
                   <ItemProduct
                    key={item.id} 
                    {...item} 
                    index={index}
                    moveCard={moveCard}
                    ascending={ascending}
                    descending={descending}
                    />
                 )) 
            }
            </div>
        </div>    
    )
}



