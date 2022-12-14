// imports the email validator from the helpers file
import { validateEmail } from "./utils/helpers";

// Function to handle the Contact page
function Contact() {

    // Event listener function that handles the validation of the name, email, and message
    const formSubmit = (event) => {
        event.preventDefault();

        const newName = document.querySelector('#name').value;
        const newEmail = document.querySelector('#email').value;
        const newMessage = document.querySelector('#message').value;

        // Validate to make sure that the name, email, and message and not empty and that the email is valid
        if (newName === "") {
            alert("Need to add a name");
        }
        if (newEmail === "") {
            alert("Need to add an email");
        } else if (!validateEmail(newEmail)) {
            alert("Invald email address");
        }
        if (newMessage === "") {
            alert("Need to add a message");
        }

    }

    //Returns the Contact page
    return (
        <section className='contactSection'>
            <h2>Contact Me</h2>
            <form onSubmit={formSubmit} className='contactForm'>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea type="name" className="form-control" id="message" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default Contact;