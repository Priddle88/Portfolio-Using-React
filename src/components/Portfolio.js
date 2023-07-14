// Importing all the images I will need
import passwordImage from "../images/screenshot-password.png";
import weatherImage from "../images/screenshot-weatherdashboard.png";
import workProfImage from "../images/Work-Profile-Screenshot copy.png";
import schedulerImage from "../images/screenshot-scheduler.png";
import noteImage from "../images/screenshot-note-taker.png";
import quizImage from "../images/screenshot-quiz.png";
import monkeyImage from "../images/monkeys-pic.png";
import pjTwo from "../images/screenshot-project-2.png";
import githubLogo from "../images/github-logo.png";
import venue from "../images/venue.png";

function Portfolio() {

    // Lists the portfolios
    return (
        <section>
            <div className="folio">
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://dpk5e7-team-handbook.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <h3>
                                Team Handbook
                            </h3>
                        </a>
                        <a href="https://github.com/dpk5e7/shakespeares-monkeys" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://dpk5e7-team-handbook.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={monkeyImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://alecschro13.github.io/Venue-Search-Project1/" target="_blank" rel="noopener noreferrer">
                            <h3>
                                Venue Search
                            </h3>
                        </a>
                        <a href="https://github.com/AlecSchro13/Venue-Search-Project1" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://alecschro13.github.io/Venue-Search-Project1/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={venue} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                            <h3>Password Generator</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Password-Generator" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={passwordImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                            <h3>Weather Dashboard</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Weather-Dashboard" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={weatherImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://github.com/Priddle88/Work-Profile-Generator" target="_blank" rel="noopener noreferrer">
                            <h3>Work Profile Generator</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Work-Profile-Generator" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://github.com/Priddle88/Work-Profile-Generator" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={workProfImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                            <h3>Work Day Scheduler</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={schedulerImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://note-taker-app-pr.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <h3>Note Taker</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Note-Taker-App" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://note-taker-app-pr.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={noteImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://priddle88.github.io/Quiz/" target="_blank" rel="noopener noreferrer">
                            <h3>Quiz</h3>
                        </a>
                        <a href="https://github.com/Priddle88/Quiz" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>
                    <a href="https://priddle88.github.io/Quiz/" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={quizImage} /></a>
                </div>
                <div className="lilBlock">
                    <div className="portTitle">
                        <a href="https://favorite-band-prject2.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                            <h3>Favorite Band Project</h3>
                        </a>
                        <a href="https://github.com/AlecSchro13/Venue-Search-Project1" target="_blank" rel="noopener noreferrer"><img alt="" className="littleLogo" src={githubLogo} /></a>
                    </div>

                    <a href="https://favorite-band-prject2.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                        <img alt="" className="smApp"
                            src={pjTwo} /></a>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;