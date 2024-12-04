const Games = () => {
    const game = {
      coverImageUrl: "https://i.ibb.co.com/Vmby9dF/pexels-ferarcosn-190819.jpg",
      title: "Epic Adventure",
      reviewDescription:
        "An amazing journey filled with breathtaking visuals and engaging gameplay.",
      rating: 9,
      publishingYear: 2023,
      genre: "Action",
    };
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src={game.coverImageUrl}
          alt={game.title}
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{game.title}</h2>
          <p className="text-gray-700 text-base">{game.reviewDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {game.genre}
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Rating: {game.rating}/10
          </span>
          <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Year: {game.publishingYear}
          </span>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore Details
          </button>
        </div>
      </div>
    );
  };
  
  export default Games;
  