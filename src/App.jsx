import { useState } from 'react'
import reactLogo from './assets/react.svg'

import {
  Container,
  CardsContainer,
  Card,
  LogoContainer,
  Button,
  Background,
  SectionTitle,
  Navbar,
  PageContent
} from './styles.jsx'

import react from './assets/react.svg'
import vite from './assets/vite.svg'

function App() {

  return (
    <Container>

      {/* Navbar */}
      <Navbar>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </Navbar>


      {/* Page Content */}
      <PageContent>
        <SectionTitle>
          <Background/>
          <h1>Hola</h1>
        </SectionTitle>
        <CardsContainer>
          <Card>
            <LogoContainer>
              <img src={react} alt="" srcset="" />
              <h2>CARD 1</h2>
            </LogoContainer>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, nisi animi at blanditiis mollitia nihil accusamus iste dolores, tempora ipsa ea culpa est porro, non et exercitationem corporis aspernatur.</p>

            <Button>Button</Button>
          </Card>
          <Card>
            <LogoContainer>
              <img src={vite} alt="" srcset="" />
              <h2>CARD 2</h2>
            </LogoContainer>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, nisi animi at blanditiis mollitia nihil accusamus iste dolores, tempora ipsa ea culpa est porro, non et exercitationem corporis aspernatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, nisi animi at blanditiis mollitia nihil accusamus iste dolores, tempora ipsa ea culpa est porro, non et exercitationem corporis aspernatur.</p>

            <Button>Button</Button>
          </Card>
          <Card>
            <LogoContainer>
              <img src={react} alt="" srcset="" />
              <h2>CARD 3</h2>
            </LogoContainer>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, nisi animi at blanditiis mollitia nihil accusamus iste dolores, tempora ipsa ea culpa est porro, non et exercitationem corporis aspernatur.</p>

            <Button>Button</Button>
          </Card>
        </CardsContainer>
      </PageContent>
      
    </Container>
  )
}

export default App
