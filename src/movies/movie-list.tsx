import IndividualMovie from "./individual-movie";
import { MovieDTO } from "./movies.model";
import css from './movie-list.module.css';
import GenericList from "../utils/generic-list";

export default function MovieList(props: MovieListProps) {
    return (
        <GenericList list={props.movies}>
            <div className={css.div}>
                {props.movies?.map(movie =>
                    <IndividualMovie {...movie} key={movie.id} />)}
            </div>
        </GenericList>
    )    
}

interface MovieListProps {
    movies?: MovieDTO[];
}