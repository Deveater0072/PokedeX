import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextWithLabel from "./TextWithLabel";

const PokemonCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <TextWithLabel label="Name" text={props.pokemon.name} />
      <TextWithLabel label="Id" text={props.pokemon.id} />
      <TextWithLabel label="Height" text={props.pokemon.height} />
      <TextWithLabel label="Base Experience" text={props.pokemon.baseExperience} />
      <TextWithLabel label="Weight" text={props.pokemon.weight} />
      <TextWithLabel label="Ability" text={props.pokemon.ability} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;


