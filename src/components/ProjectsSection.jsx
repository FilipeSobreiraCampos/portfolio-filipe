import { Grid, Typography, Card, CardContent, Box } from '@mui/material';

export function ProjectsSection() {
  return (
    <Box id="projects" sx={{ padding: '4rem 2rem', scrollMarginTop: '80px', backgroundColor: '#fff' }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Projetos
          </Typography>
          <Card sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">Projeto 1</Typography>
              <Typography variant="body2" color="text.secondary">
                Descrição breve do projeto 1.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">Projeto 2</Typography>
              <Typography variant="body2" color="text.secondary">
                Descrição breve do projeto 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
