import Genres from "./genres/genres";
import LandingPage from "./movies/landing-page";

const routes = [
    { path: '/', component: LandingPage, exact: true },
    { path: '/genres', component: Genres, exact: true }
];

export default routes;