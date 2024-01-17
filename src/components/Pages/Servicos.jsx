import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


import Cards from "../Cards/Cards"
import front from "../../assets/imgs/front.png"
import web from "../../assets/imgs/web.png"
import ux from "../../assets/imgs/ux.png"
import './Servicos.css'

export const Servicos = () => {
  useEffect(() => {
    Aos.init({duration: 1800});
  }, [])

  
  return (
    <main className="cardsArea" id="servicos">
      <aside className="contentCards">
        <aside data-aos="fade-right" className="textos" >
            <h1> <span className="txG">O serviço ideal<span className="verde"> para você</span></span> </h1>
        </aside>
        <aside data-aos="fade-up" className="cards">
              <Cards title= "Site Profissional" 
              subtitle="✔ Loja Virtual"
              subtitle1="✔ Suporte Rápido" 
              subtitle2="✔ Blog Profissional" 
              subtitle3="✔ Website Responsivo" 
              subtitle4="✔  Manutenção Semanal" 
              subtitle5="✔ Otimização de Pesquisa"
              subtitle6="✔  Aplicação de Página Única"
              imagem = {front}></Cards>
              <Cards title= "Design Gráfico"
              subtitle="✔ Flyers" 
              subtitle1="✔ Logotipo" 
              subtitle2="✔ Ilustrações" 
              subtitle3="✔ Mídia Social" 
              subtitle4="✔ Design UI/UX" 
              subtitle5="✔ Motion Design"
              subtitle6="✔ Cartão de Visita"

              imagem = {web}></Cards>
              <Cards title= "Discord bots"
              subtitle="✔ Suporte Rápido" 
              subtitle1="✔ Integração com APIs" 
              subtitle2="✔ Manutenção Semanal" 
              subtitle3="✔ Integração com WebSite" 
              subtitle4="✔ Sistemas Personalizados" 
              subtitle5="✔ Comandos Personalizados"
              subtitle6="✔ Integração com Banco de Dados"
              imagem = {ux}></Cards>
          </aside>
      </aside>
    </main>
  );
};
