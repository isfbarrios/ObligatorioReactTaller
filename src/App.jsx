import { useState } from 'react'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [logged, setLogged] = useState(localStorage.getItem('apiKey') == null ? false : true);

  const handleSession = (isLogged, apiKey) => {
    setLogged(isLogged);
    if (!isLogged) localStorage.removeItem('apiKey');
    else {
      if (apiKey.length > 0) localStorage.setItem('apiKey', apiKey);
      else setLogged(false);
    }
  };

  return (
    <>
      <Login logged={logged} handleSession={handleSession} />
    </>
  )
}
export default App
