import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';

const Page = (props) => {

    if (props.navbar === "About") {
        return <About />
    } else if (props.navbar === "Portfolio") {
        return <Portfolio />
    } else if (props.navbar === "Contact") {
        return (
            <p>Making Progress. Now i need to add more script</p>
        );
    } else if (props.navbar === "Resume") {
        return < Resume />
    } else {
        return (
            <p> nothing yet</p>
        );
    }

}

export default Page;