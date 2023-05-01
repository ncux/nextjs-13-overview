import Link from "next/link";
import { useContext } from "react";
import { CoursesContext } from "@/app/context/courses";

const Courses = () => {

    const { courses } = useContext(CoursesContext);

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