import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';


function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => { 
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      console.log(meanings);

  } catch (error) { 
    console.log(error);
  }
};

useEffect(() => { 
  dictionaryApi();
}, []);

  return (
    <div className="App" style={{
      height: '100vh', 
      backgroundColor: "#282c34", 
      color: "white"  
    }}>
      <Container maxWidth="md" style={{
        display:"flex", 
        flexDirection: "column", 
        height: "100vh"
        }}>
          Hello, Dictionary
      </Container>
      
    </div>
  );
}

export default App;
