/**
 * @Description: 播放工具类
 * @Author: 小钦var
 * @Date: 2023/1/8 16:58
 */
import { IArtist } from "@/service/api/module/player.service";

export default class PlayerUtil {
  /**
   * 根据歌手列表获取歌手字符串
   * @param artistList
   */
  static formatArtist(artistList: IArtist[]) {
    let name = "";
    for (const [index, artist] of artistList.entries()) {
      if (index === artistList.length - 1) {
        name += artist.name;
        break;
      }
      name += artist.name + "/";
    }
    return name;
  }
}
