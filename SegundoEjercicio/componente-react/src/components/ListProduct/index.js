import React from 'react'
import './styles.scss'
import { MdDone } from 'react-icons/md'
import { useStateItem } from '../../hooks/useStateItem'

export const ListProduct = ({ item }) => {

    const { color, icon, handleClick } = useStateItem()

    return(
        <div 
            className={`list ${color 
                ? 'colorWhite'
                : 'colorBlue'
            }
            `} 
            onClick={handleClick}
        >
            <MdDone size="25" className={`${icon ? 'icon' : 'iconVisible'}`} />
            <p className="list__p">{ item }</p>
        </div>
    )
}