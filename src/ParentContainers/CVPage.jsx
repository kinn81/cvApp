import "./CVPage.css";

function CVPage({ userDetails, educationDetails }) {
  return (
    <div id="CVPage">
      <h2>Formatted CV</h2>
      <h1>{userDetails.fName + " " + userDetails.lName}</h1>
      <p>
        {userDetails.email}{" "}
        {userDetails.email && userDetails.phone ? "/" : null}{" "}
        {userDetails.phone}
      </p>
      <ul id="educationList">
        {educationDetails.map((record) => {
          return (
            <li key={record.school + record.fromDate + record.toDate}>
              {Object.values(record).join(", ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CVPage;
