import Suggestion from "./suggestion";

export default function Suggestions() {
  const suggestions = [
    {
      id: 1,
      img: "https://yt3.ggpht.com/ytc/AMLnZu8648AV32zHS4xE0UqKrJEl3dGzkyEGHFBVIh5zCw=s900-c-k-c0x00ffffff-no-rj",
      usuario: "numpulo",
      status: "Segue Você"
    },
    {
      id: 2,
      img: "https://scontent.ffln1-1.fna.fbcdn.net/v/t39.30808-6/327342439_1361733271307767_205592129715381998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3634G-S19oAX9YUFYb&_nc_ht=scontent.ffln1-1.fna&oh=00_AfCDtj4Y5gOmYGKLW-FU3pjLLcYNO3-ocyNM80vQm2cYjQ&oe=63EA7C28",
      usuario: "travellingthroughtheworld",
      status: "Novo no Instagram"
    },
    {
      id: 3,
      img: "https://pbs.twimg.com/profile_images/1406284335850926082/sfZ0F3ho_400x400.jpg",
      usuario: "explorewithed",
      status: "Segue Você"
    },
    {
      id: 4,
      img: "https://fhop.com/wp-content/uploads/2022/05/SCHOOL-01.png",
      usuario: "fhopschool",
      status: "Segue Você"
    },
    {
      id: 5,
      img: "https://pbs.twimg.com/media/FVQEjuhXEAAluGk.jpg",
      usuario: "pythonsul",
      status: "Novo no Instagram"
    }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestoes para Você
        <div> Ver Tudo</div>
      </div>

      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}
