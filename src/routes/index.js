import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/:state/:city" element={<Home />} /> */}
                <Route path="/sp/sao-paulo" element={<Home />} />
            </Switch>
        </Router>
    )
}

export default Routes;