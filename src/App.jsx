import { useState } from "react";
import "./App.css";
import UserInputPage from "./UserInputPage";
import CVPage from "./CVPage";

function App() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  return (
    <div id="mainPage">
      <UserInputPage
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <CVPage />
    </div>
  );
}

export default App;
