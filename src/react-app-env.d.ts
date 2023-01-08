/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string;
  }
}

/**
 * axios返回值
 */
interface IResponse<T = any> {
  code: number;
  [key: string]: T | T[];
}
