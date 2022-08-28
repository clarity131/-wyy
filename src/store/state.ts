import { IState } from '../../types/index'

export default <IState> {
  playList:[{
    name:'暂无歌曲',
    id: 0,
    al: {
      id:0,
      name:'',
      picUrl:'string',
      pic: 0,
      pic_str: ''
    }
  }],
  playListIdx: 0,
  musicUrl: '',
  musicBoolean: false,
  musicShow: false,
  currentTime:0, //当前时间
  duration:0 //歌曲时长
}