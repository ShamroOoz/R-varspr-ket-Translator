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
      

      let new_word = []
      for (x in textToTranslate) {
  // code block to be executed
         if x in consonants and x.islower():
            new_word.append(x + "o" + x)
        elif x in consonants and not x.islower():
            new_word.append(x + "O" + x if word[1].isupper() else x + "o" + x.lower())
        else:
            new_word.append(x)
    new_word = "".join(new_word)
    print("\nTranslating {} to Rövarspråket: {}".format(word, new_word))
  return new_word
}
  
      
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
