import { personaLizedRes, PromiseRes } from 'types'
import { bannerRes } from 'types/banner'
import { ILyricRes } from 'types/music'
import { playListDetailRes, playListTrackAllRes } from 'types/playListDetail'
import { searchMusicRes } from 'types/searchMusic'
import request from './index'

// 获取轮播图
export const banner = (): Promise<bannerRes> => request.get('/banner')

//获取推荐歌单
export const personaLized = (params = { limit:20 }):PromiseRes<personaLizedRes[]> => request.get('/personalized', { params })

//获取歌单详情
export const playListDetail = (params:{ id:string }):Promise<playListDetailRes> => request.get('/playlist/detail',{ params })

//获取歌单所有歌曲 
export const playListTrackAll = (params:{ id:string, limit?:number, offset?:number }):Promise<playListTrackAllRes> => request.get('/playlist/track/all',{ params })

export const lyric = (params:{ id:string}):Promise<ILyricRes> => request.get('/lyric',{ params })

export const searchMusic = (params:{ keywords:string}):PromiseRes<searchMusicRes> => request.get('/cloudsearch',{ params })

//登录
// export const login = () => request.get('/register/anonimous')