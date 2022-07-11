import { makeAutoObservable } from 'mobx'

class CounterStore{
    count = 0;  // 定义数据
    constructor(){
        // 2. 把数据弄成响应式
        makeAutoObservable(this)
    }
    // 定义 action函数（修改数据）
    addCount = () => {
        this.count++;
    }
}

// 实例化 导出给react使用
const counterStore = new CounterStore()
export { counterStore }