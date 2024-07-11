import '../Pages/pages.css'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export const Produ = () => {

    const [productos, setProductos] = useState([]);

    const initialurl = 'http://localhost:4000/product'

    const fetchProductos = (url) => {
        fetch(url)
        .then(res => res.json())
        .then((data) => setProductos(data.docs))
        .catch(error => console.log(error))            
    };

    useEffect(() => {
        fetchProductos(initialurl);
    }, [])

    return (

        <div className="principal_container">
  
            {!productos ? 'cargando...' : 
            productos.map ((productos, index) => (
                
               <Card key = {index}
               
                  
                  status = {productos.status}                  
                  description = {productos.description}
                  code = {productos.code}
                  title = {productos.title}
                  price = {productos.price}                    
                  stock = {productos.stock}  
                  category = {productos.category}  
               /> 
            ))             
            }       
        
        </div>  
      );
}