import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()
  // 第一个参数 指明方法，默认情况下是大写，第三个参数是同步还是异步，传入true表明是异步
  request.open(method.toLowerCase(), url, true)

  request.send(data)
}
