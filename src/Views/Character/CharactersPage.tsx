import React from "react"
import { FetchNarutoApi } from "../../services/api"
import { characterInterface } from "../../interface/narutoInterface"
import '../../App.css'
import { Link } from "react-router-dom"

export const CharactersPage = ()=>{

    const [characters,setCharacters] = React.useState<characterInterface[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<unknown | undefined>()

    React.useEffect(()=>{
        const fetchCharacters = async ()=>{
            const api = new FetchNarutoApi()
            try{
                setLoading(true)
                const data = await api.getNarutoCharacters()
                console.log(data)
                setCharacters(data.characters)
            }catch(err){
                setError(err)
                console.log(err,"err at fetch characters")
            }finally{
                setLoading(false)
            }
        }

        fetchCharacters()
    },[])

    if(loading){
        return 'loading...'
    }

    if(error){
        return "Oh no!, an error"
    }
    return(
        <>
        <div className="container">

   
            {characters.map((character)=>(
                <ul key={character.id}>
                    <div className="card">
                        <Link to={`/character/${character.id}`}>
                        <img src={character.images} alt={character.name} className="images"/>
                        </Link>
                  
                    <h2>{character.name}</h2>
                    <h2>{character.natureType}</h2>
                    </div>
                </ul>

            ))}
                 </div>
        </>
    )
}