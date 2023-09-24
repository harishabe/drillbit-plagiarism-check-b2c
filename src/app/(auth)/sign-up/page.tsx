'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Grid } from '@mui/material'
import { DrillBitLogo } from 'public/assets'
import { FormComponent } from '@/app/components'

import './../login/page.scss'
import FormJson from '@/app/constant/form/signUpForm.json'

import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '@/app/redux/api/authApi'

const SignUp = () => {
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
                <div className="login-placeholder">Create your account</div>
                <form onClick={handleSubmit}>
                  {FormJson
                    ? FormJson.map((field) => (
                        <FormComponent key={field.id} field={field} />
                      ))
                    : null}
                </form>
                <div className="account-container">
                  <Link href="/login" className="account-title">
                    Back to login
                  </Link>
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

export default SignUp
