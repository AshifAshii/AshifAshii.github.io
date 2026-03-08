import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', mail: '', subject: '', content: '' })
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, mail, subject, content } = formData

    if (!name?.trim() || !mail?.trim() || !subject?.trim() || !content?.trim()) {
      setSnackbar({ open: true, message: 'Please fill in all fields.', severity: 'error' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(mail)) {
      setSnackbar({ open: true, message: 'Please enter a valid email.', severity: 'error' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('https://folioback.infidark.com/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          mail: mail.trim(),
          subject: subject.trim(),
          content: content.trim(),
        }),
      })
      if (res.ok) {
        setSnackbar({ open: true, message: 'Your message was sent successfully!', severity: 'success' })
        setFormData({ name: '', mail: '', subject: '', content: '' })
      } else {
        setSnackbar({ open: true, message: 'Something went wrong. Please try again.', severity: 'error' })
      }
    } catch (err) {
      setSnackbar({ open: true, message: 'Failed to send. Please try again later.', severity: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(#00111c, #171f24)',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          Reach Me
        </Typography>
        <Box sx={{ width: 60, height: 10, backgroundColor: '#2196f3', mx: 'auto', mb: 1 }} />
        <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>We can have a coffee!!</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: '#2196f3' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="mail"
                  type="email"
                  label="Email"
                  value={formData.mail}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: '#2196f3' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: '#2196f3' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="content"
                  label="Message"
                  value={formData.content}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: '#2196f3' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth
                  disabled={loading}
                  sx={{
                    borderColor: '#2196f3',
                    color: '#2196f3',
                    py: 1.5,
                    '&:hover': { borderColor: '#2196f3', backgroundColor: 'rgba(33,150,243,0.1)' },
                  }}
                >
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LocationOnIcon sx={{ color: '#2196f3', fontSize: 28 }} />
                  <Typography variant="h6" sx={{ color: 'white' }}>Address</Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Nagercoil, Kanniyakumari<br />Tamil Nadu, India
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <PhoneIcon sx={{ color: '#2196f3', fontSize: 28 }} />
                  <Typography variant="h6" sx={{ color: 'white' }}>Phone</Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>+91 80564 #####</Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <EmailIcon sx={{ color: '#2196f3', fontSize: 28 }} />
                  <Typography variant="h6" sx={{ color: 'white' }}>Email</Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  <a href="mailto:admin@infidark.com" style={{ color: '#2196f3' }}>
                    admin@infidark.com
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
