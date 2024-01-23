// new jsx tranform
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Weather from './../exercises/02-widget/component/Weather';

function App() {
  return <Weather />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
