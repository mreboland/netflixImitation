import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Catalogue extends Component {

    constructor() {
        super()
        this.state = {
            movieList: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie`,
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                page: 1,
                primary_release_year: 2020
            }
        }).then((res) => {
            // console.log(res)
            //set the state of movies
            this.setState({
                movieList: res.data.results
            })
        })
    }

    render() {
        return (
            <ul>
                <h1>print the dam Catalogue</h1>
                {
                    this.state.movieList.map( (movie) => {
                        // console.log(movie)
                        return (
                            <li>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Catalogue;