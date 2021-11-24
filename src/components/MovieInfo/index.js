import React from 'react';

//components
import Thumbnail from '../Thumbnail';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//Image
import NoImage from '../../images/no_image.jpg';

//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';


function MovieInfo({ movie }) {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumbnail
                image={
                    movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                }
                
                clickable={false}
                alt='movie-thumbnail'/>

                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Genre</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                          <p key={director.credit_id}>{director.name}</p>  
                        ))}
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo;
