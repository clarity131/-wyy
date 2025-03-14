import axios from "axios";
// const cookie = '_ntes_nnid=0e69afbea8d5e8ba53d1ec266707f47c,1660896561637; _ntes_nuid=0e69afbea8d5e8ba53d1ec266707f47c; NMTID=00OcwMvESB4xZ4zCUb5jFEUFl4d8xcAAAGCtSZZDw; WM_NI=J49Qx8Xl1Gnsyf7EJs4VqOhOqiSlo4hl5/5J1qb+MAd8IYRcrr9k0+0BidWJZaGp5Ucw0C1pPiSqVqcUYvUgI2R2KqiFgcGhzgS+tVYIFldcbbXTGsvfRQdVvOqbsZmzNDk=; WM_TID=fpQtJn8BVOBEEBVQURfETIpiCWgi3K2v; WM_NIKE=9ca17ae2e6ffcda170e2e6ee92c4688bae99a6f55ab6968bb2d15f869b9a83d4548eaca6b4c23baaed819bf52af0fea7c3b92a8aecf7b2fb349cb4ffa8ed79bbbaf9a6c979f88abfb0eb45b3b79d8dee40acb4fbd0b842f3afaeccd04ba8e887bad169b2aef78cb321f49ea785d6429abf8991b85fa1a900a4b47c94b79d92d57ba18b9797d86d8bee9ed3ca7bab9aa984c664bab99dccf75e9b978a8de769a2be98b5c679b6ba9eb2e75eb691bf83f252afa682a5ea37e2a3; websiteCurrentUrl="http://sf.163.com/notfound"; pageContentBiz=GONG_GONG; pageContentBizProduct=""; abH=0; abTest=0; wyy_uid=f85d642c-af19-4e46-bec3-fa98d8fc2d37; _iuqxldmzr_=33; JSESSIONID-WYYY=A9CY5On9PUU6wnvtXG\gOB454NgKl2+53yAOBBQs3B+4/S7Q9jmRm0b2QHPsvnbgBG//gCElpcO6mvbg8WMbzo3I/EQPORzK3q\WEK+Qc2w+/+ii7vVAsr9Nhlyqzgkh6CmVsy1F1fuCcYds7jhN25VCXjGOcw6SO6EocbcUG1sUhiCa:1660903459186; __snaker__id=GQHTxRSG6muQt0dv; gdxidpyhxdE=VzDP/HPQ7+LYztDvCTGHXxqtWR9lk19XEr6Kkm+gqpsis1boGR4hSWoXqer1b+etde1Ze7CtfTH\JMspj0eO1XpLS40CT0NG+b4zzpjgdfAEzUUcVYmQjqWbe+6Ar9IXwxGxk+pubN3/wrXsoQx5CVunnA9aDEhDuteBQZDHvKeO7Y5u:1660902564969; _9755xjdesxxd_=32; YD00000558929251:WM_NI=mE6PBbMLS8bCJ4od9CIdnqVEg6T/NxJm6UJ3dPzj1tclG+FMIJBnk3+87uFwnEvARp0wUG9oJeqWYMnn5PCAE+m/33MzLF/q6D5q0ldYnvK+qKR534jFlVJY6rlV2ViOTU4=; YD00000558929251:WM_TID=XsjB9DjHMzRAAQFFFQfRWM4mOjUbhByc; YD00000558929251:WM_NIKE=9ca17ae2e6ffcda170e2e6ee8adb69918bb987e77491968ab3c85b979e8b87c5598be7fdb0ed5aa3b58b8be72af0fea7c3b92aaf9bfab1c16a8f949dd9e1498aeca185bc498bbca292d54fa5ea9cd0cd748ab3fab6c939a890b68bb480a1b489ccc5478b968e8fea39e9e8f996c57dae9bbaa2d17cf4a99ba8bc658abbbfb8dc47aeb2fbb1c24b87f5a3d0b2398fa684a7ae7bf69cfb92b368a887a297ca21b3959ed6b240aa9aa4b7c953f6aea4b7b15eab919cb6b737e2a3; ntes_kaola_ad=1; NTES_P_UTID=kB3DuSgZiTtTjdZ9xURBQ4e1RCNx2N9E|1660901759; NTES_SESS=hVHcmDxFDuzLkgDUHS1jw0oz_rukwGD3Z5pJ5oy2xtotKp8LKuA4P3o2dU3NHrhStaHCpsn8.WcvUf2oBOpLTWeJIFXWquiEuq_nXxzvQoIkn45lBQkXDKoHfjxVGjRXkxE12BrPd6YEaVa6zOePt7uxRo0P.CguYtExVGva5V2Ab1rEJFw94pLz_2JqDhukJKq8rCMzIx.pNd0fpGxhJfu9r1io_CoDP; S_INFO=1660901759|0|1&65##|m17689768504; P_INFO=m17689768504@163.com|1660901759|0|music|00&99|han&1660901724&music#han&460100#10#0#0|176504&1|music&neteasemail_android&mail163_qrcode|17689768504@163.com; __remember_me=true; __csrf=027fe08452d289b247ac221c65bdfbb9; MUSIC_U=76de3df74e9a5c4d86b8b0e21d6e38db872d151d09456cc64a3d1f248cbb249e993166e004087dd32446d447f258f2d7128b60649c86d139d2f72ccc08f6a5e3b312c6092ec5c18ba0d2166338885bd7'
 
const request = axios.create({
  baseURL:'http://localhost:3000',
  timeout: 10000,
  withCredentials: true, // 跨域请求是否携带cookie
  headers: {
    "content-type":"application/json",
    // "Authorization": cookie
  }
})
interface Ierr {
  response: {status: number};
  message: string
}
function code (err: Ierr) {
  switch (err.response.status) {
    case 400 :
      err.message = '请求错误'
      break
    case 401 :
      err.message = '未授权，请重新登陆'
      break
    case 403 :
      err.message = '拒绝访问2'
      break
    case 404 :
      err.message = '请求地址错误'
      break
    case 408 :
      err.message = '请求超时'
      break
    case 500 :
      err.message = '服务器内部错误'
      break
    case 501 :
      err.message = '服务器未实现'
      break
    case 502 :
      err.message = '网关错误'
      break
    case 503 :
      err.message = '服务不可用'
      break
    case 504 :
      err.message = '网关超时'
      break
    case 505 :
      err.message = 'HTTP版本不支持'
      break
    
    default:
  }
  return err
}
request.interceptors.request.use((config) => {
  return config
}, (err) => {
  if (err && err.response) {
    err = code(err)
  }
  Promise.reject(err)
})

request.interceptors.response.use((res) => res.data, (err) => {
  if (err && err.response) {
    err = code(err)
  }
  Promise.reject(err)
})
export default request