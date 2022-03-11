/*
 * @Author: zml
 * @Date: 2022-03-11 19:14:52
 * @LastEditTime: 2022-03-11 19:18:34
 */
import { ApiDetail } from "./detailType"

export type ConfigApi = {
  /** 接口的url */
  url: string,
  /** query请求参数类型 */
  paramsType: string,
  /** 请求体的参数类型 */
  dataType: string,
  /** 返回的结果类型 */
  returnType: string,
  /** 请求方式 */
  method: string,
  /**
   * 参数的预处理方法
   */
  paramsHandle: (paramsType?: string, dataType?: string, params?: string, data?: string) => string,
  /**
   * 请求参数的预处理
   */
  requestDataHandle: (paramsType?: string, dataType?: string, params?: string, data?: string) => string,
  /** 内置的路径预处理函数，处理路由传参 */
  urlHandle: (url: string, params?: string) => string,
  /** 接口的详情, yapi的接口详情的数据 */
  apiDetail: ApiDetail<'obj'> 
}

export type AsConfig = {
  /** 项目id */
  projectId: string,
  /** 项目token */
  token: string,
  /** yapi的mock地址，写上域名就够了，例如：http://yapi.xxxxxxx.com */
  mockUrl?: string,
  /** 引入的model */
  importModel?: string[],
  /** 接口集合，通过yapi上的tag和分类来区分集合,是数组的时候识别为tag，字符串的时候识别为分类 */
  collections?: Record<string, string[]>,
  /** 生成请求的目录 */
  outPath?: string,
  /** 生成的方法模版` */
  serviceTemplate?: (api: ConfigApi) => string,
  /** 类型文件中引入的model */
  importTypeModel?: string[],
  /** 返回的参数解析类型的节点，默认是data节点开始解析 */
  typeRootNode?: string,
  /**
   * 生成的文件的拓展名，分为.js 和 .ts
   * @default .ts
   */
  extendName?: '.js' | '.ts',
  /** 是否需要生成ts类型, 默认为true */
  tsType?: boolean,
  /**
   * 类型的导出形式，分为 declare 和 export两种
   * @default export
   */
  exportType?: 'export' | 'declare',
  /** 类型的命名空间 */
  typeNamespace?: string,
  /** 默认的接口分类 */
  defaultApisType?: string,
}