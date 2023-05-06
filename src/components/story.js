

export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.image} alt={props.image}/>
      </div>
      <div className="usuario">
        {props.usuario}
      </div>
    </div>
  );
}


