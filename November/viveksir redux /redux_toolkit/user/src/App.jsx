import { useState } from "react";
import "./App.css";
let initialState = {
  name: "Sudhanshu Ranjan",
  age: 24,
  email: "sudhanshu2dbit@gmail.com",
};
let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, { type, payload }) => {
      const { name, email, age } = payload;
    },
  },
});

function App() {
  const [userdata, setUserData] = useState({
    name: "Sudhanshu Ranjan",
    age: 24,
    email: "sudhanshu2dbit@gmail.com",
  });

  function handleChange(e) {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  }
  // console.log(userdata);
  return (
    <>
      <h1>USER</h1>
      <h2>Name: </h2>
      <h2>Email: </h2>
      <h2>Age: </h2>
      <form action="">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="">Age: </label>
        <input type="number" name="age" onChange={handleChange} />
        <br />
        <br />
        <button type="submit">UPDATE</button> &nbsp;
        <button>RESET</button>
      </form>
    </>
  );
}

export default App;
