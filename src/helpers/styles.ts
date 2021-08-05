interface Fonts {
  readonly farro: string,
  readonly mono: string,
  readonly openSans: string,
}

interface Globals {
  readonly backgroundColour: string,
  readonly backgroundImage: string,
  readonly headerColour: string,
}

interface Colours {
  readonly black: string,
  readonly red: string,
  readonly font?: string,
  readonly grey: string,
  readonly lightGrey: string,
  readonly white: string,
  readonly yellow: string,
}

export interface Theme {
  readonly globals: Globals,
  readonly colours: Colours,
  readonly fonts: Fonts,
  readonly name: string,
}

export const colours: Colours = {
  black: "#111",
  red: "#F72C25",
  grey: "#555",
  lightGrey: "#AAA",
  white: "#FFF",
  yellow: "#FCE205", // "#FCA311",
}

export const darkTheme: Theme = {
  globals: {
    backgroundColour: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    headerColour: colours.grey,
  },
  colours: {
    ...colours,
    font: colours.white,
  },
  fonts: {
    farro: "'Farro', sans-serif",
    mono: "'Source Code Pro', monospace",
    openSans: "'Open Sans', sans-serif",
  },
  name: "dark",
}

export const lightTheme: Theme = {
  globals: {
    backgroundColour: "#feffff",
    backgroundImage: "linear-gradient(to bottom right, #feffff 71%, #fefcb3 100%)",
    headerColour: colours.red,
  },
  colours: {
    ...colours,
    font: colours.black,
  },
  fonts: {
    farro: "'Farro', sans-serif",
    mono: "'Source Code Pro', monospace",
    openSans: "'Open Sans', sans-serif",
  },
  name: "light",
}
