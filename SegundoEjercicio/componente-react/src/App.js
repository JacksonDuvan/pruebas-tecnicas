import React, { useContext } from 'react';
import './App.scss';
import { ListProduct } from './components/ListProduct'
import { product } from './product'
import { Search } from './components/Search'
import { AddProduct } from './components/AddProduct';
import { OrderProducts } from './components/OrderProducts'
import { useStateItem } from './hooks/useStateItem'
import { Context } from './context'
import { useAddList } from './hooks/useAddList'

function App() {
  const { inputValue, inputValue2 } = useContext(Context)
  const { uncheck } = useStateItem()

  const { data, addElements, moveCard, addItem } = useAddList()
  

  const dataItems2 = inputValue2.length > 0 ? inputValue2 : product 
  const dataItems = inputValue.length > 0 ? inputValue : product 

  return (
    <div className="App">
      <div className="App__ContainerLeft">
        <h3 className="App__h3">¿Qué columnas se repiten?</h3>
        <Search product={product}/>
        <section className="App__list">
        {
          dataItems.map((item, index) => (
            <ListProduct item={item} key={index} />
          ))
        }
        </section>
      </div>
      
      <div className="App__ContainerRight">
        <OrderProducts data={data} moveCard={moveCard} addItem={addItem} />
        <Search product={product}/>
        <section className="App__list2">
        {
          dataItems2.map((item, index) => (
            <AddProduct 
              item={item} 
              key={index}
              addItem={addItem}
            />
          ))
        }
        </section>
        <div className="btnContainer">
          <button className="btnCancelar" onClick={uncheck}>Cancelar</button>
          <button className="btnOk" onClick={addElements}>Ok</button>
        </div>
      </div>
    </div>
  );
}

export default App;
