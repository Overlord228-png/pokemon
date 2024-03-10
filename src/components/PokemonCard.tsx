import React from 'react';

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    attack: number;
    strength: number;
    agility: number;
    health: number;
    defense: number;
}


interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="pokemon__card">
            <h2 className="pokemon__name">{pokemon.name}</h2>
            {pokemon.sprites && pokemon.sprites.front_default && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon__image" />
            )}
            <p>Attack: {pokemon.attack}</p>
            <p>Strength: {pokemon.strength}</p>
            <p>Agility: {pokemon.agility}</p>
            <p>Health: {pokemon.health}</p>
            <p>Defense: {pokemon.defense}</p>
        </div>
    );
}

export default PokemonCard;