import "./UserGeneralInfo.css";

function UserGeneralInfo() {
  return (
    <div id="UsergeneralInfo">
      <div>
        <label>
          First name:
          <input type="text" name="fName" />
        </label>
        <label>
          Last name:
          <input type="text" name="lName" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" name="email" />
        </label>

        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
      </div>
    </div>
  );
}
export default UserGeneralInfo;
