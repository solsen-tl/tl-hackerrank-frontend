import { h } from "preact";
import { useState, useCallback } from "preact/hooks";
import style from "./style.css";

const JokesComponent = (props) => {
  const {
    jokesApi = "https://official-joke-api.appspot.com/jokes/random",
  } = props;
  const [jokes, setJokes] = useState([]);

  const addJoke = useCallback(() => {
    fetch(jokesApi)
      .then((r) => r.json())
      .catch((err) => alert(err.message));
  }, [setJokes, jokes, jokesApi]);

  return (
    <div>
      <h1>Jokes:</h1>
      <ul>
        {jokes.map((joke) => {
          const { setup, type, punchline } = joke;
          return (
            <li className={`joke ${type}`}>
              <span className={`${style.type} ${type}`}>{type}</span>
              <h2>{setup}</h2>
              <h3>{punchline}</h3>
            </li>
          );
        })}
      </ul>
      <button onClick={addJoke}>Add a Random Joke</button>
    </div>
  );
};

export default JokesComponent;
