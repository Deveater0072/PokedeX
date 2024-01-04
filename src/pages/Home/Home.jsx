// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Pokemons from "../../data/data";
// import PokemonCard from "../../components/pokemonCard/PokemonCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Stack } from "@mui/material";
// import classes from "./Home.module.css";

// const Home = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [maxPageNumber, setMaxPageNumber] = useState(1);
//   useEffect(() => {
//     getPokemonByName(document.getElementById("pokemon-text-search").value);
//   }, [pageNumber]);
//   const getPokemonByName = async (name) => {
//     try {
//       const response = await axios.get(
//         `https://rickandmortyapi.com/api/character?name=${name}&page=${pageNumber}`
//       );
//       const data = response.data.results;
//       setMaxPageNumber(response.data.info.pages);
//       console.log(response.data.info);
//       setPokemons(data);
//     } catch (err) {
//       setPokemons([]);
//       console.log(err);
//     }
//   };
//   const onChangeHandler = (event) => {
//     getPokemonByName(event.target.value);
//     console.log(event.target.value);
//   };
//   const onChangePageMinus = () => {
//     setPageNumber(Math.max(pageNumber - 1, 1));
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="pokemon-text-search"
//           label="Pokemon Name"
//           variant="filled"
//           onChange={onChangeHandler}
//         />
//         <Button
//           disabled={pageNumber === 1}
//           variant="contained"
//           onClick={onChangePageMinus}
//         >
//           &lt;
//         </Button>
//         {pageNumber} z {maxPageNumber}
//         <Button
//           disabled={pageNumber >= maxPageNumber}
//           variant="contained"
//           onClick={() => setPageNumber(pageNumber + 1)}
//         >
//           &gt;{" "}
//         </Button>
//         <Stack
//           justifyContent={"center"}
//           alignContent={"center"}
//           className={classes.pokemonContainer}
//           direction={"row"}
//           flexWrap={"wrap"}
//           style={{ width: "100%", margin: "auto" }}
//         >
//           {pokemons.map((pokemon) => (
//             <PokemonCard key={pokemon.id} pokemon={pokemon} />
//           ))}
//         </Stack>
//       </Box>
//     </>
//   );
// };

// export default Home;


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "@mui/material";
import classes from "./Home.module.css";

const Home = () => {
  const [allPokemonsFromAPI, setAllPokemonsFromAPI] = useState([]);
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .then(response => {
        const data = response.data.results;
        setMaxPageNumber(Math.ceil(data.length / 20));
        setAllPokemonsFromAPI(data);
        updateDisplayedPokemons(pageNumber, data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    updateDisplayedPokemons(pageNumber, allPokemonsFromAPI);
  }, [pageNumber, allPokemonsFromAPI]);

  const updateDisplayedPokemons = (page, allPokemons) => {
    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;
    const displayedPokemons = allPokemons.slice(startIndex, endIndex);
    setPokemonsToDisplay(displayedPokemons);
  };

  const onChangeHandler = (event) => {
    const name = event.target.value;
    const filteredPokemons = allPokemonsFromAPI.filter(pokemon => pokemon.name.includes(name));
    updateDisplayedPokemons(1, filteredPokemons);
  };

  const onChangePageMinus = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const onChangePagePlus = () => {
    setPageNumber(Math.min(pageNumber + 1, maxPageNumber));
  };

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
          id="pokemon-text-search"
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
        {pageNumber} z {maxPageNumber}
        <Button
          disabled={pageNumber >= maxPageNumber}
          variant="contained"
          onClick={onChangePagePlus}
        >
          &gt;{" "}
        </Button>
        <Stack
          justifyContent={"center"}
          alignContent={"center"}
          className={classes.pokemonContainer}
          direction={"row"}
          flexWrap={"wrap"}
          style={{ width: "100%", margin: "auto" }}
        >
          {pokemonsToDisplay.map((pokemon, index) => (
            <PokemonCard key={index + 1} pokemon={pokemon} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
