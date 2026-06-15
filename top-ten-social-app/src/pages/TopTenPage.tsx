// This is a simple implementation of the Top Ten page where users can add and remove items from their list.

//This is a react hook that allows us to manage state in a functional componenet.
import { useEffect, useState } from "react";

//this is the main component for the top ten page.
function TopTenPage() {
  //this is a type definition for a game object, which has an id and a title.
  type Game = {
    id: string;
    title: string;
  };

  const availableGames = [
  "Mario Kart",
  "Mario Odyssey",
  "Mario Wonder",
  "Zelda Breath of the Wild",
  "Zelda Tears of the Kingdom",
  "Metroid Prime",
];

  //this is a state variable that holds an array of games, and a function to update that state.
  const [games, setGames] = useState<Game[]>([]);
  const [input, setInput] = useState("");
  const [gameSuggestions, setGameSuggestions] = useState<string[]>([]);

  //this function adds a new game to the list of games. It checks if the input is not empty, creates a new game object with a unique id and the title from the input, updates the state with the new game, and clears the input field.
  const addGame = (suggestion: string) => {
    if (!suggestion.trim()) return;

    const newGame: Game = {
      id: crypto.randomUUID(),
      title: suggestion,
    };

    setGames([...games, newGame]);
    setInput("");
  };

  //this function removes a game from the list of games. It takes an id as a parameter and updates the state by filtering out the game with that id.
  const removeGame = (id: string) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement>,) => {
    e.preventDefault();
    addGame(input);
  };

  const makeGameSuggestions = (input: string) => {
    console.log("running");
    if (input.trim().length >= 3) {
      setGameSuggestions(availableGames.filter((game) => game.toLowerCase().includes(input.toLowerCase())));
    } else {
      setGameSuggestions([]);
    }
  };

  useEffect(() => {
    makeGameSuggestions(input);
  }, [input]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Top Ten
      </h1>
      <p className="text-gray-500 mb-6">
        Discover and share your top ten lists on any topic!
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="flex-1 mb-6 gap-3"
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter a game title..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <ul className="space-y-1 mt-2">
          {gameSuggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => {
                //setInput(suggestion);
                setGameSuggestions([]);
                addGame(suggestion);
              }}
              className="cursor-pointer text-gray-600 hover:text-gray-800"
            >
              {suggestion}
            </li>
          ))}
        </ul>

        {/* <button
          onClick={addGame}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button> */}
      </form>

      <ul className="space-y-3">
        {games.map((game) => (
          <li
            key={game.id}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <span className="text-gray-800">
              {game.title}
            </span>
            <button
              onClick={() => removeGame(game.id)}
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopTenPage;
