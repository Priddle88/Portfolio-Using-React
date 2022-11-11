import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

function Home() {

    const test = () => {
        console.log("Hellooooo");
    }

    return (
        <div>
            <div className="heading">
                <h1>Parker Riddle</h1>
                <nav>
                    <ul>
                        <About />
                        <Portfolio />
                        <Contact />
                        <Resume test={test}></Resume>
                    </ul>
                </nav>
            </div>

            <div>
                <h2 className='about remove'>
                    Testing if I can remove this easily.
                </h2>
                <h2 className='folio remove'>
                    Something else
                </h2>
            </div>

        </div>
    );

}

export default Home;