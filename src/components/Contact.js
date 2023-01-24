// Contact page
function Contact() {

    // Sends an email based off user input
    return (
        <section className='contactSection'>
            <h2>Contact Me</h2>
            <form action="https://formsubmit.co/852b900995d7c9a59908c25e302f0175" method="POST" className='contactForm'>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="name" name="name" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea type="name" name="comments/questions" className="form-control" id="message" ></textarea>
                    <input type="hidden" name="_subject" value="New submission!"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default Contact;