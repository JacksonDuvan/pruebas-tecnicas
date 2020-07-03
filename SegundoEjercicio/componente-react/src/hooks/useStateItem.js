import { useState } from 'react'

export const useStateItem = () => {
    const [color, setColor] = useState(true)
    const [icon, setIcon] = useState(true)

    const handleClick = () => {
        setColor(!color)
        setIcon(!icon)
    }
    const uncheck = () => {
        setColor(true)
        setIcon(true)
    }

    return { color, icon, uncheck, handleClick }
}
