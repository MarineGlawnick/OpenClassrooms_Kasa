// import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    }
])

function App() {
    return (
        <div className="App">
            {/* <Header/> */}
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
