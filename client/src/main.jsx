import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProviderProducts } from './context/contextProducts';
import { ProviderFilters } from './context/contextFilters';
import { ProviderCart } from './context/contextCart';
import { ProviderUser } from './context/contextUser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderProducts>
      <ProviderFilters>
        <ProviderCart>
          <ProviderUser>
            <App />
          </ProviderUser>
        </ProviderCart>
      </ProviderFilters>
    </ProviderProducts>
  </React.StrictMode>
);
