export interface ILyricRes {
  code?: number
  klyric?: {
    lyric: string
    version: number
  }
  lrc: {
    lyric: string
    version: number
  }
  romalrc?: {
    lyric: string
    version: number
  }
  tlyric?: {
    lyric: string
    version: number
  }
}