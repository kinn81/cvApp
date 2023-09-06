import EducationInput from "./EducationInput";
import { useState } from "react";

function addSchool(school, startYear, endYear) {
  return { school, startYear, endYear };
}

const handleSubmit = () => {
  console.log("You added a record!");
};

function DisplayEducationInputForm({
  setFormVisible,
  userEducation,
  setUserEducation,
}) {
  let [inputFields, setInputFields] = useState({
    school: "Harvard",
    fromDate: "01 Jan 1970",
    toDate: "30 Jan 1971",
  });

  return (
    <div id="DisplayEducationInputForm">
      <EducationInput
        labelText="School:"
        inputName="school"
        initialValue={inputFields.school}
        inputFields={inputFields}
        onChangeFunction={setInputFields}
      />
      <EducationInput
        labelText="From date:"
        inputName="fromDate"
        initialValue={inputFields.fromDate}
        inputFields={inputFields}
        onChangeFunction={setInputFields}
      />
      <EducationInput
        labelText="To date:"
        inputName="toDate"
        initialValue={inputFields.toDate}
        inputFields={inputFields}
        onChangeFunction={setInputFields}
      />
      <button onClick={handleSubmit}>Add+</button>
    </div>
  );
}
export default DisplayEducationInputForm;
