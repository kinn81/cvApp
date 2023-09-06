import "./UserGeneralInput.css";
import UserInput from "./UserInput";

function UserGeneralInput({ userDetails, setUserDetails }) {
  return (
    <div id="UsergeneralInfo">
      <div>
        <UserInput
          labelText="First name:"
          inputName="fName"
          initialValue={userDetails.fName}
          userObject={userDetails}
          onChangeFunction={setUserDetails}
        />
        <UserInput
          labelText="Last name:"
          inputName="lName"
          initialValue={userDetails.lName}
          userObject={userDetails}
          onChangeFunction={setUserDetails}
        />
      </div>
      <div>
        <UserInput
          labelText="Email:"
          inputName="email"
          initialValue={userDetails.email}
          userObject={userDetails}
          onChangeFunction={setUserDetails}
        />
        <UserInput
          labelText="Phone:"
          inputName="phone"
          initialValue={userDetails.phone}
          userObject={userDetails}
          onChangeFunction={setUserDetails}
        />
      </div>
    </div>
  );
}
export default UserGeneralInput;
