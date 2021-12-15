import GenresForm from "./genres-form";

export default function CreateGenre(){
    return (
        <>
            <h3>Create Genre</h3>

            <GenresForm
                model={{name: ''}}
                onSubmit={ async value => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(value);
                }}
            />
        </>
    )
}