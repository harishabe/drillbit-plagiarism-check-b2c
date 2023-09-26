const emailRegex = /^[A-Z0-9._%+-]{2,64}@[A-Z0-9.-]{2,255}.[A-Z0-9-]{2,63}$/i
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

export const LoginFormJson = [
  {
    id: 'username',
    fieldType: 'input',
    type: 'email',
    name: 'username',
    label: 'Username *',
    rules: {
      maxLength: {
        value: 100,
        message: 'Length should be less than 100',
      },
      required: {
        value: true,
        message: 'Enter email address',
      },
      pattern: {
        value: emailRegex,
        message: 'Please enter valid email address',
      },
    },
  },
  {
    fieldType: 'input',
    type: 'password',
    id: 'password',
    label: 'Password *',
    name: 'password',
    rules: {
      maxLength: {
        value: 100,
        message: 'Length should be less than 100',
      },
      required: {
        value: true,
        message: 'Enter password',
      },
      pattern: {
        value: passwordRegex,
        message: 'Please enter valid password',
      },
    },
  },
  {
    id: 'linkField',
    fieldType: 'linkField',
    align: 'right',
    path: '/forgot-password',
    label: 'Forgot Password?',
  },
  {
    id: 'signInButton',
    fieldType: 'button',
    label: 'Sign in',
    type: 'submit',
  },
]
