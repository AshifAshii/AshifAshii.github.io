import { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { projects } from '../data/portfolioData'

export default function Portfolio() {
  const [filter, setFilter] = useState('web-app')
  const [modalProject, setModalProject] = useState(null)

  const filteredProjects = projects.filter((p) => p.category === filter)

  return (
    <Box
      id="portfolio"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(#00111c, #171f24)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          Projects
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 10,
            backgroundColor: '#2196f3',
            mx: 'auto',
            mb: 3,
          }}
        />
        <ButtonGroup
          variant="outlined"
          sx={{
            '& .MuiButton-root': {
              borderColor: '#2196f3',
              color: '#2196f3',
              '&:hover': { borderColor: '#2196f3', backgroundColor: 'rgba(33,150,243,0.1)' },
            },
          }}
        >
          <Button
            onClick={() => setFilter('web-app')}
            variant={filter === 'web-app' ? 'contained' : 'outlined'}
          >
            Web Apps
          </Button>
          <Button
            onClick={() => setFilter('mobile-apps')}
            variant={filter === 'mobile-apps' ? 'contained' : 'outlined'}
          >
            Mobile Apps
          </Button>
        </ButtonGroup>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: '#424e5a',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
              onClick={() => setModalProject(project)}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sx={{ objectFit: 'contain', backgroundColor: '#2a3540', p: 2 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <VisibilityIcon sx={{ fontSize: 48, color: 'white' }} />
                </Box>
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  {project.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={!!modalProject}
        onClose={() => setModalProject(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Box
          sx={{
            maxWidth: 800,
            maxHeight: '90vh',
            overflow: 'auto',
            backgroundColor: '#0d2137',
            borderRadius: 2,
            p: 3,
            position: 'relative',
          }}
        >
          <IconButton
            onClick={() => setModalProject(null)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          {modalProject && (
            <>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, pr: 5 }}>
                {modalProject.title}
              </Typography>
              <Box
                component="img"
                src={modalProject.image}
                alt={modalProject.title}
                loading="lazy"
                decoding="async"
                sx={{ maxWidth: '100%', height: 'auto', mb: 2, borderRadius: 1 }}
              />
              <Typography sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                {modalProject.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {modalProject.links ? (
                  modalProject.links.map((l) => (
                    <Button
                      key={l.text}
                      href={l.url}
                      target="_blank"
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      {l.text}
                    </Button>
                  ))
                ) : modalProject.link && modalProject.link !== '#' ? (
                  <Button
                    href={modalProject.link}
                    target="_blank"
                    variant="contained"
                    color="error"
                    size="small"
                  >
                    {modalProject.linkText}
                  </Button>
                ) : null}
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', alignSelf: 'center' }}>
                  {modalProject.date} • {modalProject.service}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}
