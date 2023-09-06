function UserInput({
  labelText,
  inputName,
  initialValue,
  userObject,
  onChangeFunction,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type="text"
        name={inputName}
        value={initialValue}
        onChange={(e) =>
          onChangeFunction({ ...userObject, [inputName]: e.target.value })
        }
      />
    </>
  );
}

export default UserInput;
