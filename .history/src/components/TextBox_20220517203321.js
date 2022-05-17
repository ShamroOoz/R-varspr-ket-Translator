const TextBox = ({
  style,
  setShowModal,
  selectedLanguage,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {
  const handleClick = () => {
    setTextToTranslate("");
    setTranslatedText("");
  };
  return (
    <div className={style}>
      <textarea
        disabled={style === "output"}
        className={style}
        placeholder={style === "input" ? "Enter text" : "Translation"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText}
      />
      {style === "input" && (
        <div className="delete" onClick={handleClick}>
          ˟
        </div>
      )}
    </div>
  );
};

export default TextBox;
