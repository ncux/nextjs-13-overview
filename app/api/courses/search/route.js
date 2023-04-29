import { NextResponse } from "next/server";
import courses from '../courses.json';

export async function GET(request) {
    console.log(request.url);
    const { searchParams } = new URL(request.url);
    // console.log(searchParams);
    const query = searchParams.get('query');
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()));
    return NextResponse.json(filteredCourses);
}