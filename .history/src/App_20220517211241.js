/* eslint-disable react/style-prop-object */
import { useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";

function App() {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Rövarspråket");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    };
    console.log("response", data);
    setTranslatedText(data);
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
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
      <div className="button-container" onClick={translate}>
        <Button />
      </div>
    </div>
  );
}

export default App;
