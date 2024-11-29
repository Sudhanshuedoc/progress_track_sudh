import "./App.css";
function App() {
  return (
    <>
      <div id="main">
        <h1>Redux with multiple reducer</h1>
        <div id="counter">
          <h1>Counter</h1>
          <div id="count">
            <h3>count: </h3>
          </div>
          <button>INCREMENT</button>
          <button>DECREMENT</button>
        </div>
        <div id="userProfile">
          <h1>User Profile</h1>
          <div id="inner">
            <h1>Current user info</h1>
            <p>Name:</p>
            <p>Email:</p>
            <p>Age:</p>
          </div>
          <form>
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" name="name" id="" /> <br />
            <br />
            <label htmlFor="">Email:</label>
            <br />
            <input type="email" name="email" id="" /> <br />
            <br />
            <label htmlFor="">Age:</label>
            <br />
            <input type="number" name="age" id="" /> <br />
            <br />
            <button>UPDATE</button>
            <button>RESET</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
