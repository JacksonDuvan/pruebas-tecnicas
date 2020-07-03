import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js'

export const useLineGraph = (approved, pending, rejeted) => {
    const ref = useRef(null)
  
    useEffect(() => {
      const grafica = ref.current
      new Chart(grafica, {
        type: 'line',
        data: {
            labels:[
                '1/05/2020',
                '2/05/2020',
                '3/05/2020'
            ],
          datasets: [
            {
                label: 'APPROVED',
                borderColor: 'blue',
                lineTension: 0,
                data: approved.map(item => item)
            },
            {
                label: 'PENDING',
                borderColor: 'orange',
                lineTension: 0,
                data: pending.map(item => item)
            },
            {
                label: 'REJECTED',
                borderColor: 'grey',
                lineTension: 0,
                data: rejeted.map(item => item)
            },

          ],
        },
        options: {
            title: {
                display: true,
                text: 'Suma de total_items',
                fontSize: 30,
                padding: 30,
                fontColor: 'grey'
            },
            legend: {
                position: 'right',
                labels:{
                    fontColor: '#000',
                    padding: 20,
                }
            },
            elements:{
                line: {
                    fill: false,
                    fontFamily: 'system-ui',
                },
                point: {
                    borderWidth: 5,
                }
            },
            layout: {
                padding:{
                    left: 300,
                    right: 300,
                    top: 10,
                    bottom: 0
                }
            }
        },
      })
    }, [approved, pending, rejeted])

    return { ref }
}
