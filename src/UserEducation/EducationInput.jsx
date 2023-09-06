function EducationInput({
  labelText,
  inputName,
  inputFields,
  onChangeFunction,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type="text"
        name={inputName}
        value={inputFields[inputName]}
        onChange={(e) =>
          onChangeFunction({
            ...inputFields,
            [inputName]: e.target.value,
          })
        }
      />
    </>
  );
}

export default EducationInput;
