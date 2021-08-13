import React from 'react'
import "../styles/Stats.css"

const Stats = ({stats, pokemonName}) => {
    // Get all the props
    const {
        front_default_sprite,
        front_shiny_sprite,
        abilities,
        ingame_height,
        ingame_weight,
        base_experience,
        base_stats
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

            <h4>Body stats: </h4>
            <div>
                <p>Height: {ingame_height} units | Weight: {ingame_weight}</p>
            </div>

            <h4>Base stats:</h4>
            <ul>
                {base_experience && <li key="xp-stat">Base XP: {base_experience}</li>}
                {base_stats[0] && <li kay="hp-stat">Base HP: {base_stats[0].base_stat}</li>}
                {base_stats.slice(1) && base_stats.slice(1).map(statElement => (
                    <li key={statElement.stat.name}>Base {statElement.stat.name}: {statElement.base_stat}</li>
                ))}
            </ul>
        </div>
    )
}

export default Stats
