function CVPage({ userDetails }) {
  return (
    <div id="CVPage">
      <h2>Formatted CV</h2>
      <h1>{userDetails.fName + " " + userDetails.lName}</h1>
      <p>
        {userDetails.email}{" "}
        {userDetails.email && userDetails.phone ? "/" : null}{" "}
        {userDetails.phone}
      </p>
    </div>
  );
}

export default CVPage;
