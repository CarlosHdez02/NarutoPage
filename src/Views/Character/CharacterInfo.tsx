import React from "react";
import { FetchNarutoApi } from "../../services/api";
import { characterInterface } from "../../interface/narutoInterface";
import {  useParams } from "react-router-dom";


export const CharacterInfoPage = ()=>{

    const [character, setCharacter] = React.useState<characterInterface>()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<unknown | null>(null)

    const {id} = useParams<{id:string}>()

    React.useEffect(()=>{
        const fetchCharacter = async (id:string)=>{
            const api = new FetchNarutoApi()
            try{
                const response = await api.getNarutoCharacterById(Number(id))
                setCharacter(response)
            }catch(err){
                console.log(err,"err")
                setError(err)
                throw err
            }finally{
                setLoading(false)
            }
        }
        if(id) fetchCharacter(id)
    },[id])

    if(loading){
        return "Loading"
    }
    if(error){
        return "Error!"
    }
    return(
        <>
       <div className="personalContainer">
        {character ? (
          <div className="imageCard" key={character.id}>
            <img
              className="personalImage"
              src={character.images}
              alt={character.name}
            />
            <div className="textContent">
              <h2>{character.name}</h2>
            </div>
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </div>
        </>
    )
}