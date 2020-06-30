const ul = document.querySelector('ul')

const setColumn = (column) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            ul.innerHTML += `<li>${column}<li>`
            resolve(column)
          }, Math.random() * 5000)
    })

    return promise
}


const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id'
]

async function showColumns() {
   for(let col = 0; col < columns.length; col++){
    await setColumn(columns[col])
  }
}

showColumns()



