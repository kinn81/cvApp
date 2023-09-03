import UserGeneralInfo from "./UserGeneralInfo";

function UserInputPage({ userDetails, setUserDetails }) {
  return (
    <div id="UserInputPage">
      <h2>User Input</h2>
      <UserGeneralInfo
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </div>
  );
}

export default UserInputPage;
