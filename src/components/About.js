function About() {

    const showAbout = () => {
        console.log("Hellooooo");
        document.querySelector('.folio').classList.add('remove');
        document.querySelector('.about').classList.remove('remove');

    };

    return (
        
        <li onClick={showAbout}>About Me</li>
    );
}

export default About;