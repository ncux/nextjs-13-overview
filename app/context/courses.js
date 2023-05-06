'use client';
import { createContext, useState } from "react";

export const CoursesContext = createContext();

export const CoursesState = ({ children }) => {

    const [courses, setCourses] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const API_URL = `http://localhost:3000/api/courses`;

    const getCourses = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}`, { next: { revalidate: 60 } });
            const data = await res.json();
            setLoading(false);
            setCourses([...data]);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <CoursesContext.Provider value={{
            query,
            setQuery,
            courses,
            setCourses,
            loading,
            setLoading,
            getCourses
        }}>
            { children }
        </CoursesContext.Provider>
    );

};
