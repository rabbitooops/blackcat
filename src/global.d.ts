declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __DEV__: boolean;
