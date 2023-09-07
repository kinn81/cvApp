import EducationInput from "./EducationInput";
import { useState } from "react";

function addSchool(school, fromDate, toDate) {
  return { school, fromDate, toDate };
}

const handleSubmit = (
  school,
  fromDate,
  toDate,
  userEducation,
  setUserEducation,
  setFormVisible
) => {
  for (let record of userEducation) {
    if (
      record.school === school &&
      record.fromDate === fromDate &&
      record.toDate === toDate
    ) {
      setFormVisible(false);
      return;
    }
  }
  const newRecord = addSchool(school, fromDate, toDate);
  setUserEducation([...userEducation, newRecord]);
  setFormVisible(false);
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
      <button
        onClick={() => {
          handleSubmit(
            inputFields.school,
            inputFields.fromDate,
            inputFields.toDate,
            userEducation,
            setUserEducation,
            setFormVisible
          );
        }}
      >
        Add+
      </button>
    </div>
  );
}
export default DisplayEducationInputForm;
