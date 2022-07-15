import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //Para llenar el formulario desde cero
  const [pacientes, setPacientes] = useState([]);
  //Para llenar el formulario para Editar, objeto de paciente
  const [paciente, setPaciente] = useState({});

  //Cuando utilizas un useEffect sin dependencia, significa que se va a ejecutar una sola vez 
  //Este useEffect obtiene lo haya en localStorage
  useEffect(() =>{
    const obtenerLs = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLs();
  }, [])

  //Para almacenar en el localStorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>
      
    </div>
  )
}

export default App
