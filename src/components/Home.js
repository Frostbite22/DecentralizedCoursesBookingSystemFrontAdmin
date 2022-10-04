import Profile from "./Profile";
import { useEffect, useState,useLayoutEffect } from "react";
import {BrowserRouter, Routes, Route, Link ,  useLocation,Outlet, useNavigate} from 'react-router-dom' ; 
import background from '../welcome.jpg' ; 
import backgroundAdmin from '../welcome-admin.jpg' ; 

import Paths from "./Paths";
import Levels from "./Levels";
import Sessions from "./Sessions";
import MyLearning from "./MyLearning";
import Admin from "./Admin";
import Student from "./Student";
import FormCreatePath from "./FormCreatePath";
import FormCreateLevel from "./FormCreateLevel";
import FormCreateSession from "./FormCreateSession";
import Students from "./Students";


function Home()
{   
const [currentAccount, setCurrentAccount] = useState("");
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
const [id,setId] = useState("");
const [type,setType] = useState("")


      return (
        <BrowserRouter basename="/DecentralizedCoursesBookingSystemFrontAdmin">
        <Routes>
        <Route path="/" element={<Admin setCurrentAccountLanding={setCurrentAccount} setFirstNameLanding={setFirstName} setIdLanding={setId}
            setEmailLanding={setEmail} setLastNameLanding={setLastName} setType={setType}/>} >
            <Route index element={
            <img className='background' alt="background-admin" src={backgroundAdmin} />} />

            <Route path="profile" element={
            <Profile account={currentAccount} firstName={firstName} lastName={lastName} email={email} type={type}/>}/>
            <Route path="paths" element={<Paths type={type}/>} />
            <Route path="paths/createPath" element={<FormCreatePath/>} />
            <Route path="paths/:pathId/levels" element={<Levels passedId={id} type={type} />}/>
            <Route path="paths/:pathId/levels/createLevel" element={<FormCreateLevel/>} />
            <Route path="paths/:pathId/levels/:levelId/sessions" element={<Sessions type={type}/>}/>
            <Route path="paths/:pathId/levels/:levelId/sessions/createSession" element={<FormCreateSession/>}/>
            <Route path="levels" element={<Levels type={type} fromLevels={true}/>} />
            <Route path="levels/:levelId/students" element={<Students/>} />

            <Route path="students" element={<Students />} />
          </Route>
        

        

        </Routes>
      </BrowserRouter>

      );
}

export default Home ; 