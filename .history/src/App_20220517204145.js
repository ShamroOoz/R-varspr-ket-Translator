/* eslint-disable react/style-prop-object */
import { useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";

function App() {
  const [languages, setLanguages] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    console.log("trainsalte");
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
        setShowModal={setShowModal}
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
        setShowModal={setShowModal}
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
