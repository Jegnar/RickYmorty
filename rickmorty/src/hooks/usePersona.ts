//useState: sirve pora guardar datos que cambian
//useEffect: sirve para ejecutar codigo automaticamente
import { useEffect, useState } from "react";
//Apuntamos al archivo de personajes
import type { Personaje } from "../types/personaje";

// Describe cómo viene UN personaje desde la API de Rick y Morty
interface PersonajeAPI {
    name: string;
    image: string;
    status: string;
}

// Describe la respuesta completa de la API (tiene results con array de personajes)
interface RespuestaAPI {
    results: PersonajeAPI[];
}

const usePersona = () => {
    //Estado para guardar la lista de personajes
    const [personajes, setPersonajes] = useState<Personaje[]>([]);

    // Ejecucion automatica al cargar
    useEffect(() => {
        // Definimos la funcion dentro del efecto para evitar bucles infinitos
        const traerPersonajes = async () => {
            try {
                //Hacemos la peticion a Rick y morty
                //await dice que no siga hasta que el servidor conteste
                const respuesta = await fetch("https://rickandmortyapi.com/api/character");

                //Convertimos a JSON - le decimos a TypeScript que forma tienen los datos
                const datos: RespuestaAPI = await respuesta.json();

                //Transformamos lo que da la API a nuestra interfaz personaje
                //Ahora 'p' ya sabe que es PersonajeAPI, no hace falta poner any
                const listadoReal = datos.results.map((p) => {
                    return {
                        nombre: p.name,
                        imagen: p.image,
                        estado: p.status
                    } as Personaje;
                });

                //Guardamos en el estado
                setPersonajes(listadoReal);

            } catch (error) {
                console.error("Error al traer los personajes", error);
            }
        }; // <--- ESTA LLAVE CIERRA 'traerPersonajes'. Fíjate que tenga el ; al final.

        //Llamamos a la funcion que acabamos de definir
        traerPersonajes();

    }, []); // <--- el [] vacio significa "ejecutate solo una vez al cargar"

    //Retornamos la lista para usarla en App.tsx
    return {
        personajes
    };
}; // <--- ESTA LLAVE CIERRA 'const usePersona'

export default usePersona;