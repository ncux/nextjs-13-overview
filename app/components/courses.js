import Link from "next/link";

const API_URL = `http://localhost:3000/api/courses`;
const getCourses = async () => {
    try {
        const res = await fetch(`${API_URL}`, { next: { revalidate: 60 } });
        return await res.json();
    } catch (e) {
        console.log(e);
    }
};

const Courses = async () => {

    const courses = await getCourses();
    console.log(courses);

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