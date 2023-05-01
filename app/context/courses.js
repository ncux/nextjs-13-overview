'use client';
import { createContext, useState } from "react";

export const CoursesContext = createContext();

export const CoursesState = ({ children }) => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <CoursesContext.Provider value={{
            courses,
            setCourses
        }}>
            { children }
        </CoursesContext.Provider>
    );

};
