'use client'

import React, { useState, ReactNode, SyntheticEvent } from 'react'
import { Tab, Tabs, Box, Divider } from '@mui/material'
import '../component.scss'

interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

interface ITabmenu {
  menuButton: string[]
  components: React.JSX.Element[]
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, backgroundColor: '#fff' }}>{children}</Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const TabMenu = ({ menuButton, components }: ITabmenu) => {
  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="width-100">
      <Box className="border">
        <Tabs value={value} onChange={handleChange}>
          {menuButton.map((item, index) => (
            <Tab key={index} label={item} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {components?.map((item, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            {item}
          </CustomTabPanel>
        )
      })}
      <Divider />
    </Box>
  )
}
export default TabMenu
