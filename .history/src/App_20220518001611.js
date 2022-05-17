/* eslint-disable react/style-prop-object */
import { useState, useEffect, useMemo } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";

function App() {
  const [inputLanguage, setInputLanguage] = useState("Swedish");
  const [outputLanguage, setOutputLanguage] = useState("Rövarspråket");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    if (textToTranslate) {
      setTranslatedText(
        outputLanguage === "Rövarspråket" ? encoded() : decoded()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textToTranslate]);

  const encoded = useMemo(
    () => () => {
      let consonants = "BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz";
      let new_word = [];
      for (let x of textToTranslate) {
        consonants.includes(x) ? new_word.push(x + "o" + x) : new_word.push(x);
      }
      return new_word.join("");
    },
    [textToTranslate]
  );

  const decoded = useMemo(
    () => () => {
      let consonants = "BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz";
      let new_word = "";
      let index = 0;
      while (index < textToTranslate.length) {
        new_word += textToTranslate[index];
        consonants.includes(textToTranslate[index])
          ? (index += 3)
          : (index += 1);
      }
      return new_word;
    },
    [textToTranslate]
  );

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
    if (textToTranslate && translatedText) {
      setTextToTranslate(translatedText);
    }
  };

  const loadJokelistner = async () => {
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const joke = await res.json();
        console.log(joke);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Rövarspråket</h2>
      <div className="app">
        <TextBox
          style="input"
          selectedLanguage={inputLanguage}
          setTextToTranslate={setTextToTranslate}
          textToTranslate={textToTranslate}
          setTranslatedText={setTranslatedText}
        />
        <div className="arrow-container" onClick={handleClick}>
          <Arrows />
        </div>
        <TextBox
          style="output"
          selectedLanguage={outputLanguage}
          translatedText={translatedText}
        />
      </div>
      <button className="button" type="button" onClick={loadJokelistner}>
        Joke Of The Day
      </button>
    </>
  );
}

export default App;
