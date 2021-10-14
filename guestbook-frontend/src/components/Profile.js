import React from 'react'; 
import profile from '../img/nighthawks.jpeg';
import { Link } from 'react-router-dom';

function Profile() {
    return(
        <div> 
            <div class="bg-white rounded-xl max-w-xl mx-auto p-6 my-9 shadow flex">
                <div class="flex-shrink-0">
                    <img class="rounded-full h-24 w-24" src={profile} alt="fav painting"></img>
                </div>
                <div class="flex-shrink-0 ml-8">
                    <div class="text-3xl font-semibold text-gray-500">
                        Deokhaeng Lee
                    </div>
                    <div class="font-light text-xl">
                        Undergraduate CS @ Duke University
                    </div>
                    <div class="font-light flex mt-2">  
                        <div class="flex-shrink-0 mr-3 hover:underline hover:text-blue-500">
                            <Link to="/">
                                Messageboard 
                            </Link>
                        </div>
                        <div class="flex-shrink-0 mr-3 hover:underline hover:text-blue-500">
                            <Link to="/about">
                                About
                            </Link>
                        </div>
                        <div class="flex-shrink-0 mr-3 hover:underline hover:text-blue-500">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default Profile;

