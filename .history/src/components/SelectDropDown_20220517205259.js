const SelectDropDown = ({ selectedLanguage }) => {
  return (
    <div className="select-drop-down">
      <input value={selectedLanguage} defaultValue={selectedLanguage} />
    </div>
  );
};

export default SelectDropDown;
