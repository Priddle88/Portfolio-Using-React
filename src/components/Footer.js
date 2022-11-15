import githubLogo from "../images/github-logo.png";
import linkedInLogo from "../images/linkedin-icon.png";
import stackLogo from "../images/stack-image.png";

function Footer() {
    // Logos and links to the following social sites
    return (
        <div className="footer">
            <a href="https://github.com/Priddle88"><img className="imgOne" alt="" src={githubLogo} /></a>
            <a href="https://www.linkedin.com/in/parker-riddle-05bb2317a/"><img alt="" src={linkedInLogo} /></a>
            <a href="https://stackoverflow.com/users/17800862/parker-riddle"><img alt="" src={stackLogo} /></a>
        </div>
    )
}

export default Footer;