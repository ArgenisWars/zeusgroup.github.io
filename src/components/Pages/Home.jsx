import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Typical from 'react-typical';



import './Home.css'
import img3 from '../../assets/imgs/dev4.gif'
import Button from '../Buttons/Button';




export const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <main className="conteudo" id="home">
      <aside className="container">
        <aside data-aos="fade" className="texto">
          <h1>Olá, nós somos <br /> <span>Zeus Group</span> <br /> <span>
            <Typical
            loop={4}
            wrapper="r"
            steps={[
              'Website Profissional',
              1000,
              'Design Gráfico',
              1000
            ]}
            />
            </span> </h1>
            <aside className="botaos">
              <Button link="https://wa.me/554797050819"  title= "Faça o seu orçamento"></Button>
            </aside>
        </aside>
        <img data-aos="fade" src={img3} alt="dev" />
      </aside>
    </main> 
  )
};
