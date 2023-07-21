import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./useCatImage.js"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const IMAGE_PREFIX_URL = 'https://cataas.com/'

export function App () {
    const [fact, setFact] = useState()
    const { imageURL } = useCatImage({ fact })

    const getRandomFact = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        // cambia el formato y lo formatea a .json
        .then(response => response.json())
        // si abro la random_fact, veremos que hay un fact y un lenght, el data.fact nos devuelve solo el fact
        // .then(data => setFact(data.fact))
        .then(data => {
            const {fact} = data
            setFact(fact)
        })
    }

    // hook para hacer un fetch y obtener la cita 
    useEffect(getRandomFact, [])

    const handleClick = () => {
        getRandomFact()
    }

    // CSS flex en columnas senzillo
        {/* <main>
        <h1>App de </h1>
        {fact && <p>{fact}</p>} RENDERIZADO CONDICIONAL

    En este caso, se utiliza una expresión condicional {imageURL && ...} para asegurarse de que la imagen se renderice solo si imageURL tiene un valor.
       
    {imageURL && <img src= {`${IMAGE_PREFIX_URL}${imageURL}`} alt = {`Image extracted of the firsts three words of {fact}`}/> }
   
    </main> */}

    return (
        <main>
            <h1>Fetch con APIs</h1>

            <button onClick={handleClick}> Get new fact </button>

            <section>
                {fact && <p>{fact}</p>}
                {imageURL && <img src= {imageURL} alt = {`Image extracted of the firsts three words of {fact}`}/> }
            </section>
        </main>
    )
}