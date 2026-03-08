import { Box, Typography, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import { socialLinks } from '../data/portfolioData'

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
}

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', sm: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/img/profile-banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 17, 28, 0.6)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 3, sm: 4, md: 6 },
          py: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: '#ff0045',
            fontWeight: 700,
            fontSize: { xs: 'clamp(2rem, 10vw, 4rem)', md: 'clamp(3rem, 6vw, 5rem)' },
          }}
        >
          Ashif <span style={{ color: '#ff0045' }}>Ahamed A</span>
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            mt: 1,
          }}
        >
          I'm a guy who follows the ROAD
        </Typography>
        <Typography
          sx={{
            color: '#b1fff8',
            fontWeight: 700,
            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.35rem' },
            mt: 0.5,
          }}
        >
          Realistic - Optimistic - Adaptable - Dedicated
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return Icon ? (
              <IconButton
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.5)',
                  '&:hover': {
                    borderColor: '#2196f3',
                    color: '#2196f3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                  },
                }}
              >
                <Icon />
              </IconButton>
            ) : null
          })}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src="/img/logo-s.png"
          alt="DarkMan Logo"
          loading="lazy"
          decoding="async"
          sx={{
            height: { xs: '14vw', sm: '12vw', md: '80px' },
            maxHeight: 120,
          }}
        />
      </Box>
    </Box>
  )
}
