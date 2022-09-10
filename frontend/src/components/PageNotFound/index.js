import { useHistory } from "react-router-dom";
import './pagenotfound.css'

const PageNotFound = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className="page-not-found">
            <div
            className="pnf-container">
                <h1>
                    404: Page Not Found
                </h1>
                <p>Click the button to go back home!</p>
                <button onClick={handleClick}>
                    Back to Home!
                </button>
            </div>
        </div>
    )
}

export default PageNotFound;
