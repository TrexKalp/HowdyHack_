import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SimpleCard from "./components/SimpleCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SimpleCard />
    </>
  );
}

export default App;