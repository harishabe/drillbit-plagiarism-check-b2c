import palette from './drillbit/palette'
import mixins from './drillbit/mixins'
import shadows from './drillbit/shadows'
import typography from './drillbit/typography'
import zIndex from './drillbit/zIndex'
import breakpoints from './drillbit/breakpoints'

import { IDrillBitTheme } from './IDrillBitTheme'

const drillBitTheme: IDrillBitTheme = {
  breakpoints: breakpoints,
  palette: palette,
  mixins: mixins,
  shadows: shadows,
  typography: typography,
  zIndex: zIndex,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.primary,
          fontWeight: 600,
          marginTop: '.3125rem',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#fff !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: '.0625rem',
          textTransform: 'capitalize',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 300,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0.5rem 0.75rem',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: '0.375rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: '500',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
}

export default drillBitTheme
