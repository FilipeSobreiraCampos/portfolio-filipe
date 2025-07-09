import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import styled from 'styled-components';

const ContactWrapper = styled(Box)`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  scroll-margin-top: 80px;
`;

export function ContactSection() {
  return (
    <ContactWrapper id="contact">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Contato
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Nome" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Mensagem" variant="outlined" multiline rows={4} fullWidth />
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ContactWrapper>
  );
}
