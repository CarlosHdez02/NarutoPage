
import './App.css'
import { CharactersPage } from './Views/Character/CharactersPage'
import { Routes, Route } from 'react-router-dom'
import { TailedBeasts } from './Views/TailedBeast/TailedBeastsPage'
import { Akatsuki } from './Views/Akatsukis/AkatsukiPage'
import { TailedBeastInfoPage } from './Views/TailedBeast/TailedBeastInfoPage'
import { AkatsukiInfoPage } from './Views/Akatsukis/AkatsukiCharacterInfo'
import { CharacterInfoPage } from './Views/Character/CharacterInfo'
import Layout from './Layout'


function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
    
      <Route index element={<CharactersPage />} /> 
      <Route path="/characters" element={<CharactersPage/>}/>
      <Route path="/character/:id" element={<CharacterInfoPage/>}/>

      <Route path="/beasts" element={<TailedBeasts/>} />
      <Route path="/beasts/:id" element={<TailedBeastInfoPage />} />

      <Route path="/akatsuki" element={<Akatsuki/>} />
      <Route path="/akatsuki/:id" element={<AkatsukiInfoPage/>} />

      </Route>
      </Routes>

    </>
  )
}

export default App
