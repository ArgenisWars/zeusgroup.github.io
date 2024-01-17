import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import './Sobre.css'
import img from '../../assets/imgs/resume.png'





export const Sobre = () => {
  
  useEffect(() => {
    Aos.init({duration: 1700});
  }, [])

  return (
    <main className="conteudoSobre" id="sobre">
      <aside data-aos="fade-right" className="containerSobre">
        <img src={img} alt="dev" />
        <aside data-aos="fade-left" className="textoSobre">
          <h1 className='Titulo'>Sobre</h1>
          <h1 className="sobre__mim">Somos uma empresa especializada em <span className='green'> Desevolvimento Web, Design Web e Automação de servidores no Discord </span><br/><br />
              Buscamos trazer a melhor qualidade e performace no seu projeto <span className='green'></span><br /> <br />
              Como fazemos? <span className="green">Possuimos um especialista em cada setor desejavel</span> e <span className="green"></span> de acordo com suas necessidade buscamos ultilizar as melhores tecnologias, mais inovadoras da atualidade, alto nivel de confiabilidade e tudo isso com o <span className="green">MELHOR PREÇO</span></h1> 
            <aside className="botaosSobre">
            </aside>
        </aside>
      </aside>
    </main> 
  );
};
