interface Fonts {
  readonly farro: string,
  readonly mono: string,
  readonly openSans: string,
}

interface Background {
  readonly backgroundColour: string,
  readonly backgroundImage: string,
}

interface Colours {
  readonly black: string,
  readonly blue: string,
  readonly font?: string,
  readonly grey: string,
  readonly white: string,
  readonly yellow: string,
}

interface Theme {
  readonly background: Background,
  readonly colours: Colours,
  readonly fonts: Fonts,
}

export const colours: Colours = {
  black: "#111",
  blue: "#14213D",
  grey: "#E5E5E5",
  white: "#FFF",
  yellow: "#FCA311",
}

export const darkTheme: Theme = {
  background: {
    backgroundColour: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
  colours: {
    ...colours,
    font: colours.white, 
  },
  fonts: {
    farro: "'Farro', sans-serif",
    mono: "'Source Code Pro', monospace",
    openSans: "'Open Sans', sans-serif",
  }
}

export const lightTheme: Theme = {
  background: {
    backgroundColour: "#feffff",
    backgroundImage: "linear-gradient(to bottom right, #feffff 71%, #fefcb3 100%)",
  },
  colours: {
    ...colours,
    font: colours.black,
  },
  fonts: {
    farro: "'Farro', sans-serif",
    mono: "'Source Code Pro', monospace",
    openSans: "'Open Sans', sans-serif",
  }
}
