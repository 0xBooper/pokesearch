import React from 'react'

const Stats = ({stats, pokemonName}) => {
    // Get all the props
    const {
        front_default_sprite,
        front_shiny_sprite,
        abilities,
        ingame_height,
        ingame_weight,
        base_experience,
        base_hp
    } = stats

    return (
        <div className="stats-container">
            <h3>Stats of {pokemonName}</h3>
            <div className="stats-sprites-container">
                <img src={front_default_sprite} alt="default front sprite" />
                {front_shiny_sprite && <img src={front_shiny_sprite} alt="shiny front sprite" />}
            </div>
            
            <h4>Abilities: </h4>
            <ul className="stats-ability-list">
                {abilities.map(abilityElement => <li key={abilityElement.ability.slot}>{abilityElement.ability.name}</li> )}
            </ul>

            <h4>Basic info: </h4>
            <div className="stats-info-container">
                {ingame_height && <p>Height of {pokemonName}: {ingame_height} units</p>}
                {ingame_weight && <p>Weight of {pokemonName}: {ingame_weight} units</p>}
                {base_experience && <p>Base XP of {pokemonName}: {base_experience}</p>}
                {base_hp && <p>Base HP of {pokemonName}: {base_hp}</p>}
            </div>
        </div>
    )
}

export default Stats
