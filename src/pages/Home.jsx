import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import Pokemons from "../data/data";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
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
        <TextField id="outlined-basic" label="Pokemon Name" variant="filled" />
        {Pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </Box>
    </>
  );
};

export default Home;


