import "./EducationInputStyles.css";
import DisplayEducationInputForm from "./DisplayEducationInputForm";
import { useState } from "react";

function UserEducationInput({ userEducation, setUserEducation }) {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <>
      <h2>User Education</h2>
      {isFormVisible ? (
        <DisplayEducationInputForm
          setFormVisible={setFormVisible}
          userEducation={userEducation}
          setUserEducation={setUserEducation}
        />
      ) : (
        <div>
          <ul>
            {userEducation.map((record) => {
              return (
                <li key={record.school}>
                  {record.school}, {record.fromDate} - {record.toDate}
                </li>
              );
            })}
          </ul>
          <button onClick={handleClick}>Add+</button>
        </div>
      )}
    </>
  );
}
export default UserEducationInput;
