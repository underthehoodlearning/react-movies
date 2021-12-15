import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../forms/text-field";
import Button from "../utils/button";

export default function CreateGenre(){
    return (
        <>
            <h3>Create Genre</h3>

            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={ value => {
                    console.log(value);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required('This field is required').firstLetterUppercase()
                    })
                }
            >
                <Form>
                    <TextField field="name" displayName="Name"></TextField>

                    <Button type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            </Formik>
        </>
    )
}