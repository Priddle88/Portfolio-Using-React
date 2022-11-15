// Importing all the images I will need
import passwordImage from "../images/screenshot-password.png";
import weatherImage from "../images/screenshot-weatherdashboard.png";
import workProfImage from "../images/Work-Profile-Screenshot copy.png";
import schedulerImage from "../images/screenshot-scheduler.png";
import noteImage from "../images/screenshot-note-taker.png";
import quizImage from "../images/screenshot-quiz.png";
import pjTwo from "../images/screenshot-project-2.png";
import githubLogo from "../images/github-logo.png";

function Portfolio() {

    // Lists the portfolios
    return (
        <section>
            <div className="folio">
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Password-Generator/" >
                            <h3>Password Generator</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Password-Generator"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Password-Generator/" >
                        <img alt="" className="smApp"
                            src={passwordImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Weather-Dashboard/"
                        >
                            <h3>Weather Dashboard</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Weather-Dashboard"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Weather-Dashboard/" >
                        <img alt="" className="smApp"
                            src={weatherImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://github.com/Priddle88/Work-Profile-Generator"
                        >
                            <h3>Work Profile Generator</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Work-Profile-Generator"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://github.com/Priddle88/Work-Profile-Generator" >
                        <img alt="" className="smApp"
                            src={workProfImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Work-Day-Scheduler/"
                        >
                            <h3>Work Day Scheduler</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Work-Day-Scheduler"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Work-Day-Scheduler/" >
                        <img alt="" className="smApp"
                            src={schedulerImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://note-taker-app-pr.herokuapp.com/"
                        >
                            <h3>Note Taker</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Note-Taker-App"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://note-taker-app-pr.herokuapp.com/" >
                        <img alt="" className="smApp"
                            src={noteImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Quiz/">
                            <h3>Quiz</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Quiz"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Quiz/" >
                        <img alt="" className="smApp"
                            src={quizImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://favorite-band-prject2.herokuapp.com/login"
                        >
                            <h3>Favorite Band Project</h3>
                        </a>
                        <a href="https://github.com/AlecSchro13/Venue-Search-Project1"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>

                    <a href="https://favorite-band-prject2.herokuapp.com/login" >
                        <img alt="" className="smApp"
                            src={pjTwo} /></a>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;