interface Fonts {
  readonly farro: string,
  readonly mono: string,
  readonly openSans: string,
}

interface Globals {
  readonly backgroundColour: string,
  readonly backgroundImage: string,
  readonly themeSwitcher: string,
}

interface Colours {
  readonly black: string,
  readonly font?: string,
  readonly grey: string,
  readonly inverseFont?: string,
  readonly lightGrey: string,
  readonly red: string,
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
  grey: "#333",
  lightGrey: "#AAA",
  white: "#FFF",
  yellow: "#FCE205", // "#FCA311", //
}

export const darkTheme: Theme = {
  globals: {
    backgroundColour: "#2d3436",
    backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    themeSwitcher: colours.black,
  },
  colours: {
    ...colours,
    font: colours.white,
    inverseFont: colours.black,
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
    backgroundImage: "linear-gradient(to bottom right, #feffff 86%, #fce205 100%)",
    themeSwitcher: colours.lightGrey,
  },
  colours: {
    ...colours,
    font: colours.black,
    inverseFont: colours.white,
  },
  fonts: {
    farro: "'Farro', sans-serif",
    mono: "'Source Code Pro', monospace",
    openSans: "'Open Sans', sans-serif",
  },
  name: "light",
}
