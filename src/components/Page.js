import About from './About';
import Portfolio from './Portfolio';

const Page = (props) => {

    if (props.navbar === "About") {
        return <About />
    } else if (props.navbar === "Portfolio") {
        return <Portfolio />
    } else if (props.navbar === "Contact") {
        return (
            <p>Making Progress. Now i need to add more script</p>
        );
    }

    return (

        <p> nothing yet</p>
    );
}

export default Page;