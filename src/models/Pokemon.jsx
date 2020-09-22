import React, { useState } from 'react';
import mockData from '../mockupData/mockData';
import { Typography } from '@material-ui/core'
import { toFirstCharUppercase } from '../utils/utils';

const Pokemon = props => {
    const { pokemonId } = props.match.params;
    const [pokemonData, setPokemonData] = useState(mockData[`${pokemonId}`]);
    

    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemonData;
        const pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon${id}.png`;
        const { front_default } = sprites;

        return (
            <Typography variant="h1">
                {`${id}.`} {toFirstCharUppercase(name)}
                <img src={front_default} />
            </Typography>
        )
    }

    return (
        <>
            { generatePokemonJSX() }
        </>
    );
}

//just a comment

export default Pokemon;