// src/components/AboutSection.jsx
import styled from 'styled-components';
import { Typography } from '@mui/material';

const AboutContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export function AboutSection() {
  return (
    <AboutContainer id="about">
      <Typography variant="h4" gutterBottom>
        Sobre Mim
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Sou um entusiasta da tecnologia em constante aprendizado. Atualmente estudo Desenvolvimento, Linux, Cloud Computing e Suporte Técnico. Este portfólio tem como objetivo apresentar meus projetos, estudos e minha evolução como profissional.
      </Typography>
    </AboutContainer>
  );
}
