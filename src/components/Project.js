import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

const Page = (props) => {

    // Controls the navigation bar in the header
    if (props.navbar === "About") {
        return <About />
    } else if (props.navbar === "Portfolio") {
        return <Portfolio />
    } else if (props.navbar === "Contact") {
        return <Contact />
    } else {
        return < Resume />
    }

}

export default Page;