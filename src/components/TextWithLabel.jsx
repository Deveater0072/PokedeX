const TextWithLabel = ({label, text}) => {
  // const { label, text } = props;

  return (
    <div>
      <span className="marginSmallRant">{label}:</span>
      <span>{text}</span>
    </div>
  );
};

export default TextWithLabel;



    {/* <div>
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
      </div> */}