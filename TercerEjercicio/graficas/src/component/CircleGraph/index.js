import React from 'react'
import { useCircleGraph } from '../../hooks/useCircleGraph'


export const CircleGraph = ({ total_amount }) => {
    const { ref } = useCircleGraph(total_amount)
    
    return <canvas ref={ref} width="600" height="200"></canvas>
}