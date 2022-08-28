
export interface playListDescribe {
  adType?: number
  algTags?: string[]
  backgroundCoverId?: number
  backgroundCoverUrl?: string
  cloudTrackCount?: 0
  commentCount?: number
  commentThreadId?: string
  copied?: boolean
  coverImgId?: number
  coverImgId_str?: string
  coverImgUrl?: string
  createTime?: number
  creator: {avatarUrl:string,nickname:string,description:string}
  description?: string
  gradeStatus?: string
  highQuality?: boolean
  id?: number
  name?: string
  newImported?: boolean
  opRecommend?: boolean
  ordered?: boolean
  playCount?: number
  privacy?: number
  remixVideo?: boolean
  shareCount?: number
  specialType?: number
  status?: number
  subscribed?: boolean
  subscribedCount: number
  subscribers?: []
  tags?: string[]
  trackCount?: number
  trackIds?: []
  trackNumberUpdateTime?: number
  trackUpdateTime?: number
  tracks?: []
  updateTime?: number
  userId?: number
}

export interface playListItem {
  id: number
}

export interface playListDetailRes {
  playlist: playListDescribe
  privileges: playListItem[]
}


export interface songsItem {
  name?:string
  id: number
  al?: {
    id?:number
    name?:string
    picUrl?:string
    pic?: number
    pic_str?: string
  }
  ar?: [{
    id?:number
    name?:string
  }]
}

export interface playListTrackAllRes {
  privileges: []
  songs: songsItem[]
  sc?: number
}

