import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';
import Logo from '../Logo';

const Header = (props) => {
  useEffect(() => {
    if (!props.data) {
      props.getUser();
    } // eslint-disable-next-line
  }, []);
  const logOut = () => {
    localStorage.clear();
    props.clearUserStore();
    props.history.replace('/login');
  };

  const startContests = () => {
    props.history.push('/startContest');
  };

  const renderLoginButtons = () => {
    if (props.data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                props.data.avatar === 'anon.png'
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${props.data.avatar}`
              }
              alt="user"
            />
            <span>{`Hi, ${props.data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt="menu"
            />
            <ul>
              <li>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <span>View Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: 'none' }}>
                  <span>my Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>affiliate dashboard</span>
                </Link>
              </li>
              <li>
                <span onClick={logOut}>logout</span>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt="email"
          />
        </>
      );
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>login</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>sign UP</span>
        </Link>
      </>
    );
  };

  if (props.isFetching) {
    return null;
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.fixedHeader}>
        <span className={styles.info}>
          squadhelp recognized as one of the Most Innovative Companies by Inc
          Magazine.
        </span>
        <a href="/">read Announcement</a>
      </div>
      <div className={styles.loginSignnUpHeaders}>
        <div className={styles.numberContainer}>
          <a href={`tel:${CONSTANTS.CONTACT_PHONE}`}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <span>{`${CONSTANTS.CONTACT_PHONE}`}</span>
          </a>
        </div>
        <div className={styles.userButtonsContainer}>
          {renderLoginButtons()}
        </div>
      </div>
      <div className={styles.navContainer}>
        <Logo
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          className={styles.logo}
          alt="blue_logo"
        />

        <div className={styles.leftNav}>
          <div className={styles.nav}>
            <ul>
              <li>
                <span>name IDEAS</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">beauty</a>
                  </li>
                  <li>
                    <a href="/">consulting</a>
                  </li>
                  <li>
                    <a href="/">e-Commerce</a>
                  </li>
                  <li>
                    <a href="/">fashion & Clothing</a>
                  </li>
                  <li>
                    <a href="/">finance</a>
                  </li>
                  <li>
                    <a href="/">real Estate</a>
                  </li>
                  <li>
                    <a href="/">tech</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">more Categories</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>contests</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">HOW IT WORKS</a>
                  </li>
                  <li>
                    <a href="/">PRICING</a>
                  </li>
                  <li>
                    <a href="/">AGENCY SERVICE</a>
                  </li>
                  <li>
                    <a href="/">ACTIVE CONTESTS</a>
                  </li>
                  <li>
                    <a href="/">WINNERS</a>
                  </li>
                  <li>
                    <a href="/">LEADERBOARD</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">BECOME A CREATIVE</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Our Work</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">NAMES</a>
                  </li>
                  <li>
                    <a href="/">TAGLINES</a>
                  </li>
                  <li>
                    <a href="/">LOGOS</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">TESTIMONIALS</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Names For Sale</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">POPULAR NAMES</a>
                  </li>
                  <li>
                    <a href="/">SHORT NAMES</a>
                  </li>
                  <li>
                    <a href="/">INTRIGUING NAMES</a>
                  </li>
                  <li>
                    <a href="/">NAMES BY CATEGORY</a>
                  </li>
                  <li>
                    <a href="/">VISUAL NAME SEARCH</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">SELL YOUR DOMAINS</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Blog</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">ULTIMATE NAMING GUIDE</a>
                  </li>
                  <li>
                    <a href="/">POETIC DEVICES IN BUSINESS NAMING</a>
                  </li>
                  <li>
                    <a href="/">CROWDED BAR THEORY</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">ALL ARTICLES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {props.data && props.data.role !== CONSTANTS.CREATOR && (
            <div className={styles.startContestBtn} onClick={startContests}>
              START CONTEST
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
