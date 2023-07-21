import { useState, useEffect } from "react"

// CUSTOM HOOK, empieza por use!! nunca bucle dentro

const IMAGE_PREFIX_URL = 'https://cataas.com/'

export function useCatImage ( { fact }) {

    const [imageURL, setImageURL] = useState()
    
    // hook para recuperar la imagen cada vez que tenemos cita nueva

    useEffect(() =>{
        // para que ejecute este hook, tenemos que validar que realmente a obtenido un fact, si no que devuelva y comience de nuevo
        if (!fact) return

        // const firstWord = fact.split(' ').slice(0, 3).join(' ')
        // const firstWord = fact.split(' ' ,3) 3r parametro escoge cuantas quieres
        const firstWord = fact.split(' ', 3).join(' ')
        
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(response => response.json())
            .then(response => {
                //recuperamos la respuesta en un estado nuevo
                const { url } = response
                // RESPUESTA FACIL PERO MEJORABLE => setImageURL(`https://cataas.com${url}`)
                setImageURL(url)
            })
        //le pasamos el fact como dependencia para que el efecto se ejecute cuando fact cambie
    },[fact])

    return { imageURL: `${IMAGE_PREFIX_URL}${imageURL}` }
} // { imageURL: 'https:// ...' }