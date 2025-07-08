// src/components/HeroSection.jsx
import styled from 'styled-components';
import { Typography } from '@mui/material';

const HeroContainer = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
`;

export function HeroSection() {
  return (
    <HeroContainer>
      <Typography variant="h3" gutterBottom>
        Olá! Eu sou o Filipe
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Desenvolvedor em formação | Suporte Técnico | Cloud & Linux Enthusiast
      </Typography>
    </HeroContainer>
  );
}
