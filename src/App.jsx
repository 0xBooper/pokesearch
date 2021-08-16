import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'

// Import components
import Header from "./components/Header.jsx"
import Stats from './components/Stats.jsx'
import Footer from './components/Footer.jsx'
import Form from "./components/Form.jsx"

// Import styles
import "./styles/App.css"
import "react-toastify/dist/ReactToastify.css" // This css file is required for Toastify

import { version } from "../package.json"

toast.configure() // Initialize Toast

function App() { 
  const [ searched, setSearched] = useState(false)
  const [pokemonStats, setPokemonStats] = useState({})
  const [pokeName, setPokeName] = useState("")
  const pokemonSearched = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    const pokeApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched.current.value.toLowerCase()}`).catch(e => console.error(e))
    
    // If the response returns a 404, tell the user and return
    if (pokeApiResponse.status === 404)  {
      toast.error("No pokemon found. Check your spelling.", {position: "top-center", autoClose: 3000, limit: 1})

      pokemonSearched.current.value = ""
      setPokeName("")
      setSearched(false)
      return
    }

    if (pokeApiResponse.status >= 500 && pokeApiResponse.status <= 599) {
      toast.warn("The api this site relies on is not functional. Search for the status of the pokeapi", {
        position: "top-center",
        autoClose: 3000,
        limit: 1
      })

      setPokeName("")
      setSearched(false)
      return
    }

    // If not, then set the pokemonStats state accordingly
    const pokeData = await pokeApiResponse.json() // Json-ify the response
    setPokemonStats({
      front_default_sprite: pokeData.sprites.front_default,
      front_shiny_sprite: pokeData.sprites.front_shiny,
      abilities: pokeData.abilities,
      ingame_height: pokeData.height,
      ingame_weight: pokeData.weight,
      base_experience: pokeData.base_experience,
      base_stats: pokeData.stats
    })

    // Then, set the Searched state to true, and render the info
    setSearched(true)
    setPokeName(pokemonSearched.current.value.toLowerCase()) 
    pokemonSearched.current.value = ""
  }
  
  return (
    <div className="container">
      <Header />

      <Form handleSubmitProp={handleSubmit} pokemonSearchedRef={pokemonSearched} />

      {searched && pokemonStats && <Stats stats={pokemonStats} pokemonName={pokeName}/>}

      <Footer latestVer={version} />
    </div>
  )
}

export default App
