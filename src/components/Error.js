import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (<>
        <h1> {err.status} {err.statusText}</h1>
        <h2>My Error</h2>
        </>
    )
};

export default Error;