import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <div>
        <h1>Discover</h1>
        <ul>
          <li>
            <img src="#" alt="img1" />
            <div className="desc">
              <h2>Know everything easily</h2>
              <p>
                Get all the information about the movie with just one click.
                Just type the name in the search bar and we will give you all
                the information you need.
              </p>
            </div>
          </li>
          <li className="flip">
            <img src="#" alt="img2" />
            <div className="desc">
              <h2>Give your reviews</h2>
              <p>
                See what others feel about the movie or write a review of your
                own. Its that simple.
              </p>
            </div>
          </li>
          <li>
            <img src="#" alt="img3" />
            <div className="desc">
              <h2>Follow your favorites</h2>
              <p>
                Upvote the reviews you like and follow the critics you love. See
                all their posted reviews at one place and get notified when they
                post a new review (coming soon).
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Features;
