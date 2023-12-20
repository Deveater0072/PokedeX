import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Pokemons from "../data/data";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";
import axios from "axios";
import { Button, Stack } from "@mui/material";

const Home = () => {
  const [pokemons, setPokemons] = useState(Pokemons);
  const [pageNumber, setPageNumber] = useState(1);
  const getPokemonByName = async (name) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${name}`
      );
      const data = response.data.results;
      setPokemons(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeHandler = (event) => {
    getPokemonByName(event.target.value);
    console.log(event.target.value);
  };
  const onChangePageMinus = () => {
    // const newPageNumber = pageNumber - 1;
    // if (newPageNumber > 0) {
    //   setPageNumber(newPageNumber);
    // } else {
    //   setPageNumber(1);

    // }
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  // alternatywa do skroconej wersji linijka 62

  // const onChangePagePlus = () => {
  //   setPageNumber(pageNumber + 1);
  // };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Pokemon Name"
          variant="filled"
          onChange={onChangeHandler}
        />
        <Button
          disabled={pageNumber === 1}
          variant="contained"
          onClick={onChangePageMinus}
        >
          &lt;
        </Button>
        {pageNumber}
        <Button
          variant="contained"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          &gt;{" "}
        </Button>
        <Stack direction={"row"} spacing={2}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
