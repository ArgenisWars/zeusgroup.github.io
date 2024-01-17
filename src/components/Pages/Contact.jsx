import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import './Contact.css'

import Email from '../../assets/imgs/contato.gif'
import MegaButton from '../Buttons/MegaButton/MegaButton'


export const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])

  return (
    <main className="ContContato" id="contatos">
      <aside className="conteudoContato">
        <aside data-aos="fade-up" className="textoContact">
          <h1>Ficou Interessado<br></br><span>Entre em contato</span></h1>
          <MegaButton link="#"  title= "Envie uma mensagem"></MegaButton>
        </aside>
        <img data-aos="fade-left" className="emailImg" src={Email} alt="Email" />
      </aside>
      <footer className="fooContato">
        <aside className="fooConteudo">
          <aside className="textoFooter">
            <h1 className="textfoo">© 2024 Zeus Group. <span>all rights reserved</span></h1>
          </aside>
          <aside className="miniBotaosarea">
              <h1></h1>
          </aside>

        </aside>
        
      </footer>
    </main>
  );
};
