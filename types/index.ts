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