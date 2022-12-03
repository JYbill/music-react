/**
 * @time 2022/12/2 16:37
 * @author xiaoqinvar
 * @desc 业务相关图片工具类🔧
 * @dependence
 */
export default class ImgUtil {
  /**
   * 设置图片大小转换为url链接
   * @param url
   * @param w
   * @param h
   */
  static resize(url: string, w: number, h = w) {
    return `${url}?param=${w}y${h}`;
  }
}
