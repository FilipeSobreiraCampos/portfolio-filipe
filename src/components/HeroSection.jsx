import { Grid, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const HeroWrapper = styled(Box)`
  padding: 6rem 2rem;
  text-align: center;
  background-color: #f5f5f5;
  scroll-margin-top: 80px; /* para header fixo */
`;

export default function HeroSection() {
  return (
    <HeroWrapper id="hero">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom>
            Olá, eu sou o Filipe Sobreira
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Desenvolvedor Front-end & Entusiasta de Tecnologia
          </Typography>
        </Grid>
      </Grid>
    </HeroWrapper>
  );
}
