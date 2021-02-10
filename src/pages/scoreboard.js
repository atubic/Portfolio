import { Link } from 'gatsby';
import React from 'react';
import sectionStyles from '../components/section.module.css';
import scoreboardImg from '../../public/scoreboard.png';

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
          <img src={scoreboardImg} />
          <h3>Scoreboard App</h3>
          <p>
            This was a project I started back in October 2020 when I first learned React.
            It's a very simple scoreboard that allows users to add and remove players,
            and increment/decrement their scores.
          </p>
          <p>
            It also keeps track of how many players there are, the total amount of points
            earned by all of the players, and displays a little crown next to the player with
            the most points.
          </p>
          <p>
            There is also a stopwatch that can be stopped and reset. It was  deployed with Heroku
            through GitHub.
          </p>
          <br />
          <h5 className={sectionStyles.leftHeader}>Technologies:</h5>
          <ul>
            <li>- JavaScript</li>
            <li>- React.js</li>
            <li>- HTML/CSS</li>
            <li>- Heroku</li>
          </ul>
          <br />
          <br />
          <div className={sectionStyles.linkList}>
            <a href="https://polar-savannah-22608.herokuapp.com/" target="_blank">Live Project</a>
            <a href="https://github.com/atubic/Scoreboard" target="_blank">Code</a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
      <div id={sectionStyles.footer} className={sectionStyles.s2}></div>
    </>
  );
}