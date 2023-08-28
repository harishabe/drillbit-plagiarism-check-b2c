import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './../app/components'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Typography',
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const h1: Story = {
  args: {
    title: 'Hello',
    color: '#000',
    variants: 'h1',
  },
}

export const h2: Story = {
  args: {
    title: 'Hello',
    color: '#000',
    variants: 'h2',
  },
}

export const h3: Story = {
  args: {
    title: 'Hello',
    color: '#000',
    variants: 'h3',
  },
}

export const h4: Story = {
  args: {
    title: 'Hello',
    color: '#000',
    variants: 'h4',
  },
}
