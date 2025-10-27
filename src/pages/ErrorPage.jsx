import { NavLink } from "react-router-dom";

function ErrorPage() {
    return <>
        <h1 className="reg-instrument-sans">Oops! Looks like you went to a dead link.</h1>
        <NavLink to="/" className="bold-instrument-sans underline text-white hover:text-[#3698d5]">Click here to go to the home page</NavLink>
    </>
}

export default ErrorPage;