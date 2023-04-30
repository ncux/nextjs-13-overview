import { NextResponse } from "next/server";
import courses from './courses.json';


// get all courses
export async function GET(request) {
    return NextResponse.json(courses);
}

// create a new course
export async function POST(request) {
    const course = await request.json();
    course.id = (courses.length + 1);
    courses.push(course);
    return NextResponse.json(courses);
}