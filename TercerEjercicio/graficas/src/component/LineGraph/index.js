import React from 'react'
import { useLineGraph } from '../../hooks/useLineGraph'

export const LineGraph = ({ approved, rejeted, pending }) => {
    const { ref } = useLineGraph(approved, rejeted, pending)
    
    return <canvas ref={ref} width="600" height="200"></canvas>
}