import "./App.css";
import { produce } from "immer";

function App() {
  // const [count, setCount] = useState(0);
  const user = {
    name: "John Doe",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
      country: {
        name: "USA",
        code: "US",
      },
    },
    hobbies: ["reading", "traveling", "coding"],
    contact: {
      email: "johndoe@example.com",
      phone: {
        home: "123-456-7890",
        work: "987-654-3210",
      },
    },
  };
  console.log(user);
  const newobj = produce(user, (original) => {
    original.address.country.name = "india";
  });
  console.log(newobj);

  return <></>;
}

export default App;
