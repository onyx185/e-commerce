import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// remove app.jsx and use home page as entry
// collection preview in shop page, shop 
/* <shop page>
      <collection-preview>
          shopData.items.(
            <collection-item/>
          )

      </collection-preview/>
    <shop page/>

    https://crwn-clothing-online.netlify.app/shop/hats
*/
