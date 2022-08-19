import { personaLizedRes, PromiseRes } from 'types'
import { bannerRes } from 'types/banner'
import request from './index'

// 获取轮播图
export const banner = (): Promise<bannerRes> => request.get('/banner')

export const personaLized = (params = { limit:10 }):PromiseRes<personaLizedRes[]> => request.get('/personalized', { params })
