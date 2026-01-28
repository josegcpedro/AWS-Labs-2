import { useState } from "react";

function App() {
  const [result, setResult] = useState<string | null>(null);
  const url = process.env.REACT_APP_URL;
  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status : ${response.status}`);
      }

      const data = await response.json();
      setResult(data.message)
    } catch (error) {
      setResult(`Error: ${error}`);
    }
  }
  return (
    <div>
      <h1>
        New version 2.0
      </h1>
      <button onClick={getData}>Voir URL et fetch</button>
      <h1>
        {result}
      </h1>
    </div>
  );
}

export default App;
