import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';

import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';
import Logo from '../Logo';

import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
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
                  <span>My Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Affiliate dashboard</span>
                </Link>
              </li>
              <li>
                <span onClick={logOut}>Logout</span>
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
          <span className={styles.btn}>Login</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>Sign UP</span>
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
          Squadhelp recognized as one of the Most Innovative Companies by Inc
          Magazine.
        </span>
        <a href="/">Read announcement</a>
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
                <span>Name ideas</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt="menu"
                />
                <ul>
                  <li>
                    <a href="/">Beauty</a>
                  </li>
                  <li>
                    <a href="/">Consulting</a>
                  </li>
                  <li>
                    <a href="/">e-Commerce</a>
                  </li>
                  <li>
                    <a href="/">Fashion & Clothing</a>
                  </li>
                  <li>
                    <a href="/">Finance</a>
                  </li>
                  <li>
                    <a href="/">Real Estate</a>
                  </li>
                  <li>
                    <a href="/">Tech</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">More Categories</a>
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
                    <a href="/">How it works</a>
                  </li>
                  <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                  <li>
                    <a href="/">Agency service</a>
                  </li>
                  <li>
                    <a href="/">Active contests</a>
                  </li>
                  <li>
                    <a href="/">Winners</a>
                  </li>
                  <li>
                    <a href="/">Leaderboard</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">Become a creative</a>
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
                    <a href="/">Names</a>
                  </li>
                  <li>
                    <a href="/">Taglines</a>
                  </li>
                  <li>
                    <a href="/">Logos</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">Testimonials</a>
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
                    <a href="/">Popular names</a>
                  </li>
                  <li>
                    <a href="/">Short names</a>
                  </li>
                  <li>
                    <a href="/">Intriguing names</a>
                  </li>
                  <li>
                    <a href="/">Names by category</a>
                  </li>
                  <li>
                    <a href="/">Visual name search</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">Sell your domains</a>
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
                    <a href="/">Ultimate naming guide</a>
                  </li>
                  <li>
                    <a href="/">Poetic devices in business naming</a>
                  </li>
                  <li>
                    <a href="/">Crowded bar theory</a>
                  </li>
                  <li className={styles.last}>
                    <a href="/">All articles</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {props.data && props.data.role !== CONSTANTS.CREATOR && (
            <div className={styles.startContestBtn} onClick={startContests}>
              Start contest
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
