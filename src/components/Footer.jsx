import { Box, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        textAlign: 'center',
        backgroundColor: '#000',
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      <Typography variant="body2">
        Crafted @{' '}
        <Link href="https://www.infidark.com/" target="_blank" rel="noopener" color="inherit" sx={{ textDecoration: 'underline' }}>
          DarkProjeckz
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        © Copyright InfiDark 2026
      </Typography>
    </Box>
  )
}
