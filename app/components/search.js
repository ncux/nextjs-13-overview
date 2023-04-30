'use client';
import { useState } from "react";
import Loading from "@/app/loading";
import Courses from "@/app/components/courses";

const SearchCourse = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const API_URL = `http://localhost:3000/api/courses/search?query=`;
    const searchCourse = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (query.length > 0) {
                console.log(query);
                //const res = await fetch(`${API_URL}${query}`, { next: { revalidate: 60 } });
            }
            // const data = await res.json();
            // setCourses(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    if (loading) return <Loading />

    return (
        <>
            <h4>Search for a course</h4>
            <form onSubmit={ searchCourse } className={`search-form`}>
                <input type="text"
                       value={ query }
                       onChange={ e => setQuery(e.target.value) }
                       className={`search-input w-3`}
                />
                <button type="submit" className={`btn ml-2 block`}>Search</button>
            </form>
        </>
    )

};

export default SearchCourse;