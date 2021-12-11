import IndividualMovies from "./individual-movie";
import { MovieDTO } from "./movies.model";
import css from './movie-list.module.css';

export default function MovieList(props: MovieListProps) {
    if (!props.movies) {
        return <>Loading...</>
    } else if (props.movies.length === 0) {
        return <>There are no movies to display.</>
    } else {
        return (
            <div className={css.div}>
                {props.movies.map(movie => 
                    <IndividualMovies {...movie} key={movie.id} />)}
            </div>
        )
    }    
}

interface MovieListProps {
    movies?: MovieDTO[];
}