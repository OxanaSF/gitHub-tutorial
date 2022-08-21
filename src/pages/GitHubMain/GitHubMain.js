import React, { useState } from 'react';

import GitHubIntro from '../../components/GitHubIntro/GitHubIntro.js';
import AccountSetup from '../../components/AccountSetup/AccountSetup'
import ChapterTwo from '../../components/ChapterTwo/ChapterTwo.js';
import ChapterThree from '../../components/ChapterThree/ChapterThree.js';
import ChapterFour from '../../components/ChapterFour/ChapterFour.js';

import {
  MainStyled,
  HeaderStyled,
} from './SidebarStyles.js';



import { Link } from 'react-router-dom';

const GitHubMain = () => {
  const [show, setShow] = useState(false);
  const [chapter, setChapter] = useState('github-intro');

  return (
    <MainStyled className={show ? 'space-toggle' : null}>
      <HeaderStyled className={`header ${show ? 'header-space-toggle' : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </HeaderStyled>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className="nav">
          <div>
            <div className="nav-list">
              <Link
                to=""
                onClick={() => setChapter('github-intro')}
                className={`nav-link ${
                  chapter === 'github-intro' ? 'active' : null
                }`}
              >
                <i class="fa-solid fa-book-open nav-link-icon"></i>
                <span className="nav-link-name">GitHub Tutorial</span>
              </Link>

              <Link
                to=""
                onClick={() => setChapter('account-setup')}
                className={`nav-link ${
                  chapter === 'account-setup' ? 'active' : null
                }`}
              >
                <i className="fa-solid fa-circle-dot nav-link-icon"></i>

                <span className="nav-link-name">Chapter 1</span>
              </Link>

              <Link
                to=""
                onClick={() => setChapter('chapter-two')}
                className={`nav-link ${
                  chapter === 'chapter-two' ? 'active' : null
                }`}
              >
                <i className="fa-solid fa-circle-dot nav-link-icon"></i>
                <span className="nav-link-name">Chapter 2</span>
              </Link>
              <Link
                to=""
                onClick={() => setChapter('chapter-three')}
                className={`nav-link ${
                  chapter === 'chapter-three' ? 'active' : null
                }`}
              >
                <i className="fa-solid fa-circle-dot nav-link-icon"></i>
                <span className="nav-link-name">Chapter 3</span>
              </Link>
              <Link
                to=""
                onClick={() => setChapter('chapter-four')}
                className={`nav-link ${
                  chapter === 'chapter-four' ? 'active' : null
                }`}
              >
                <i className="fa-solid fa-circle-dot nav-link-icon"></i>
                <span className="nav-link-name">Chapter 4</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>



      {chapter === 'github-intro' && <GitHubIntro />}
      {chapter === 'account-setup' && <AccountSetup />}
      {chapter === 'chapter-two' && <ChapterTwo />}
      {chapter === 'chapter-three' && <ChapterThree />}
      {chapter === 'chapter-four' && <ChapterFour />}
    </MainStyled>
  );
};

export default GitHubMain;
