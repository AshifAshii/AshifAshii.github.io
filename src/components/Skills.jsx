import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import {
  SiAndroid,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiGit,
} from 'react-icons/si'
import { skills } from '../data/portfolioData'

const iconMap = {
  android: SiAndroid,
  java: SiOpenjdk,
  javascript: SiJavascript,
  html: SiHtml5,
  node: SiNodedotjs,
  react: SiReact,
  docker: SiDocker,
  git: SiGit,
}

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(#00111c, #171f24)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          Tools and Technologies
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 10,
            backgroundColor: '#2196f3',
            mx: 'auto',
          }}
        />
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon] || SiJavascript
          return (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#301a58',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '2px solid transparent',
                  '&:hover': {
                    borderColor: '#743cf7',
                    backgroundColor: '#323aa1',
                  },
                }}
                onClick={() => skill.url && window.open(skill.url)}
              >
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Box sx={{ mb: 1, color: '#2196f3' }}>
                    <Icon size={48} style={{ color: 'inherit' }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {skill.name}
                  </Typography>
                  <Typography sx={{ color: '#2196f3', fontWeight: 700 }}>
                    {skill.level}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
