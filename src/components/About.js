import profPic from "../images/portfolio-pic.jpg"

function About() {

    return (
        <div>
            <h2 className="aboutTitle">About Me</h2>
            <div className="aboutBox">
                <img className="pic" alt="Portfolio Pic" src={profPic} />
                <p className="aboutContent"> I was born in San Diego but moved to Colorado when I was a youngster. I have moved back and forth ever since. I
                    I have sent the majority in Colorado, but is is hard to pick a favorite. I have four brothers and a sister, and we all love technology in some way.
                    Well tech is all around us.
                    My interest in coding began in high school. I found a site called CodeAcademy, which offered free classes in learning how to
                    code.In my senior year of high school, I was able to take a computer programming course that covered html,
                    css, and java.
                    I took a break for a couple of years until I started this fullstack development program with the University of Denver.
                </p>
            </div>
        </div>
    );
}

export default About;