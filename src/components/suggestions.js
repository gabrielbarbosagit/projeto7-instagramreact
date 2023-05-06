import Suggestion from "./suggestion";

export default function Suggestions() {
  const suggestions = [
    {
      id: 1,
      img: "assets/img/bad.vibes.memes.svg",
      usuario: "bad.vibes.memes",
      status: "Segue Você"
    },
    {
      id: 2,
      img: "assets/img/chibirdart.svg",
      usuario: "chibirdart",
      status: "Segue Você"
    },
    {
      id: 3,
      img: "assets/img/razoesparaacreditar.svg",
      usuario: "razoesparaacreditar",
      status: "Novo no Instagram"
    },
    {
      id: 4,
      img: "assets/img/adorable_animals.svg",
      usuario: "adorable_animals",
      status: "Segue Você"
    },
    {
      id: 5,
      img: "assets/img/smallcutecats.svg",
      usuario: "smallcutecats",
      status: "Segue Você"
    }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestoes para Você
        <div> Ver Tudo</div>
      </div>

      {suggestions.map(Suggestion)}
        </div>
    );
}
