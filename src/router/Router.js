import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Task2 from "../pages/Task2";
import Layout from "./layouts/Layout";
import Task2B from "../pages/Task2B";
import Task3 from "../pages/Task3";
import Task4 from "../pages/Task4";

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Task2 />} />
            <Route path="task2b" element={<Task2B />} />
            <Route path='task3' element={<Task3 />} />
            <Route path="task4" element={<Task4 />} />
        </Route>
    )
)