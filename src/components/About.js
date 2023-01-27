// Imports the picture I have of myself
import profPic from "../images/portfolio-pic.jpg"

function About() {

    // Return the About Me page
    return (
        <div>
            <h2 className="aboutTitle">About Me</h2>
            <div className="aboutBox">
                <img className="pic" alt="Portfolio Pic" src={profPic} />
                <div className="aboutParagraphs">
                <p className="aboutContent"> 
                &nbsp;&nbsp;&nbsp;&nbsp;My previous work experience is mainly focused on sales and customer service. In high school, I started dabbling in Javascript and HTML/CSS through codeacademy. That led to me taking a class in computer programming during my senior year.
                </p>
                <p className="aboutContent"> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                Due to a medical condition (that is no longer present), I left midway through my first year of college. Which led me directly into the sales jobs that I mentioned earlier. I chose sales because, at the time, I was having a hard time forming complete thoughts due to the medical condition. I decided that I needed to talk as much as possible until I felt that I had surpassed my previous mental state. That was eight years ago. I was declared fully healed a couple of years ago, which is what brought me back to my passion in coding.
                </p>
                <p className="aboutContent"> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                I recently completed a Full Stack Web Development Bootcamp through the University of Denver with a 4.0 grade point average (97%), which helped tremendously with gaining knowledge in front-end and back-end development. I had previous experience with HTML and Javascript but the course showed me that I was just scraping the surface. I was taught about using React and databases like MongoDB, simplified CSS with Bootstrap, created logins and used API's.
                 </p>
                 <p className="aboutContent">
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 To get more of an idea of what I learned, you can check out my work by clicking on the Portfolio tab at the top of the page. I also attached a link on the Resume page where you can download my resume to see my past work exerience. 
                </p>
                </div>
            </div>
        </div>
    );
}

export default About;