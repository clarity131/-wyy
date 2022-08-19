export interface Ibanner {
  imageUrl: string;
  encodeId: number;
  scm: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  exclusive: boolean
}
export interface bannerRes {
  banners: Ibanner[]
}