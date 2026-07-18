import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [view, setView] = useState('login'); // 'login' or 'register'

  return (
    <>
      {view === 'login' ? (
        <Login onSwitchView={() => setView('register')} />
      ) : (
        <Register onSwitchView={() => setView('login')} />
      )}
    </>
  );
}

export default App;
