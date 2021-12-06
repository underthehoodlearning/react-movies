import IndividualMovies from "./individual-movie";
import { movieDTO } from "./movies.model";
import css from './movie-list.module.css';

export default function MoviesList(props: MovieListProps) {
    return (
        <div className={css.div}>
            {props.movies.map(movie => 
                <IndividualMovies {...movie} key={movie.id} />)}
        </div>
    )
}

interface MovieListProps {
    movies: movieDTO[];
}