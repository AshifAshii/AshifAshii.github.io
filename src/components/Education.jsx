import {
  Box,
  Typography,
  Paper,
  Stack,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <Box
      id="awards"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(#00111c, #171f24)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          Education
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
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Stack spacing={3}>
          {education.map((edu, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                alignItems: { xs: 'flex-start', sm: 'center' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#39b3ff',
                  flexShrink: 0,
                }}
              >
                <SchoolIcon sx={{ fontSize: 24, color: 'white' }} />
              </Box>
              <Paper
                sx={{
                  flex: 1,
                  p: 2,
                  backgroundColor: '#fff',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: '#cfcdcd',
                    '& .date': { color: '#444' },
                    '& .title': { color: '#39b3ff' },
                  },
                }}
              >
                <Typography
                  className="date"
                  sx={{ color: '#39b3ff', fontWeight: 600, fontSize: 14 }}
                >
                  {edu.date}
                </Typography>
                <Typography variant="h6" className="title" sx={{ color: '#444', mt: 0.5 }}>
                  {edu.title}
                </Typography>
                <Typography sx={{ color: '#777', fontSize: 15, mt: 1 }}>
                  {edu.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
