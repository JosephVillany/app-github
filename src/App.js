import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./componentes/home/Home";
import Following from "./views/following/Following";
import Followers from "./views/followers/Followers"
import SingleUser from "./views/singleUser/SingleUser"
import Repo from "./views/repo/Repo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/users/:name/repos" exact element={<Repo/>}/>
        <Route path="/users/:name/following" exact element={<Following/>}/>
        <Route path="/users/:name/followers" exact element={<Followers/>}/>      
        <Route path="/users/:userName" exact element={<SingleUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;