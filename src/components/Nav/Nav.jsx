import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser,AiOutlineMessage } from "react-icons/ai";
import {MdOutlineWorkOutline,MdOutlineSchool,MdOutlineEngineering} from 'react-icons/md'
import { GrProjects } from "react-icons/gr";

import "./Nav.css";

export default function Nav() {
  const [activeNav,setActiveNav]=useState('#home');
  
  return (
    <nav>
        <a href='#home' className={activeNav==='#home'?'active':''} onClick={()=>setActiveNav('#home')}><AiOutlineHome/></a>
        <a href='#about' className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
        <a href='#skills'  className={activeNav==='#skills'?'active':''} onClick={()=>setActiveNav('#skills')}><MdOutlineEngineering/></a>
        <a href='#work'  className={activeNav==='#work'?'active':''} onClick={()=>setActiveNav('#work')}><MdOutlineWorkOutline/></a>
        <a href='#projects'  className={activeNav==='#projects'?'active':''} onClick={()=>setActiveNav('#projects')}><GrProjects/></a>
        <a href='#education'  className={activeNav==='#education'?'active':''} onClick={()=>setActiveNav('#education')}><MdOutlineSchool/></a>
        <a href='#contacts'  className={activeNav==='#contacts'?'active':''} onClick={()=>setActiveNav('#contacts')}><AiOutlineMessage/></a>
    </nav>
  )
}
