import Actors from "./actors/actors";
import CreateActor from "./actors/create-actor";
import EditActor from "./actors/edit-actor";
import CreateGenre from "./genres/create-genres";
import EditGenre from "./genres/edit-genres";
import Genres from "./genres/genres";
import CreateMovieTheater from "./movie-theaters/create-movie-theater";
import EditMovieTheater from "./movie-theaters/edit-movie-theater";
import MovieTheaters from "./movie-theaters/movie-theaters";
import CreateMovie from "./movies/create-movie";
import EditMovie from "./movies/edit-movie";
import FilterMovies from "./movies/filter-movies";
import LandingPage from "./movies/landing-page";
import RedirectToLandingPage from "./utils/redirect-to-landing-page";

const routes = [
    { path: '/', component: LandingPage, exact: true },

    { path: '/genres', component: Genres, exact: true },
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},

    {path: '/actors', component: Actors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movietheaters', component: MovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},

    {path: '*', component: RedirectToLandingPage}
];

export default routes;