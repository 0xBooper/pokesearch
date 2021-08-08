import React, { useState, useRef } from 'react'

function App() { 
  const [ searched, setSearched] = useState(false)
  const pokemonSearched = useRef()

  function handleFormSubmit(e) {
    setSearched(true)
    
    setTimeout(() => {
      setSearched(false)
    }, 2000);

    e.preventDefault()
  }

  return (
    <div>
      { searched ? <h1>You searched for { pokemonSearched.current.value }</h1> : null}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="pokemonNameInput">
          Name of the pokemon: 
          <input ref={pokemonSearched} type="text" name="pokemonNameInput"/>
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App
