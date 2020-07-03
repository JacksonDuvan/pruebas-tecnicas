import { data } from './data'

const dataChar = data.sort((a, b) => {
    if(a.status < b.status){
      return 1
    }
    if(a.status > b.status){
      return -1
    }
    return 0
})
  
export const total_amount = []
  
export const arrayRejeted = dataChar.splice(0,(16/2))
export const arrayPending = dataChar.splice(0,(6/2)) 
export const arrayApproved = dataChar
  
let rejeted = 0
let pending = 0
let approved = 0

arrayRejeted.map((item) => rejeted += item.total_amount)
arrayPending.map((item) => pending += item.total_amount)
arrayApproved.map((item) => approved += item.total_amount)

total_amount.push(approved.toFixed(3), pending.toFixed(3), rejeted.toFixed(3))

