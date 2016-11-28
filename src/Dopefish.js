/*
this is the parent component for any instances of a Dopefish, such that App.js could just call <Dopefish for multiple fish at once. Specifically, it contains state for a fish: what coordinates (which determines location on page) and what direction it is 'swimming' (which determines image to display) as well as a click handler for the onClick burp interact.
*/

import React, { Component } from 'react';

class Dopefish extends Component {
  render() {
    return (
      <p>This is a test string.</p>
    );
  }
}

export default Dopefish;
