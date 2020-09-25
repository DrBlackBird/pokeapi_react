import React, { useState } from 'react';
import mockData from '../mockupData/mockData';
import { Typography, Link } from '@material-ui/core'
import { toFirstCharUppercase } from '../utils/utils';

const Pokemon = props => {
    const { pokemonId } = props.match.params;
    const [pokemonData, setPokemonData] = useState(mockData[`${pokemonId}`]);
    

    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemonData;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Typography variant="h1">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} />
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography>
                    {"Species: "}
                    <Link href={species.url}>{species.name}</Link>
                </Typography>
                <Typography>Heigth: {height}</Typography>
                <Typography>Weigth: {weight}</Typography>
                <Typography variant="h6">Types:</Typography>
                {
                    types.map((typeInfo) => {
                        const { type } = typeInfo;
                        const { name } = type;
                        return <Typography key={name}>{`${name}`}</Typography>;
                    })
                }
            </>
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