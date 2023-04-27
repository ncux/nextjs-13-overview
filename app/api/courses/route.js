import { NextResponse } from "next/server";
import courses from './courses.json';

export async function GET(request) {
    return NextResponse.json(courses);
}