import "./Colaborador.css"
import { RiDeleteBack2Fill } from "react-icons/ri";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id } = props.datos
    const { colorPrimario, eliminarColaborador } = props
    return <div className="colaborador">
        <RiDeleteBack2Fill className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="Encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={ foto } alt={ nombre }/>
        </div>
        <div className="info">
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
        </div>
    </div>
}

export default Colaborador