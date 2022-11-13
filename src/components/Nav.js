// import About from './About';
// import Contact from './Contact';
import Resume from './Resume';
import Page from './Page';
// import Portfolio from './Portfolio';
import React, { useState } from 'react';

function Home() {

    const [navbar, setNav] = useState('');

    const test = () => {
        console.log("Hellooooo");
        console.log(navbar);
    }


    return (
        <div>
            <div className="heading">
                <h1>Parker Riddle</h1>
                <nav>
                    <ul>
                        <li onClick={() => setNav("About")}>About Me</li>
                        <li onClick={() => setNav("Portfolio")}>Portfolio</li>
                        <li onClick={() => setNav("Contact")}>Contact</li>
                        <Resume test={test}></Resume>
                    </ul>
                </nav>
            </div>
            <div>
                <Page
                    navbar={navbar}
                ></Page>
            </div>

        </div>
    );

}

export default Home;