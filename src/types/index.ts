// 为了让 method 只能传入合法的字符串，我们定义一种字符串字面量类型 Method
export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

// 定义axios 入参 config的 类型
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: string
  params?: any
}
