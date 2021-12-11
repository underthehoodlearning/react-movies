import { MovieDTO } from "./movies.model";
import css from './individual-movie.module.css';

export default function IndividualMovie(props: MovieDTO) {
    const buildLink = () => `/movie/${props.poster}`

    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.poster} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>
        </div>
    )
}