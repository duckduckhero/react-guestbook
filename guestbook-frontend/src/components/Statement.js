import React from 'react';

function Statement({ children }){
    return(
        <div class="bg-white rounded-xl max-w-xl mx-auto p-6 my-9 shadow flex">
            {children}
        </div>
    );
}

export default Statement;