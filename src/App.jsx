import { useState } from "react";
import "./App.css";
import UserInputPage from "./ParentContainers/UserInputPage";
import CVPage from "./ParentContainers/CVPage";

function App() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [userEducation, setUserEducation] = useState([
    { school: "Springfield elementary", fromDate: "1994", toDate: "1998" },
    { school: "Springfield University", fromDate: "2000", toDate: "2003" },
  ]);

  return (
    <div id="mainPage">
      <UserInputPage
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        userEducation={userEducation}
        setUserEducation={setUserEducation}
      />
      <CVPage userDetails={userDetails} educationDetails={userEducation} />
    </div>
  );
}

export default App;
