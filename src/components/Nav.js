import Page from './Project';
import Footer from './Footer';
import React, { useState } from 'react';

// Homepage
function Home() {

    // sets the state of navbar to "About" initially. Changes when the setNav function is called
    const [navbar, setNav] = useState('About');

    return (
        <div className='wholePage'>
            <div className="heading">
                <h1>Parker Riddle</h1>
                <nav>
                    <ul>
                        {/* Changes the page when the link in the navbar is clicked */}
                        <li onClick={() => setNav("About")}>About Me</li>
                        <li onClick={() => setNav("Portfolio")}>Portfolio</li>
                        <li onClick={() => setNav("Contact")}>Contact</li>
                        <li onClick={() => setNav("Resume")}>Resume</li>
                    </ul>
                </nav>
            </div>
            {/* The page changes based off what the user clicks in the links */}
            <div>
                <Page
                    navbar={navbar}
                ></Page>
            </div>
            <div className='footerBlock'>
                <Footer />
            </div>
        </div>
    );

}

export default Home;