import UserGeneralInput from "../UserGeneral/UserGeneralInput";
import UserEducationInput from "../UserEducation/UserEducationInput";

function UserInputPage({
  userDetails,
  setUserDetails,
  userEducation,
  setUserEducation,
}) {
  return (
    <div id="UserInputPage">
      <h2>User Input</h2>
      <UserGeneralInput
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <UserEducationInput
        userEducation={userEducation}
        setUserEducation={setUserEducation}
      />
    </div>
  );
}

export default UserInputPage;
