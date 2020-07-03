import { useRef, useEffect } from 'react'
import { Chart } from 'chart.js'

export const useCircleGraph = (total_amount) => {

    const ref = useRef(null)
  
    const colors = ['green', 'blue', 'orange']
      useEffect(() => {
        const grafica = ref.current
        new Chart(grafica, {
          type: 'pie',
          data: {
            datasets: [
              {
                data: total_amount.map(item => item),
                backgroundColor: colors.map(color => color),
                borderWidth: 0
              }
            ],
            labels: [
              'APPROVED',
              'PENDIDG',
              'REJECTED'
            ]
          },
          options: {
              title: {
                  display: true,
                  text: 'Suma de total_amount por status',
                  fontSize: 30,
                  padding: 30,
                  fontColor: 'grey'
              },
              legend:{
                  position: 'bottom',
                  labels: {
                      padding: 20,
                      boxWidth: 25,
                      fontFamily: 'system-ui',
                      fontColor: '#000'
                  }
              },
          }
        })
      },)
  
      return { ref }
  }