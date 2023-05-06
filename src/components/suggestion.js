
export default function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
      <img src={props.img} alt={props.img} />
            <div className="texto">
                <div className="nome">{props.usuario}</div>
                <div className="razao">{props.status}</div>
        
      </div>      
    </div> <div className="seguir">Seguir</div>
    </div>

);
}


