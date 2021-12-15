import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { actorMovieDTO } from "../actors/actors.model";
import CheckboxField from '../forms/CheckboxField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import TextField from "../forms/text-field";
import { GenreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movie-theaters/movieTheater.model";
import Button from "../utils/button";
import { movieCreationDTO } from "./movies.model";

export default function MovieForm(props: movieFormProps) {
    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] =
        useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] =
        useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] =
        useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(item => item.key);
                values.movieTheatersIds = selectedMovieTheaters.map(item => item.key);
                props.onSubmit(values, actions)
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>

                    <TextField displayName="Title" field="title" />
                    <CheckboxField displayName="In Theaters" field="inTheaters" />
                    <TextField displayName="Trailer" field="trailer" />
                    <DateField displayName="Release Date" field="releaseDate" />
                    <ImageField displayName="Poster" field="poster"
                        imageURL={props.model.posterURL}
                    />

                    <MultipleSelector
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector
                        displayName="Movie Theaters"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedMovieTheaters(selected);
                            setNonSelectedMovieTheaters(nonSelected);
                        }}
                    />

                    <Button disabled={formikProps.isSubmitting}
                        type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: GenreDTO[];
    nonSelectedGenres: GenreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}