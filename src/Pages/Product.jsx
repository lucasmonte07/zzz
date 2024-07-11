import '../Pages/pages.css'
import { useRef } from "react"
export const Product = () => {
    
    const datFormPro = useRef() //Crear una referencia para consultar los valoresa actuales del form

    const consultarFormPro = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        const datosFormularioPro = new FormData(datFormPro.current) //Pasar de HTML a Objeto Iterable
        const clientePro = Object.fromEntries(datosFormularioPro) //Pasar de objeto iterable a objeto simple
        
        fetch('http://localhost:4000/product', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clientePro)
        })
        .then(responsePro => responsePro.json())        
        .then(dataPro => { 
            document.cookie = `token=${dataPro.token}; expires=${new Date
            (Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`
             console.log(dataPro.token)        
        })
        .catch(error => console.error(error))

        e.target.reset() //Reset form
    }
    return (
        <div className="container divFormPro" >

            <h3>Formulario de Productos</h3>

            <form onSubmit={consultarFormPro} ref={datFormPro}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" name="description" required />
                </div>                
                
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">Codigo</label>
                    <input type="text" className="form-control" name="code" />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input type="number" className="form-control" name="price" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="number" className="form-control" name="stock" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoria</label>
                    <input type="texto" className="form-control" name="category" />
                </div> 
                
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}