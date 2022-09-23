import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from './Pages/Home';
import { EditorPage } from './Pages/EditorPage';
import HelloWorld from './Pages/HelloWorld';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage />}></Route>
          <Route path='/helloworld' element={<HelloWorld />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
