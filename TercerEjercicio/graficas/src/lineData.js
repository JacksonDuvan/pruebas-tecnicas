import { arrayApproved, arrayPending, arrayRejeted } from './circleData'

export const pending = []
export const approved = []
export const rejeted = []

let apro = 0, apro1 = 0, apro2 = 0
let rej = 0, rej1 = 0, rej2 = 0
let pen = 0, pen1 = 0, pen2 = 0

const creationDate = (item) => {
    if(item.creation_date === "05/01/2020"){
        if(item.status === 'APPROVED'){
            apro += item.total_items
        }else if(item.status === 'REJECTED'){
            rej += item.total_items
        }else{
            pen += item.total_items
        }
    }
    if(item.creation_date === "05/02/2020"){
        if(item.status === 'APPROVED'){
            apro1 += item.total_items
        }else if(item.status === 'REJECTED'){
            rej1 += item.total_items
        }else{
            pen1 += item.total_items
        }
    }
    if(item.creation_date === "05/03/2020"){
        if(item.status === 'APPROVED'){
            apro2 += item.total_items
        }else if(item.status === 'REJECTED'){
            rej2 += item.total_items
        }else{
            pen2 += item.total_items
        }
    }
}

arrayApproved.map(item => (
    creationDate(item)
))
arrayRejeted.map(item => (
    creationDate(item)
))
arrayPending.map(item => (
    creationDate(item)
))


approved.push(apro, apro1, apro2)
rejeted.push(rej, rej1, rej2)
pending.push(pen, pen1, pen2)
