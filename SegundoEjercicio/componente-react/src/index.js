import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from './context'

ReactDOM.render(
    <Provider>
      <DndProvider backend={HTML5Backend}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </DndProvider>
    </Provider>,
  document.getElementById('root')
);

