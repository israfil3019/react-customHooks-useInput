// import { useState } from "react";
import { useMyInput } from "./useInput";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName, lastName);

  // const [inputs, setInputs] = useState({firstName: '', lastName: ''})
  // console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ inputs", inputs)

  // const handleChange = (e) => {
  //   setInputs({...inputs, [e.target.name]: e.target.value })
  // }

  //function is caught as a myInputs
  const [myInputs, setMyInputs] = useMyInput({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log("🚀 ~ file: App.js ~ line 22 ~ App ~ myInputs", myInputs);

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <form>
        <label htmlFor="firstName">
          First Name:{" "}
          <input
            name="firstName"
            value={myInputs.firstName}
            onChange={setMyInputs}
            // onChange=(e)=>setFirstName(e.target.value)
          />
        </label>
        <label htmlFor="lastName">
          Last Name:{" "}
          <input
            name="lastName"
            value={myInputs.lastName}
            onChange={setMyInputs}
            // onChange=(e)=>setLastName(e.target.value)
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input name="email" value={myInputs.email} onChange={setMyInputs} />
        </label>
      </form>
    </div>
  );
}

export default App;
