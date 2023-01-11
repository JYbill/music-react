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

  /**
   * lyric字符串转lyric信息数组
   * @param lyricStr
   */
  static lyric2Array(lyricStr: string) {
    const lyricInfoList = [];
    const lyricList = lyricStr.split("\n");
    for (const str of lyricList) {
      // 过滤无效字符串
      if (str.trim().length < 1) continue;

      // 歌词
      const contentIndex = str.indexOf("]") + 1;
      const content = str.slice(contentIndex);

      // 时间
      const regx = /\[(\d{2}):(\d{2}).(\d{2,3})]/;
      const regxRes = regx.exec(str);
      // 正则解析失败
      if (!regxRes) {
        console.error("lyric2Array正则解析错误", str);
        return [];
      }
      const minute = regxRes[1];
      const minuteNum = parseInt(minute) * 60 * 1000;
      const second = regxRes[2];
      const secondNum = parseInt(second) * 1000;
      const ms = regxRes[3];
      const msNum = parseInt(ms.padEnd(4, "0"));
      const time = minuteNum + secondNum + msNum;
      // console.log(minute, minuteNum, second, secondNum, ms, msNum, time); // debug
      lyricInfoList.push({
        time,
        content,
      });
    }
    return lyricInfoList;
  }
}
