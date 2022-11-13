import About from './About';

const Page = (props) => {

    if (props.navbar === "About") {
        return <About />
    } else if (props.navbar === "Portfolio") {
        return (
            <p>Making Progress with Portfolio</p>
        );
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