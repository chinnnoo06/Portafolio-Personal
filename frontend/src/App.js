import './App.css';
import { CursorTrail } from './components/layout/CursorTrail';
import { MisRutas } from './routers/MisRutas';

function App() {
  return (
    <div className='layout relative'>
      <CursorTrail />
      <MisRutas />
    </div>
  );
}

export default App;
