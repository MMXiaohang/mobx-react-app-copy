import './App.css';
// 2. 导入中间件连接 mobx react 完成响应式变化
import {observer} from 'mobx-react-lite'
import {useStore} from './store/index'

function App() {

  const rootStore = useStore()
  
  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {rootStore.counterStore.count}
      {/* 使用计算属性 */}
      {rootStore.counterStore.filterList.join('-')}
      {/*点击事件触发action函数修改count */}
      <button onClick={rootStore.counterStore.addCount}>+</button>
      <button onClick={rootStore.listStore.addList}>add</button>
    </div>
  );
}

// 包裹App
export default observer(App);
