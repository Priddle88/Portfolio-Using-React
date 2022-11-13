import passwordImage from "../images/screenshot-password.png";
import weatherImage from "../images/screenshot-weatherdashboard.png";
import workProfImage from "../images/Work-Profile-Screenshot copy.png";
import schedulerImage from "../images/screenshot-scheduler.png";
import noteImage from "../images/screenshot-note-taker.png";
import quizImage from "../images/screenshot-quiz.png";
import pjTwo from "../images/screenshot-project-2.png";

function Portfolio() {

    return (
        <section>
            <div className="folio">
                <div className="lilBlock">
                    <a href="https://priddle88.github.io/Password-Generator/" >
                        <h3>Password Generator</h3>

                        <img alt="" className="smApp"
                            src={passwordImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://priddle88.github.io/Weather-Dashboard/" >
                        <h3>Weather Dashboard</h3>
                        <img alt="" className="smApp"
                            src={weatherImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://github.com/Priddle88/Work-Profile-Generator" >
                        <h3>Work Profile Generator</h3>
                        <img alt="" className="smApp"
                            src={workProfImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://priddle88.github.io/Work-Day-Scheduler/" >
                        <h3>Work Day Scheduler</h3>
                        <img alt="" className="smApp"
                            src={schedulerImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://note-taker-app-pr.herokuapp.com/" >
                        <h3>Note Taker</h3>
                        <img alt="" className="smApp"
                            src={noteImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://priddle88.github.io/Quiz/" >
                        <h3>Quiz</h3>
                        <img alt="" className="smApp"
                            src={quizImage} /></a>
                </div>
                <div className="lilBlock">
                    <a href="https://favorite-band-prject2.herokuapp.com/login" >
                        <h3>Favorite Band Project</h3>
                        <img alt="" className="smApp"
                            src={pjTwo} /></a>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;