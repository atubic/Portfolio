import { Link } from 'gatsby';
import React from 'react';
import sectionStyles from '../components/section.module.css';
import storiesImg from '../../public/stories.png';
import publicStoriesImg from '../../public/storybooks-public.png';
import loginImg from '../../public/storybooks-login.png';
import editImg from '../../public/storybooks-edit.png';

export default function Scoreboard() {
  return (
    <>
      <div className={sectionStyles.navWrapper}>
        <Link to="/">
          <div className={sectionStyles.dotsWrapper}>
            <div id={sectionStyles.dot1} className={sectionStyles.browserDot}></div>
            <div id={sectionStyles.dot2} className={sectionStyles.browserDot}></div>
            <div id={sectionStyles.dot3} className={sectionStyles.browserDot}></div>
          </div>
        </Link>
      </div>
      <div className={sectionStyles.s2}>
        <div className={sectionStyles.mainContainer}>
          <br />
          <div className={sectionStyles.imgContainer}>
            <img className={sectionStyles.exampleImg} src={storiesImg} />
          </div>
          <h3>Story Posting App</h3>
          <p>
            This was a project I started back in November 2020 when I was learning backend technologies.
            It's a very simple web app where users can post stories with a title. They can also choose
            whether to make the stories public or private.
          </p>
          <p>
            It also allows the user to edit their story or delete their story. A user cannot edit or delete
            the story of another user. Users need to login to the app in order to use it. The app uses
            Google OAuth to authenitcate and login a user.
          </p>
          <p>
            There is also a sliding menu on the left that allows users to switch from viewing public stories,
            their dashboard, and logging out. The app was deployed with Heroku through GitHub.
          </p>
          <br />
          <h5 className={sectionStyles.leftHeader}>Technologies:</h5>
          <ul>
            <li>- JavaScript</li>
            <li>- MongoDB</li>
            <li>- HTML/CSS</li>
            <li>- Handlebars</li>
            <li>- Google OAuth</li>
            <li>- Heroku</li>
          </ul>
          <br />
          <br />
          <div className={sectionStyles.linkList}>
            <a href="https://serene-everglades-86338.herokuapp.com/" target="_blank">Live Project</a>
            <a href="https://github.com/atubic/Storybooks" target="_blank">Code</a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h5 className={sectionStyles.leftHeader}>Login Page</h5>
          <img className={sectionStyles.exampleImg} src={loginImg} />
          <br />
          <br />
          <br />
          <h5 className={sectionStyles.leftHeader}>Public Stories Page</h5>
          <img className={sectionStyles.exampleImg} src={publicStoriesImg} />
          <br />
          <br />
          <br />
          <h5 className={sectionStyles.leftHeader}>Post/Edit Story Page</h5>
          <img className={sectionStyles.exampleImg} src={editImg} />
        </div>
      </div>
      <div id={sectionStyles.footer} className={sectionStyles.s2}></div>
    </>
  );
}