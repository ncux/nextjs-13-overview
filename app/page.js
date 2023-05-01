'use client';
import { useContext, useEffect, useState } from "react";
import Loading from "@/app/loading";
import SearchCourse from "@/app/components/search";
import Courses from "@/app/components/courses";
import { CoursesContext } from "@/app/context/courses";

const HomePage = () => {

    const { loading, setCourses, setLoading } = useContext(CoursesContext);

    const API_URL = `http://localhost:3000/api/courses`;

    useEffect(() => {
        const getCourses = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}`, { next: { revalidate: 60 } });
                const data = await res.json();
                setCourses(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        getCourses();
    }, []);

    if (loading) return <Loading />

    return (
        <>
            <h2>Pussy</h2>
            <>
               <SearchCourse />
               <Courses />
            </>
        </>
    )

};

export default HomePage;