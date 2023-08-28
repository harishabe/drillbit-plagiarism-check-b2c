import type { Meta, StoryObj } from '@storybook/react'

import { FormComponent } from '@/app/components'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Component/InputFields',
  component: FormComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FormComponent>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputTextField: Story = {
  args: {
    field: {
      id: 'username',
      fieldType: 'input',
      label: 'Email address*',
      type: 'email',
      name: 'username',
    },
  },
}

export const Button: Story = {
  args: {
    field: {
      id: 'signInButton',
      fieldType: 'button',
      label: 'Sign in',
      type: 'submit',
    },
  },
}
