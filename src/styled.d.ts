import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      body: string;
      white: string;
      lightGrey: string;
      darkPrimary: string;
      greyCyan: string;
      darkGreyCyan: string;
    };
  }
}
