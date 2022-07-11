import './App.css';
// 2. 导入中间件连接 mobx react 完成响应式变化
import {observer} from 'mobx-react-lite'
import {useStore} from './store/index'

function App() {

  // 解构赋值到store实例对象就可以了，防止破坏响应式，用哪个store就解构哪个
  const {counterStore, listStore} = useStore()
  
  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {counterStore.count}
      {/* 使用计算属性 */}
      {counterStore.filterList.join('-')}
      {/*点击事件触发action函数修改count */}
      <button onClick={counterStore.addCount}>+</button>
      <button onClick={listStore.addList}>add</button>
    </div>
  );
}

// 包裹App
export default observer(App);
