import React from 'react'
import {validate, format} from "rut.js"
const Index = () => {
    //las variables del useState se cambia cada vez que se hace algo sobre esa variable. Sintaxis: const [nombreVariable, funcionVariable] = React.useState(valorDefault)
    const [nombre, setNombres] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [rut, setRut] = React.useState("");

    //Funcion que se ejecuta al presionar el submit. 
    const submitData = (e) => {
        //preventDefault evita que se recargue el sitio al hacer submit
        e.preventDefault();

        //Valida si el texto está vacío
        if(nombre.trim() == ""){
            window.alert("Es necesario que ingrese su nombre")
            return
        }
        if(apellido.trim() == ""){
            window.alert("Es necesario que ingrese su apellido")
            return
        }
        //valida el rut
        if(validate(rut) === false){
            window.alert("Ingrese un rut válido")
        }


        console.log("Registrado")
    }

  return (
    <>
        <form className='main' onSubmit={submitData}>
        <div className="textData">
            <label htmlFor="textData">Ingrese su nombre</label>
            <input id='textData' type="text" value={nombre} onChange={(e) => setNombres(e.target.value)} />
        </div>
        <div className="textData">
            <label htmlFor="textData">Ingrese su apellido</label>
            <input id='textData' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="textData">
            <label htmlFor="textData">Ingrese su RUT</label>
            <input id='textData' type="text" value={rut} onChange={(e) => setRut(format(e.target.value, {dots: true}))} />
        </div>
        <button type="submit">Enviar</button>
    </form>
    </>

  )
}

export default Index