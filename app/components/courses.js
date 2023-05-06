'use client';
import Link from "next/link";
import {useContext, useEffect} from "react";
import { CoursesContext } from "@/app/context/courses";
import Loading from "@/app/loading";

const Courses = async () => {

    const { courses, loading, getCourses } = useContext(CoursesContext);

    useEffect(() => getCourses(), []);

    if (loading) return <Loading />

    return (
        <div className={`courses`}>
            {
                courses.map(course => (
                    <div key={course.id} className={`card`}>
                        <h2>{ course.title }</h2>
                        <small>Level: { course.level }</small>
                        <p>{ course.description }</p>
                        <Link href={`${course.link}`} target={`_blank`} className={`btn`}>Go to course</Link>
                    </div>
                ))
            }
        </div>
    );

};

export default Courses;