import React from 'react'
import Head from "next/head"
import { Header, MainContent, Footer } from '../styles'

import hublocalLogo from '../assets/hublocal_logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
      </Head>

      <Header>
        <img src={hublocalLogo} alt="Imagem da logo" />
        <h3>Quer descobrir como aumentar a visibilidade e alcançe de sua empresa?</h3>
      </Header>
      
      <MainContent>
        <div className='contentBox primary'>
          <ol>
            <li>
              Com a HubLocal você irá <strong>impulsionar</strong> suas vendas, <strong>aumentar</strong> o fluxo de clientes e <strong>alavancar</strong> o número de buscas pela sua empresa 
              através de mecanismos de busca e sistemas de localização, como Google Maps, Facebook Places, Apple Maps, LinkedIn e outros mais
            </li>

            <li>
              Deixe este trabalho de <strong>gerenciar</strong> a visibilidade e localização com a gente! <strong>Automatize</strong> o serviço e poupe tempo para o que é mais
              importante!
            </li>
            
            <li>
              Saiba as principais localidades de seus clientes, analise por onde eles te encontram, quais meios de comunicação lhe contactam, registre o número
              volume de chamadas, veja os melhores locais para divulgação e <strong>muito mais</strong>!
            </li>
          </ol>
        </div>

        <div className='contentBox'>
          <div className='formBox'>
            <div>
              <h4>
                Preencha o formulário e tenha esta e muitas outras vantagens a partir da HubLocal!
              </h4>
            </div>
            <form action="">
              <label htmlFor="nomeTxt">Nome:</label>
              <input type="text" name="nomeTxt" id="nomeTxt" />

              <label htmlFor="emailTxt">Email:</label>
              <input type="email" name="emailTxt" id="emailTxt" />

              <input type="button" value="Confirmar" />
            </form>
          </div>
        </div>
      </MainContent>

      <Footer>
        <img src={hublocalLogo} alt="Imagem da logo" />
        <span>&copy; Todos os direitos reservados. Imagens usadas apenas como ilustração e sem uso comercial.</span>
        <span>Obrigado Rocketseat! Desafio simples, mas que me ajudou a fixar alguns conceitos de React.js e Next.js</span>
      </Footer>
    </div>
  )
}
 