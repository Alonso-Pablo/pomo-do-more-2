import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import './assets/main.css'
import './assets/index.css'
import { Provider } from "react-redux"
import { store } from "@redux/store"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Provider>
  </BrowserRouter>
)
