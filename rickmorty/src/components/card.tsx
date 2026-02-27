import './card.css'

interface Props {
    nombre: string,
    imagen: string,
    estado: string
}

function Card({ nombre, imagen, estado }: Props){
    return(
        <div className='card'>
            <img src={imagen} alt={nombre} />
            <div className='info'>
                <h3>{nombre}</h3>
                {/*className cambia el color segun el estado: alive, dead, unknown*/}
                <h5 className={estado.toLowerCase()}>{estado}</h5>
            </div>
        </div>
    )
}

export default Card