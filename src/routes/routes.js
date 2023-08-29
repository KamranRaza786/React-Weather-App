import { Route, Routes as AppRoutes } from "react-router-dom";
import Display from "../components/display/Display";
import DisplayTemperature from "../components/displaytemperature/DisplayTemperature";

const Routes = () => {
    return(
        <AppRoutes>
            <Route path="/" element={<Display />}/>
            <Route path="/temperature" element={<DisplayTemperature />}/>
        </AppRoutes>
    )
}

export default Routes;