import React, { useState } from 'react';
import mockData from '../mockupData/mockData'

const Pokemon = props => {
    const { pokemonId } = props.match.params;
    const [pokemonData, setPokemonData] = useState(mockData[`${pokemonId}`]);
    return <div>this is the page for pokemon with id: {pokemonData.id}</div>;
}

export default Pokemon;