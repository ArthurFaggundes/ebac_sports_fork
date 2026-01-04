import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento #root não encontrado no index.html')
}

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
