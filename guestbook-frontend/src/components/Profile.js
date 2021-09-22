import React from 'react'; 
import profile from '../img/nighthawks.jpeg';

function Profile() {
    return(
        <div> 
            <div class="bg-white rounded-xl max-w-xl mx-auto p-6 my-9 shadow flex">
                <div class="flex-shrink-0 bg-pink-300">
                    <img class="rounded-full h-24 w-24" src={profile} alt="fav painting"></img>
                </div>
                <div class="bg-blue-300">
                    hello nice to meet you my name is deokhaeng lee
                </div>

            </div>

        </div>
    );
}

export default Profile;

