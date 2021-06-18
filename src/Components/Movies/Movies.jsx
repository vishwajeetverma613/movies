import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import "./movies.css";

class Movies extends Component {
    state = {  }
    //yaha pe hum props se laye hue data to movie mataklb ek single component ,mesei likh denge
    render() { 
        return ( <div className="movies">
        {this.props.movies.map((movieObject) => {
          return <Movie key={movieObject.id} movie={movieObject}></Movie>;
        })}
      </div>
         );
    }
}
 
export default Movies;