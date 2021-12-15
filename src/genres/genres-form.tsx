import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/text-field";
import Button from "../utils/button";
import * as Yup from 'yup';
import { GenresCreationDTO } from "./genres.model";

export default function GenresForm(props: GenreFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={
                Yup.object({
                    name: Yup.string().required('This field is required').firstLetterUppercase()
                })
            }
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>

                </Form>
            )}
        </Formik>
    )
}

interface GenreFormProps {
    model: GenresCreationDTO;
    onSubmit(values: GenresCreationDTO, action: FormikHelpers<GenresCreationDTO>): void;
}