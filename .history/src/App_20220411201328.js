import './App.css';
// 1. 导入 counterStore
import { counterStore } from './store/counter.Store'
// 2. 导入中间件连接 mobx react 完成响应式变化
import {observer} from 'mobx-react-lite'

function App() {
  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {counterStore.count}
      {/* 使用计算属性 */}
      {counterStore.filterList.join('-')}
      {/*点击事件触发action函数修改count */}
      <button onClick={counterStore.addCount}>+</button>
      <button onClick={counterStore.addList}>add</button>
    </div>
  );
}

// 包裹App
export default observer(App);
