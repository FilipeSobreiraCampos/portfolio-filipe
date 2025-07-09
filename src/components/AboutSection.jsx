import { Grid, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const AboutWrapper = styled(Box)`
  padding: 4rem 2rem;
  background-color: #ffffff;
  scroll-margin-top: 80px;
`;

export function AboutSection() {
  return (
    <AboutWrapper id="about">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Sobre mim
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas e funcionais.
            Tenho experiência com React, Material-UI, styled-components e outras tecnologias.
          </Typography>
        </Grid>
      </Grid>
    </AboutWrapper>
  );
}
