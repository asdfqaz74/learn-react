import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/37-pizza';

// console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;
