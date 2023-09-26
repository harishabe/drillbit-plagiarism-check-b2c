import { Button } from '@mui/material'
import { GoogleLogo, FacebookLogo, LinkedInLogo } from 'public/assets'

export const SocialLogin = () => {
  return (
    <div className="social-icon">
      <Button className="btn" variant="outlined" startIcon={<GoogleLogo />}>
        Google
      </Button>
      <Button className="btn" variant="outlined" startIcon={<FacebookLogo />}>
        Facebook
      </Button>
      <Button className="btn" variant="outlined" startIcon={<LinkedInLogo />}>
        LinkedIn
      </Button>
    </div>
  )
}
