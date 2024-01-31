import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/36.catch-mole';

console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;
