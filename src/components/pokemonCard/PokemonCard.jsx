import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextWithLabel from "../TextWithLabel";
import { Stack } from "@mui/material";
import styles from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  return (
    <Card className={styles.pokemonCard} sx={{ minWidth: 275 }}>
      <CardContent>
        <TextWithLabel label="Name" text={props.pokemon.name} />
        <TextWithLabel label="Id" text={props.pokemon.id} />
        <TextWithLabel
          label="Base Experience"
          text={props.pokemon.baseExperience}
        />
        <TextWithLabel label="Weight" text={props.pokemon.weight} />
        <TextWithLabel label="Ability" text={props.pokemon.ability} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
