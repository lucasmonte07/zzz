import { useState } from 'react'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login'
import { Product } from './Pages/Product'
import NotFound from './Pages/NotFound';
//import NavBar from './components/NavBar';
import { Register } from './Pages/Register';
//import { Produ } from './Pages/Produ'


function App() {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (    
    <>    
    <BrowserRouter>        

      <Header 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />

        <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}      
        />

        <Routes> 
          <Route path='/login' element={<Login />} />
          <Route path='/produ' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sale' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<h2>{<NotFound />}</h2>}/>
        </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App
