import { NavLink } from "react-router-dom";

function ErrorPage() {
    return <>
        <h1>Oops! Looks like you went to a dead link.</h1>
        <NavLink to="/">Click here to go to the home page</NavLink>
    </>
}

export default ErrorPage;