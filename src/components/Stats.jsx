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
            
            
            <ul className="stats-ability-list">
                {abilities.forEach(abilityElement => {
                    // TODO: Fix the li not rendering. (api/misnaming NOT the cause)
                    <li>{abilityElement.ability.name}</li>
                })}
            </ul>

            <div className="stats-info-container">
                {ingame_height && <p>Height of {pokemonName}: {ingame_height}</p>}
                {ingame_weight && <p>Weight of {pokemonName}: {ingame_weight}</p>}
                {base_experience && <p>Base experience of {pokemonName}: {base_experience}</p>}
                {base_hp && <p>Base HP of {pokemonName}: {base_hp}</p>}
            </div>
        </div>
    )
}

export default Stats
