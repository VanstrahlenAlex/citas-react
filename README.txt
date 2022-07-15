Crear archivo 


================================================
1.
Crear la carpeta components
- crear Header.jsx 

Un componente es una función 

EN Header.jsx
function Header(){
    return(
        <h1>Desde header</h1>
    )
}

==========================================
2.
Crear componente de Formulario 
Formulario.jsx
import React from 'react'

const Formulario = () => {
  return (
    <div>
        <h2>Formulario</h2>
    </div>
  )
}

export default Formulario
======================================================================
3.
Crear componente ListadoPacientes.jsx
import React from 'react'

const ListadoPacientes = () => {
  return (
    <div>
        <h2>Listado Pacientes</h2>
    </div>
  )
}

export default ListadoPacientes

======================================================================
4.
Instalación de Tailwind.CSS

- npm i -D tailwindcss postcss autoprefixer

Se requiere un archivo de configuración de Tailwind.css y se utilizan los comandos:

- npx tailwindcss init -p
Se crean 2 archivos tailwind.config.js y postcss.config.js
======================================================================
5.

en el archivo index.css se hace la configuración total 

se agregan los paquetes de tailwindcss al archivo index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

=============================================
6. Al archivo de tailwind.config.css

Escribes los archivos donde quieres aplicar tailwind

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {},
    },
    plugins: [],
}

======================================================================
7.
Debes instalar 2 dependencias 
Tailwind CSS IntelliSense y CSS Peek
======================================================================
8.
EN Header.jsx

function Header(){
    return(
        <div className="my-auto">
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes  {''}
                <span className="text-indigo-600">Veterinaria</span></h1>
            <p>Hola mundo</p>
        </div>
    )
}

export default Header;

======================================================================
9.
Luego nos ubicamos en el archivo Formulario.jsx

import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            {/* nombre  mascota*/}
            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                <input id='mascota' type="text"  placeholder='Nombre de la mascota' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            {/*  nombre propietario*/}
            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                    Nombre Propietario
                </label>
                <input id='propietario' type="text"  placeholder='Nombre del propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            {/* Email */}
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                    Email
                </label>
                <input id='email' type="email"  placeholder='Correo electrónico del Propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            {/* Fecha de alta */}
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                    Alta
                </label>
                <input id='alta' type="date" 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>
            {/*  */}
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                    Síntomas
                </label>
                <textarea id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe los síntomas '/>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800
            cursor-pointer transition-all'
                value='Agregar Paciente'/>
        </form>
    </div>
  )
}

export default Formulario


=================================================================================
10. Nos ubicamos en el archivo ListadoPacientes.jsx

font-black: Pone el texto en negrita
text-3xl: Para aumentar el tamaño del texto
text-center: Centrar el texto

import React from 'react'
import Paciente from './Paciente'
const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='mt-5 text-xl mb-10 text-center'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
        </p>
        <Paciente />
    </div>
  )
}

export default ListadoPacientes

Y decidimos crear un componente para la parte en especifica de los pacientes 

============================================================================
11. Se hizo un componente de PAciente para separar el proyecto

import React from 'react'

const Paciente = () => {
return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>Hook</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>Alexander</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
            <span className='font-normal normal-case'>correo@correo.com</span>
        </p>
        
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
            <span className='font-normal normal-case'>10 - Diciembre 2022</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fugit officiis non animi atque tenetur velit quisquam reiciendis maiores, sunt magnam molestiae aliquam. Cum vel, totam aliquam eveniet deleniti tenetur?</span>
        </p>
        </div>
  )
}

export default Paciente

=========================================================
12. Empezamos a utilizar los hooks, iniciamos con el useState

en el componente Formulario

import React from 'react'
import { useState, useEffect } from 'react'

const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    //Mensaje de validación de formulario
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        //Validación del formulario 
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('Al menos un campo vació');
            
            //Se cambia la condición del error cuando los campos no están completos
            setError(true)
            return;
        } 
        //Valor por defecto del formulario
        setError(false)

        // Objeto de pacientes 
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        // console.log(objetoPaciente);
        setPacientes([...pacientes, objetoPaciente]);

        //Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

        
    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            {error && (<div className='bg-red-800 text-white text-center p-3 uppercase font-bold
            mb-3 rounded-md'>
                <p>Todos los campos son obligatorios</p>
                </div>)}
            {/* nombre  mascota*/}
            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                <input id='mascota' type="text"  placeholder='Nombre de la mascota' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}/>
            </div>
            {/*  nombre propietario*/}
            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                    Nombre Propietario
                </label>
                <input id='propietario' type="text"  placeholder='Nombre del propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}/>
            </div>
            {/* Email */}
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                    Email
                </label>
                <input id='email' type="email"  placeholder='Correo electrónico del Propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {/* Fecha de alta */}
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                    Alta
                </label>
                <input id='alta' type="date" 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}/>
            </div>
            {/*  */}
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                    Síntomas
                </label>
                <textarea id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe los síntomas' 
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}/>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800
            cursor-pointer transition-all'
                value='Agregar Paciente'/>
        </form>
    </div>
  )
}

export default Formulario


===================================================================================
13. Se crea el archivo Error.jsx para tenerlo como un prop reutilizable

import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-boldmb-3 rounded-md mb-3'>
        {children}
    </div>
  )
}

export default Error 

En el archivo Formulario.jsx se modifica la señal del error. 
            {error && <Error><p>Todos los campos son obligatorios</p></Error> }


===================================================================================
14. Se modifica el archivo de listadoPacientes para recibir los datos del formulario 

import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>

        {pacientes && pacientes.length ? 
        (<>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='mt-5 text-xl mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) =>{
            return(
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />  
            )
          })}
        </>)
        : (
          <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='mt-5 text-xl mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecen en este lugar</span>
          </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes

===================================================================================
15.
