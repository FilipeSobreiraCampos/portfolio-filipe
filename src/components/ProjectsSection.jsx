import styled from 'styled-components';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const SectionContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const projects = [
  {
    name: 'Meu Site Pessoal',
    description: 'Portfólio desenvolvido com React, Vite e MUI, mostrando meus projetos e habilidades.',
    url: 'https://github.com/FilipeSobreiraCampos/portfolio-filipe'
  },
  {
    name: 'Projeto X',
    description: 'Descrição breve do projeto X para mostrar minhas habilidades.',
    url: '#'
  },
  // Adicione mais projetos aqui...
];

export function ProjectsSection() {
  return (
    <SectionContainer id= "projects">
      <Typography variant="h4" gutterBottom>Projetos</Typography>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.url} target="_blank" rel="noopener noreferrer">
                  Ver Repositório
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
