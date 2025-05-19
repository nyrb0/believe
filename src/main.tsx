import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        {/* <div className='df jcc aic' style={{ height: '100vh' }}>
            <div style={{ background: '#FF4C00', height: '30vh', width: '30vw', borderRadius: 10 }}></div>
        </div> */}
    </StrictMode>,
);
