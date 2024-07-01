import Web3 from "web3";
import Project2 from "./contracts/Project2.json";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ web3: null, contract: null });
  const [data, setData] = useState({ language: "Nothing", letters: 0 });
  const [newLang, setNewLang] = useState("");
  const [newLetters, setNewLetters] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

    async function initializeWeb3() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Project2.networks[networkId];
      const contract = new web3.eth.Contract(
        Project2.abi,
        deployedNetwork && deployedNetwork.address
      );
      setState({ web3: web3, contract: contract });
    }

    if (provider) {
      initializeWeb3();
    }
  }, []);

  useEffect(() => {
    const { contract } = state;

    async function fetchData() {
      if (contract) {
        const contractData = await contract.methods.showLang().call();
        setData({
          language: contractData[0],
          letters: Number(contractData[1]),
        });
      }
    }

    fetchData();
  }, [state]);

  const handleLangChange = async () => {
    try {
      const { web3, contract } = state;
      const accounts = await web3.eth.getAccounts();
      const currentLanguage = data.language;

      if (newLang.trim() === "") {
        setError("Please enter a valid language.");
        return;
      }

      if (newLang === currentLanguage) {
        setError("New language cannot be the same as the current language.");
        return;
      }

      // Clear previous error
      setError("");

      await contract.methods.setLang(newLang).send({ from: accounts[0] });
      const updatedData = await contract.methods.showLang().call();
      setData({ language: updatedData[0], letters: Number(updatedData[1]) });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLettersChange = async () => {
    try {
      const { web3, contract } = state;
      const accounts = await web3.eth.getAccounts();
      await contract.methods.addLin(newLetters).send({ from: accounts[0] });
      const updatedData = await contract.methods.showLang().call();
      setData({ language: updatedData[0], letters: Number(updatedData[1]) });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Metacrafters Project</h1>
      <div className="container">
        <div className="box">
          <input
            type="text"
            value={newLang}
            onChange={(e) => setNewLang(e.target.value)}
            placeholder="New Language"
          />
          <button onClick={handleLangChange}>Set Language</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="box">
          <input
            type="number"
            value={newLetters}
            onChange={(e) => setNewLetters(Number(e.target.value))}
            placeholder="Number of Letters"
          />
          <button onClick={handleLettersChange}>Add Letters</button>
        </div>
      </div>
      <div>
        <p>Language: {data.language}</p>
        <p>Letters: {data.letters}</p>
      </div>
    </div>
  );
}

export default App;
