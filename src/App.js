import './App.css';
import Login from './login';
import Home from './home'
import Signup from './signup'
import Website from './website.js'
import Contact from './contact.js'
import Suv from './suv.js'
import Premium from './premium.js'
import Hatchback from './hatchback.js'
import Sedan from './sedan.js'
import Booknow1 from './booknow1.js'

import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/website' element={<Website/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/suv' element={<Suv/>}/>
                <Route path='/premium' element={<Premium/>}/>
                <Route path='/hatchback' element={<Hatchback/>}/>
                <Route path='/sedan' element={<Sedan/>}/>
                <Route path='/booknow1' element={<Booknow1/>}/>


            </Routes>
        </Router>
    );
}
export default App;





