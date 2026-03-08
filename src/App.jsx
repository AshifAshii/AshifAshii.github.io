import React, { useState, lazy, Suspense, useRef, useEffect } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const LazyPortfolio = lazy(() => import('./components/Portfolio'))
const LazySkills = lazy(() => import('./components/Skills'))

function LazySection({ children, minHeight = '40vh' }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <Box ref={ref} sx={{ minHeight }}>
      {visible ? <Suspense fallback={<Box sx={{ minHeight }} />}>{children}</Suspense> : null}
    </Box>
  )
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'portfolio' },
  { label: 'Technologies', id: 'skills' },
  { label: 'Education', id: 'awards' },
  { label: 'Contact', id: 'contact' },
]

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'primary.main',
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: { width: 280, backgroundColor: 'primary.main' },
                }}
              >
                <Box sx={{ pt: 2 }}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => scrollToSection(item.id)}>
                          <ListItemText primary={item.label} sx={{ color: 'white' }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{ color: 'white', fontWeight: 600, textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ pt: { xs: 7, md: 8 } }}>
        <About />
        <Experience />
        <LazySection minHeight="50vh">
          <LazyPortfolio />
        </LazySection>
        <LazySection minHeight="50vh">
          <LazySkills />
        </LazySection>
        <Education />
        <Contact />
        <Footer />
      </Box>
    </Box>
  )
}

export default App
