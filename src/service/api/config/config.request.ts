/**
 * @file: index.ts
 * @author: xiaoqinvar
 * @desc：常量配置文件
 * @date: 2022-10-29 12:32:32
 */
interface IConfig {
  BASE_URL: string;
  TIME_OUT: number;
}
const config: IConfig = {
  BASE_URL: "",
  TIME_OUT: 5000,
};

const ENV = process.env;
const NODE_ENV = ENV.NODE_ENV;
config.BASE_URL = ENV.REACT_APP_BASE_URL;
export default config;
