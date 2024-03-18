
import './style.css'

import React, {useEffect, useState}  from 'react';

interface Datos {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Lista: React.FC = () => {

    const [lista, setLista] = useState<Datos[]>([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => setLista(data))
        .catch((error) => console.log('Error al obtener los datos', error));
    }, [])

    return(
        <div>
            <h2>Data: </h2>
            <ul>
                {lista.map(entrada =>(

                <li key={entrada.id}>
                    <h3>{entrada.title}</h3>
                    <p>{entrada.body}</p>
                </li>

                ))}
            </ul>
        </div>
    )
    }


export default Lista;