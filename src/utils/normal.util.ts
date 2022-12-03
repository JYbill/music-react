/**
 * @time 2022/12/2 16:39
 * @author xiaoqinvar
 * @desc 与业务挂钩的普通工具类🔧
 * @dependence
 */
export default class NormalUtil {
  /**
   * 点击次数超过10w开始显示万，否则原始显示
   * @param count
   */
  static formatByPlayCount(count: number): string {
    if (count >= 100_000) {
      return Math.ceil(count / 1_000) + "万";
    }
    return count.toString();
  }
}
