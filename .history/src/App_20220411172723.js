import { counterStore } from './store/counter'
import './App.css';
// 导入中间件连接 mobx react 完成响应式变化
import {observer} from 'mobx-react-lite'

function App() {
  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {counterStore.count}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

export default observer(App);
