import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PokemonCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          <span className="marginSmallRant">Name:</span>
          <span>{props.pokemon.name}</span>
        </div>
        <div>
          <span className="marginSmallRant">Id:</span>
          <span>{props.pokemon.id}</span>
        </div>
        <div>
          <span className="marginSmallRant">height:</span>
          <span>{props.pokemon.height}</span>
        </div>
        <div>
          <span className="marginSmallRant">baseExperience:</span>
          <span>{props.pokemon.baseExperience}</span>
        </div>
        <div>
          <span className="marginSmallRant">weight:</span>
          <span>{props.pokemon.weight}</span>
        </div>
        <div>
          <span className="marginSmallRant">ability:</span>
          <span>{props.pokemon.ability}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;

{
  /* {Pokemons.map((item) => (
          <div key={item.name}>
            {item.name}, {item.id}, {item.height}, {item.baseExperience},
            {item.weight}, {item.ability}
          </div>
        ))} */
}
