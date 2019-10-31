import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>

        <header id="header">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/bible">Bible</a></li>
            <li><a href="/donate">Pay Tithes/ Donate</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/login">Log in</a></li>
          </ul>
        </header>

      </React.Fragment>
    );
  }
}

export default Header
