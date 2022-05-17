/* eslint-disable react/style-prop-object */
import { useState, useEffect, useMemo } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";

function App() {
  const [inputLanguage, setInputLanguage] = useState("English");
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
      console.log("decoded");
      return textToTranslate;
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

  return (
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
  );
}

export default App;
