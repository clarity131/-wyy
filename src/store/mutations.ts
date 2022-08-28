import { IState } from "types";
import { songsItem } from "types/playListDetail";

export default {
  urlUpdate(state: IState, i:number):void {
    let id
    if (state.playList[i]) {
      id = state.playList[i].id
      state.playListIdx = i
    } else {
      id = state.playList[0].id
      state.playListIdx = 0
    }
    state.musicUrl = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    state.musicBoolean = true
  },
  updateVal (state: IState,list:songsItem[]):void {
    state.playList = list
  },
  show(state: IState,val: boolean):void {
    state.musicBoolean = val
  },
  changeMusicShow(state: IState,val: boolean):void {
    state.musicShow = val
  },
  changeCurrentTime(state: IState,time:number) {
    state.currentTime = time
  },
  updateDuration (state: IState,time:number) {
    state.duration = time
  }
}