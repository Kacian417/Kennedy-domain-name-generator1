/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*  let colors = ["red", "blue", "pink", "green", "orange", "yellow", "purple"];
  let animals = ["dog", "cat", "piggy", "cow", "horse", "gator", "elephant"];

  for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
    for (let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++) {
      console.log(colors[colorIndex] + animals[animalsIndex]);
    }
  }
*/
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "smallish"];
  let noun = ["jogger", "racoon", "spaceman"];
  let extensions = [".com", ".us", ".net"];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let extensionsIndex = 0;
          extensionsIndex < extensions.length;
          extensionsIndex++
        ) {
          console.log(
            pronoun[pronounIndex] +
              adj[adjIndex] +
              noun[nounIndex] +
              extensions[extensionsIndex]
          );
        }
      }
    }
  }
};
