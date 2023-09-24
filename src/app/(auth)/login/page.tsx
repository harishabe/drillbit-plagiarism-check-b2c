'use client'

import { useRouter } from 'next/navigation'
import { Grid, Button } from '@mui/material'
import {
  DrillBitLogo,
  GoogleLogo,
  FacebookLogo,
  LinkedInLogo,
} from 'public/assets'
import { FormComponent } from '@/app/components'

import './page.scss'
import FormJson from '@/app/constant/form/loginForm.json'

import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '@/app/redux/api/authApi'

const Login = () => {
  const router = useRouter()
  const [loginUser] = useLoginUserMutation()
  const [registerUser] = useRegisterUserMutation()

  const handleSubmit = async () => {
    await loginUser({
      username: 'drillbit.open@gmail.com',
      password: 'Drillbit123@',
    })

    router.push('/dashboard')
  }

  const handleSignUp = () => {
    router.push('/sign-up')

    // registerUser({
    //   userName: 'drillbit',
    //   userEmail: 'drillbit.open@gmail.com',
    //   pswd: '54321',
    //   ph_no: '88762311211',
    //   address: 'bangalore',
    //   country: 'India',
    // })
  }

  return (
    <div className="login">
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} sm={12}>
          <div className="background">
            <DrillBitLogo />
            <div className="image-contaner">
              <div className="form-container">
                <div className="form">
                  <div className="login-placeholder">
                    Log in to your Account
                  </div>
                  <form onClick={handleSubmit}>
                    {FormJson
                      ? FormJson.map((field) => (
                          <FormComponent key={field.id} field={field} />
                        ))
                      : null}
                  </form>

                  <div className="or-title">or</div>
                  <div className="social-icon">
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<GoogleLogo />}
                    >
                      Google
                    </Button>
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<FacebookLogo />}
                    >
                      Facebook
                    </Button>
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<LinkedInLogo />}
                    >
                      LinkedIn
                    </Button>
                  </div>
                  <div className="account-container">
                    <span className="account-title">
                      Dont't have an account?{' '}
                    </span>
                    <span
                      className="create-account"
                      role="button"
                      onClick={handleSignUp}
                    >
                      Create an account
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12}></Grid>
      </Grid>
    </div>
  )
}

export default Login
