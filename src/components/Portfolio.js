function Portfolio() {

    const showPortfolio = () => {
        console.log("Hellooooo");
        document.querySelector('.about').classList.add('remove');
        document.querySelector('.folio').classList.remove('remove');
    };

    return (
        <li onClick={showPortfolio}>Portfolio</li>
    );
}

export default Portfolio;