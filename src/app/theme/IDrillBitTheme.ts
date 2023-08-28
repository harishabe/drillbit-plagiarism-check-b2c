interface Theme {
  palette: {
    [key: string]: string | { [key: string]: string }
  }
}

export interface IDrillBitTheme extends Theme {
  breakpoints: {
    values: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
  mixins: {
    toolbar: {
      [key: string]: number | { [key: string]: number }
    }
  }
  shadows: [
    'none',
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ]
  typography: {
    [key: string]: string | number | { [key: string]: string | number }
  }
  zIndex: {
    [key: string]: number
  }
  components: {
    [key: string]: object
  }
}
