import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import LaptopIcon from '@mui/icons-material/Laptop'
import CodeIcon from '@mui/icons-material/Code'
import { experience } from '../data/portfolioData'

const iconMap = {
  laptop: LaptopIcon,
  code: CodeIcon,
}

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(#00111c, #171f24)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h2"
          sx={{ color: 'white', fontWeight: 700, mb: 1 }}
        >
          Professional Experience
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
      <Grid container spacing={3} justifyContent="center">
        {experience.map((exp) => {
          const Icon = iconMap[exp.icon] || LaptopIcon
          return (
            <Grid item xs={12} md={6} key={exp.id}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#424e5a',
                  color: 'white',
                  borderLeft: `4px solid ${exp.color}`,
                  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Icon sx={{ color: exp.color, fontSize: 28 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      {exp.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ textAlign: 'justify', mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                    {exp.description}
                  </Typography>
                  <Typography sx={{ color: '#2196f3', fontWeight: 600 }}>
                    {exp.period}
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
