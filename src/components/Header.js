import React from 'react';
import sectionStyles from './section.module.css';

export default function Header(props) {
  return (
    <div className={sectionStyles.header}>{props.title}</div>
  );
}