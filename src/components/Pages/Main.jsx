import React from "react";
import "./Main.css"


import { Home } from './Home';
import { Servicos } from './Servicos';
import { Sobre } from './Sobre';
import { Projects } from './Projects';
import { Contact } from './Contact';
import NavBar from './../NavBar';

export const Main = () => (
  <>
    <Home />
    <Servicos />
    <Sobre />
    {/* <Skills /> */}
    <Projects />
    <Contact />
  </>


)