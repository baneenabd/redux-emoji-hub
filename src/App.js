import "./App.css";
import { useEffect } from "react";
import { getEmojis } from "./store";
import { useDispatch } from "react-redux";
import { EmojiList } from "./components/EmojiList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <EmojiList />
      </header>
    </div>
  );
}

export default App;
