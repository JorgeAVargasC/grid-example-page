import styled from "styled-components";

export const Container = styled.div`
background-color: #000000;
height: 100vh;
min-height: 100vh;
max-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Navbar = styled.nav`
  position:fixed;
  height: 10vh;
  top: 0;
  width: 100%;
  background-color: #131313;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  li {
    list-style: none;
  }

  a{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 300;
    color: #505050;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #fff;
      transition: 0.2s ease-in-out;
    }
  }

`

export const PageContent = styled.div`  
  width: 100%;
  height: 100vh;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SectionTitle = styled.div`
width: 100%;
max-height: 300px;
position: relative;

h1 {
  color: #fff;
  background-color: #000000;
  font-weight: 700;
  font-size: 6rem;
  text-align: center;
  mix-blend-mode: multiply;
  line-height: 1;
}
`;

export const Background = styled.div`
  
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
        -45deg, 
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
  );  
  animation: AnimateBG 5s ease infinite;


@keyframes AnimateBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
`

export const CardsContainer = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 1rem;
`;

export const Card = styled.div`
  background-color: #292929;
  padding: 1em 1em 2em;
  min-height: 50vh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  p {
    color: #b1b1b1;
    font-weight: 300;
    text-align: justify;
    line-height: 1.2;
  }
`;

export const LogoContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;

export const Button = styled.button`
  width: 100%;
  padding: 1em;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  background: linear-gradient(45deg, #BD34FE 0%, #41D1FF 100%);

  &:hover {
    transition: 0.2s ease-in-out;
    background: linear-gradient(45deg, #41D1FF 0%, #BD34FE 100%);
    cursor: pointer;
  }

`;