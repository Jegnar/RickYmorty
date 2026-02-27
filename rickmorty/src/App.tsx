//Importamos el hook que trae los personajes
import usePersona from "./hooks/usePersona";
//Importamos el componente Card para mostrar cada personaje
import Card from "./components/card";

function App() {
    //Traemos la lista de personajes desde nuestro hook
    const { personajes } = usePersona();

    return (
        <div>
            {/*Titulo de la pagina*/}
<h1 style={{ textAlign: "center", width: "100%" }}>Ricardo y Martin</h1>
            {/*Contenedor centrado con las cards*/}
            <div className="contenedor-cards">
                {personajes.map((personaje, index) => (
                    <Card
                        key={index}
                        nombre={personaje.nombre}
                        imagen={personaje.imagen}
                        estado={personaje.estado}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;