/* eslint-disable react/style-prop-object */
import { useState, useEffect } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";

function App() {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Rövarspråket");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    if (textToTranslate.length) {
      // console.log("response", data);
      setTranslatedText(
        outputLanguage === "Rövarspråket" ? encoded() : decoded()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textToTranslate]);

  const encoded = () => {
    return textToTranslate;
  };

  const decoded = () => {
    return textToTranslate;
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
    </div>
  );
}

export default App;
