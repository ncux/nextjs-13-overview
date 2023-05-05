//'use client';
import Link from "next/link";
//import {useContext, useEffect} from "react";
import { CoursesContext } from "@/app/context/courses";
import Loading from "@/app/loading";

const Courses = async () => {

    //const { courses, loading, setCourses, setLoading } = useContext(CoursesContext);

    const API_URL = `http://localhost:3000/api/courses`;

    const getCourses = async () => {
        try {
            //setLoading(true);
            const res = await fetch(`${API_URL}`, { next: { revalidate: 60 } });
            const data = await res.json();
            // setLoading(false);
            // setCourses([...data]);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect(() => {
    //     getCourses();
    // }, []);

    //if (loading) return <Loading />

    const courses = await getCourses();

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
            {/*{*/}
            {/*    courses?.length > 0 ? (*/}
            {/*        courses.map(course => (*/}
            {/*            <div key={course.id} className={`card`}>*/}
            {/*                <h2>{ course.title }</h2>*/}
            {/*                <small>Level: { course.level }</small>*/}
            {/*                <p>{ course.description }</p>*/}
            {/*                <Link href={`${course.link}`} target={`_blank`} className={`btn`}>Go to course</Link>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    ) : (<Loading />)*/}
            {/*}*/}
        </div>
    );

};

export default Courses;