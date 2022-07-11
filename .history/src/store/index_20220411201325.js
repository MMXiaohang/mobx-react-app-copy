// 组合子模块
// 封装统一导出的供业务使用的方法
import React from 'react'
import {ListStore} from './list.Store'
import {CounterStore} from './counter.Store'

// 1.声明一个rootStore
class RootStore{
    constructor(){
        // 对子模块进行操作，实例化子模块类
        this.counterStore = new CounterStore()
        this.listStore = new ListStore()
    }
}

// 实例化操作
const rootStore = new RootStore()
// 使用 context机制完成统一方法封装
const context = React.createContext(rootStore)
// 该方法作用：通过useContext拿到rootStore实例对象，然后返回，只要在业务组件中调用useStore()就会得到一个RootStore实例对象
const useStore = () => React.useContext(context)

export {useStore}