import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Card, CircularProgress, CardContent, CardMedia, Typography, CardActionArea, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import mockData from './mockupData/mockData'

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    cardMedia: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    }
});

const toFirstCharUppercase = name => 
    name.charAt(0).toUpperCase() + name.slice(1);

const getPokemonCard = (props, data, classes) => {
    const { history } = props;
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    return (
        <Grid item xs={4} key={data.id}>
            <Card>
                <CardHeader title={`${data.id}. ${toFirstCharUppercase(data.name)}`}/>
                <CardActionArea onClick={() => history.push(`/${data.id}`)}>
                    <CardMedia className={classes.cardMedia} image={sprite} style={{ width: "130px", height: "130px" }}/>
                    <CardContent>
                        bla
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

const Pokedex = props => {
    const { history } = props;
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(mockData);
    return (
        <>
        <AppBar position="static">
          <Toolbar />
        </AppBar>
        { pokemonData ? (
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {
                    Object.keys(pokemonData).map(pokemonId =>
                        getPokemonCard(props, pokemonData[`${pokemonId}`], classes))
                }    
            </Grid>
        ) : (
            <CircularProgress />
        )}
        </>
    );
}

export default Pokedex;