import Axios from 'axios';
import React, { Component } from 'react';

class SingleMovie extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        Axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${this.props.match.params.id}`,
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac',
            }
        }).then( (res) => {
            // console.log(res);
            this.setState({
                movie: res.data
            })
        })
    }
    render() {
        console.log(this.state.movie)
        return (
            <div>
                <h1>print individual movie here</h1>

                    <div>
                        <img src={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt="" />
                    </div>
                    <div>
                        <h1>{this.state.movie.original_title}</h1>
                        <h2>{this.state.movie.tagline}</h2>
                        <p>{this.state.movie.overview}</p>
                    </div>


            </div>
        )
    }
}

export default SingleMovie;