import { songsItem } from "./playListDetail"

export interface ManageResult<T = {}> {
  code: number,
  result: T
}

export type PromiseRes<T = {}> = Promise<ManageResult<T>>

export interface personaLizedRes {
  id: number
  name: string
  highQuality: boolean
  canDislike: boolean
  picUrl: string
  playCount: number
  trackCount: number
  trackNumberUpdateTime: number
  type: number
}

// vuex state
export interface IState {
  playList: songsItem[]
  musicUrl: string
  playListIdx: number
  musicBoolean: boolean
  musicShow: boolean
  currentTime: number
  duration: number
}