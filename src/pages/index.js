import React from "react";
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { Link } from "gatsby";
import sectionStyles from '../components/section.module.css';

import profileImg from '../../public/grad-pic.jpg';
import socialImg from '../../public/follow.png';
import scoreboardImg from '../../public/scoreboard.png';
import storiesImg from '../../public/storybooks-login.png';
import chefhackImg from '../../public/chefhack.png';
import resume from '../../public/Aleksa_Tubic_Resume_v2.1.pdf';

export default function Home() {

  const setTheme = (color) => {
    if (color === 'light') {
      document.documentElement.style.setProperty('--mainColor', '#eaeaea');
      document.documentElement.style.setProperty('--secondaryColor', '#fff');
      document.documentElement.style.setProperty('--borderColor', '#c1c1c1');
      document.documentElement.style.setProperty('--mainText', 'black');
      document.documentElement.style.setProperty('--secondaryText', '#4b5156');
      document.documentElement.style.setProperty('--themeDotBorder', '#24292e');
      document.documentElement.style.setProperty('--previewBg', 'rgb(251, 249, 243, 0.8)');
      document.documentElement.style.setProperty('--previewShadow', '#f0ead6');
      document.documentElement.style.setProperty('--buttonColor', 'black');
    } else if (color === 'blue') {
      document.documentElement.style.setProperty('--mainColor', '#15202B');
      document.documentElement.style.setProperty('--secondaryColor', '#192734');
      document.documentElement.style.setProperty('--borderColor', '#164D56');
      document.documentElement.style.setProperty('--mainText', '#fff');
      document.documentElement.style.setProperty('--secondaryText', '#eeeeee');
      document.documentElement.style.setProperty('--themeDotBorder', '#FFF');
      document.documentElement.style.setProperty('--previewBg', 'rgb(25, 39, 52, 0.8)');
      document.documentElement.style.setProperty('--previewShadow', '#111921');
      document.documentElement.style.setProperty('--buttonColor', '#17a2b8');
    } else if (color === 'green') {
      document.documentElement.style.setProperty('--mainColor', '#606B56');
      document.documentElement.style.setProperty('--secondaryColor', '#515a48');
      document.documentElement.style.setProperty('--borderColor', '#161914');
      document.documentElement.style.setProperty('--mainText', '#fff');
      document.documentElement.style.setProperty('--secondaryText', '#eeeeee');
      document.documentElement.style.setProperty('--themeDotBorder', '#FFF');
      document.documentElement.style.setProperty('--previewBg', 'rgb(81, 90, 72, 0.8)');
      document.documentElement.style.setProperty('--previewShadow', '#2a2f25');
      document.documentElement.style.setProperty('--buttonColor', '#669966');
    } else if (color === 'purple') {
      document.documentElement.style.setProperty('--mainColor', '#46344E');
      document.documentElement.style.setProperty('--secondaryColor', '#382a3f');
      document.documentElement.style.setProperty('--borderColor', '#1d1520');
      document.documentElement.style.setProperty('--mainText', '#fff');
      document.documentElement.style.setProperty('--secondaryText', '#eeeeee');
      document.documentElement.style.setProperty('--themeDotBorder', '#FFF');
      document.documentElement.style.setProperty('--previewBg', 'rgb(29, 21, 32, 0.8)');
      document.documentElement.style.setProperty('--previewShadow', '#2b202f');
      document.documentElement.style.setProperty('--buttonColor', '#8534a3');
    }
  }

  return (
    <React.Fragment>
      <Header title="Hi, I'm Aleksa Tubic" />
      <div className={sectionStyles.s1}>
        <div className={sectionStyles.window}>
          <div className={sectionStyles.navWrapper}>
            <div className={sectionStyles.dotsWrapper}>
              <div id={sectionStyles.dot1} className={sectionStyles.browserDot}></div>
              <div id={sectionStyles.dot2} className={sectionStyles.browserDot}></div>
              <div id={sectionStyles.dot3} className={sectionStyles.browserDot}></div>
            </div>
            <ul id={sectionStyles.navigation}>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className={sectionStyles.leftColumn}>
            <img id={sectionStyles.profilePic} src={profileImg} alt='me' />
            <h5>Personalize Theme</h5>
            <div id={sectionStyles.themeOptionsWrapper}>
              <button id={sectionStyles.lightMode} className={sectionStyles.themeDot} onClick={() => setTheme('light')}></button>
              <button id={sectionStyles.blueMode} className={sectionStyles.themeDot} onClick={() => setTheme('blue')}></button>
              <button id={sectionStyles.greenMode} className={sectionStyles.themeDot} onClick={() => setTheme('green')}></button>
              <button id={sectionStyles.purpleMode} className={sectionStyles.themeDot} onClick={() => setTheme('purple')}></button>
            </div>
            <p id={sectionStyles.settingsNote}>
              *This site was made with
              <br />
              Gatsby.js
            </p>
          </div>
          <div className={sectionStyles.rightColumn}>
            <div id={sectionStyles.previewShadow}>
              <div id={sectionStyles.preview}>
                <div id={sectionStyles.cornerTL} className={sectionStyles.corner}></div>
                <div id={sectionStyles.cornerTR} className={sectionStyles.corner}></div>
                <h3>What I Do</h3>
                <p>I am a recent college graduate and an aspiring software developer.</p>
                <div id={sectionStyles.cornerBR} className={sectionStyles.corner}></div>
                <div id={sectionStyles.cornerBL} className={sectionStyles.corner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={sectionStyles.s2}>
        <div className={sectionStyles.mainContainer}>
          <div className={sectionStyles.aboutWrapper}>
            <div className={sectionStyles.aboutMe}>
              <h4>More about me</h4>
              <p>I build new projects to improve my skillset and learn how to use new technologies.</p>
              <p>While I keep busy with my projects, I apply to jobs in search of a company where I can make an impact.</p>
              <p>My interests inculude: software development, software engineering, web development, and data science.</p>
              <hr />
              <h4>TOP EXPERTISE</h4>
              <p>
                Fullstack developer with primary focus on JavaScript + React:
                <a target='_blank' href={resume}> Download Resume</a>
              </p>
              <div id={sectionStyles.skills}>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>REST API</li>
                  <li>Express</li>
                </ul>
                <ul>
                  <li>GraphQL</li>
                  <li>Postgres</li>
                  <li>Mongo</li>
                  <li>Git</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
            <div className={sectionStyles.socialLinks}>
              <img id={sectionStyles.socialPic} src={socialImg} />
              <h3>Find me on LinkedIn</h3>
              <a target='_blank' href='https://www.linkedin.com/in/aleksa-tubic-90296a13a/'>LinkedIn: Aleksa Tubic</a>
            </div>
          </div>
        </div>
      </div>
      <div className={sectionStyles.s1}>
        <div className={sectionStyles.mainContainer}>
          <h3 id={sectionStyles.s3header}>Some of my past projects</h3>
          <div className={sectionStyles.postWrapper}>
            <div className={sectionStyles.post}>
              <img className={sectionStyles.thumbnail} src={scoreboardImg} />
              <div className={sectionStyles.postPreview}>
                <h6 className={sectionStyles.postTitle}>Scoreboard App</h6>
                <p className={sectionStyles.postIntro}>
                  A web app for a simple scoreboard with a timer
                </p>
                <Link to="/scoreboard">Read More</Link>
              </div>
            </div>
            <div className={sectionStyles.post}>
              <img className={sectionStyles.thumbnail} src={storiesImg} />
              <div className={sectionStyles.postPreview}>
                <h6 className={sectionStyles.postTitle}>Story Posting App</h6>
                <p className={sectionStyles.postIntro}>
                  A platform with Google authentication for posting, editing, and deleting stories
                </p>
                <Link to="/storybooks">Read More</Link>
              </div>
            </div>
            <div className={sectionStyles.post}>
              <img className={sectionStyles.thumbnail} src={chefhackImg} />
              <div className={sectionStyles.postPreview}>
                <h6 className={sectionStyles.postTitle}>ChefHack</h6>
                <p className={sectionStyles.postIntro}>
                  A web app where users can generate custom recipes as well as scrape existing recipes from popular recipe websites
                </p>
                <a target="_blank" href="https://docs.google.com/document/d/1A7jt5c8X4TSYC65VpT6K0Q7qzUSjq_7Eg4dQvDBTPEE/edit">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={sectionStyles.s2}>
        <div className={sectionStyles.mainContainer}>
          <h3 id={sectionStyles.s4Header}>Get In Touch</h3>
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  );
}
