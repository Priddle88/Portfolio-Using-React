function Resume(props) {

    // Returns the Resume page
    return (
        <section className="resumeSection">
            <div className="resumeBox">
                <h2>Resume</h2>
                <p>Download my <a href="/assets/Resume-22.pdf" alt="Resume" download>Resume</a></p>
            </div>
            <div className="proficientBox">
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML & CSS</li>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Using Flex</li>
                    </ul>
                    <li>Javascript</li>
                    <li>APIs</li>
                    <li>React</li>
                </ul>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB & Mongoose</li>
                    <li>Sequelize</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;