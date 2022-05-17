const SelectDropDown = ({ selectedLanguage }) => {
  return (
    <div className="select-drop-down">
      <input defaultValue={selectedLanguage} />
    </div>
  );
};

export default SelectDropDown;
