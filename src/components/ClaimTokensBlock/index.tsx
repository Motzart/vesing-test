import React, { useState } from 'react';
import { NoConnected } from "./NoConnected";
import { Connected } from "./Connectes";

export const ClaimTokensBlock = () => { 
    const [registered, setКegistered] = useState(true);

return(
    <div>
        {registered
        ? <NoConnected />
        : <div>
           <Connected />
         </div>
        }
    </div>
   )
};