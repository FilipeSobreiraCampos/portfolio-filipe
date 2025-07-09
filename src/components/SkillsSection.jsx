import { Grid, Typography, Box, Chip } from '@mui/material';
import styled from 'styled-components';

const SkillsWrapper = styled(Box)`
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  scroll-margin-top: 80px;
`;

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Material-UI',
  'Styled-Components',
  'Git',
  'HTML',
  'CSS',
];

export function SkillsSection() {
  return (
    <SkillsWrapper id="skills">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Habilidades
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" />
            ))}
          </Box>
        </Grid>
      </Grid>
    </SkillsWrapper>
  );
}
