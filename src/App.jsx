import Header from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Productos from "./components/Productos.jsx";
import NuevoProducto from "./components/NuevoProducto.jsx";
import EditarProducto from "./components/EditarProducto.jsx";
import {Provider} from "react-redux";
import store from "./store.js";

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <div className='container mt-5'>
                    <Routes>
                        <Route path='/' element={<Productos/>}/>
                        <Route path='/productos/nuevo' element={<NuevoProducto/>}/>
                        <Route path='/productos/editar/:id' element={<EditarProducto/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
