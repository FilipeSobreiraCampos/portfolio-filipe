// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Typography variant="h6">Filipe Sobreira Campos</Typography>
        <div>
          <Button color="inherit" onClick={() => handleScroll('about')}>Sobre</Button>
          <Button color="inherit" onClick={() => handleScroll('projects')}>Projetos</Button>
          <Button color="inherit" onClick={() => handleScroll('contact')}>Contato</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}
