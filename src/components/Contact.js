function Contact() {

    // const [navbar, setNav] = useState('');


    const showContact = (event) => {
        console.log(event.target.value)
    }

    return (
        <li value={1} onClick={showContact}>Contact</li>
    );
}

export default Contact;