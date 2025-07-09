import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false); // fecha o menu quando clica no item
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'center' }}>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  sx={{ color: '#fff', backgroundColor: 'transparent', textTransform: 'none' }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer para não esconder conteúdo embaixo do appbar */}
      <Box sx={{ height: '64px' }} />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { backgroundColor: '#000', color: '#fff', width: 250 } }}
      >
        <List>
          {menuItems.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(id)}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
