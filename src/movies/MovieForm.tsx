import { Form, Formik, FormikHelpers } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { actorMovieDTO } from "../actors/actors.model";
import CheckboxField from '../forms/CheckboxField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import TextField from "../forms/text-field";
import { GenreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movie-theaters/movieTheater.model";
import Button from "../utils/button";
import { movieCreationDTO } from "./movies.model";

export default function MovieForm(props: movieFormProps) {

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
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
}