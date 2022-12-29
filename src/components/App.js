import { Navbar, Home, CreatePost, PostDetail } from './index.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Alert from './Alert.js';

function App() {

  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState('');

    const showAlert = (message) => {
        setAlert(message);
        setTimeout(() => {
            setAlert('');
        },2000);
    }

  const toggleMode = () => {
    if(mode === 'light'){
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }

  return (
    <div className="">
      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path='/' element={<Home showAlert={showAlert} mode={mode}/>} />
          <Route exact path='/post/:postId' element={<PostDetail mode={mode} />} />
          <Route exact path='/create-post' element={<CreatePost mode={mode} showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
