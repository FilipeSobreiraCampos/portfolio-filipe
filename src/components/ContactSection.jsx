import styled from 'styled-components';
import { Typography, Box, TextField, Button, Link } from '@mui/material';

const ContactContainer = styled.section`
  padding: 3rem 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SocialLinks = styled(Box)`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

export function ContactSection() {
  return (
    <ContactContainer id="contact">
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Mensagem enviada! (Simulação)');
        }}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField label="Nome" variant="outlined" required />
        <TextField label="Email" type="email" variant="outlined" required />
        <TextField
          label="Mensagem"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>

      <SocialLinks>
        <Link href="https://github.com/FilipeSobreiraCampos" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        {/* Adicione mais links sociais se quiser */}
      </SocialLinks>
    </ContactContainer>
  );
}
