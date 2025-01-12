import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Header from './componentes/Header/Header'
import Formulario from './componentes/Formulario/Formulario'
import MiOrg from './componentes/MiOrg/MiOrg'
import Equipo from './componentes/Equipo/Equipo'
import Footer from './componentes/Footer/Footer'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://i.pinimg.com/736x/71/c3/46/71c3461ace4e33b9522d4c1982dbbe3d.jpg",
      nombre: "Rick Sánchez",
      puesto: "Programador Senior"
  },
  {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://i.pinimg.com/736x/17/2b/75/172b759df186b1255cf9f7d044a9bb8d.jpg",
      nombre: "Velma Dinkley",
      puesto: "Programadora"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://i.pinimg.com/736x/1a/3a/fa/1a3afa1408bb92c6c16435a3b07021c9.jpg",
    nombre: "Lisa Simpson",
    puesto: "Programadora"
  },
  {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://i.pinimg.com/736x/b3/a8/ec/b3a8ec099b512ede2ff2f08e2bd4eb7d.jpg",
      nombre: "Leela",
      puesto: "Desarrolladora Front End"
  },
  {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://i.pinimg.com/736x/51/e9/a5/51e9a52f8a061a560925605c816a41b8.jpg",
      nombre: "Mordecai",
      puesto: "Desarrollador Front End"
  },
  {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://i.pinimg.com/736x/a1/d9/f8/a1d9f82612f03e093ea8ef2ba557f3bf.jpg",
      nombre: "Hubert Farnsworth",
      puesto: "Científico de Datos"
  },
  {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://i.pinimg.com/736x/ce/3c/04/ce3c04aada1d7e7795b70d47f5e0db1b.jpg",
      nombre: "Dexter",
      puesto: "Analista de Datos"
  },
  {
      id: uuidv4(),
      equipo: "DevOps",
      foto: "https://i.pinimg.com/736x/e0/78/27/e07827917e85661d1206973c6f7cf7f3.jpg",
      nombre: "Homer Simpson",
      puesto: "Ingeniero DevOps"
  },
  {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://i.pinimg.com/736x/6a/33/0a/6a330a54213321345fd24580d307450a.jpg",
      nombre: "Amy Wong",
      puesto: "Diseñadora UX/UI"
  },
  {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://i.pinimg.com/736x/a7/b3/63/a7b363a932e7ac8f6d134476e8b6caad.jpg",
      nombre: "BoJack Horseman",
      puesto: "Consultor Creativo"
  },
  {
      id: uuidv4(),
      equipo: "Móvil",
      foto: "https://i.pinimg.com/736x/24/80/89/24808919a1436f5147686f042104d097.jpg",
      nombre: "Finn the Human",
      puesto: "Desarrollador Móvil"
  },
  {
      id: uuidv4(),
      equipo: "Móvil",
      foto: "https://i.pinimg.com/736x/e4/2f/eb/e42feb4581357f11c4bf693f1cddb9e0.jpg",
      nombre: "Fry",
      puesto: "Desarrollador Junior"
  },
  {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://i.pinimg.com/736x/58/4a/6a/584a6a3df07d6f4368b3f5c2b5a5f296.jpg",
      nombre: "Waylon Smithers",
      puesto: "Gestor de Proyectos"
  },
  {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://i.pinimg.com/736x/f8/f1/35/f8f1357ed60f9e6b0bd78815208c3f8c.jpg",
      nombre: "Princesa Carolyn",
      puesto: "Coordinadora de Innovación"
  }  
  ])
  
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipos
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }


  return (
    <>
      <div>
        <Header/>
        {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
            />
        }

        <MiOrg cambiarMostrar={cambiarMostrar}/>

        {
          equipos.map( (equipo) => {
            return <Equipo 
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            />
          } )
        }

        <Footer />
      </div>
    </>
  )
}

export default App