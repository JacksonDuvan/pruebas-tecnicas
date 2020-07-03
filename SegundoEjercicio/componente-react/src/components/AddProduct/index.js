import React from 'react'
import './styles.scss'
import { MdDone } from 'react-icons/md'
import { useStateItem } from '../../hooks/useStateItem'

export const AddProduct = ({ item, addItem }) => {
    const {color, icon, handleClick } = useStateItem()

    const handleClickItem = () => {
        addItem(item, color, icon)
    }
    return(
            <div onClick={handleClickItem}>
                 <div 
                className={`list ${color 
                    ? 'colorBlue'
                    : 'colorWhite'
                }
                `} 
                onClick={handleClick}
            >
                <MdDone size="25" className={`${icon ? 'icon' : 'iconVisible'}`} />
                <p className="list__p">{ item }</p>
            </div>
            </div>
        )
}