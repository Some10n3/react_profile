import React, { section } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('http://localhost:8080/courses')
                setCourses(res.data)
                console.log(res)
            }
            catch (err) {
                console.log("err")
            }
        }
        fetchCourses()
    }, [])

    const groupCoursesBySemester = () => {
        const groupedCourses = {};
        courses.forEach(course => {
            if (!groupedCourses[course.semester]) {
                groupedCourses[course.semester] = [];
            }
            groupedCourses[course.semester].push(course);
        });
        return groupedCourses;
    };

    const groupedCourses = groupCoursesBySemester();

    return(
        <section>
            <div className='min-w-full'>
                <h1>Courses I've taken</h1>
                {Object.keys(groupedCourses).map(semester => (
                    <div key={semester} className='py-20 min-w-full hover:shadow-lg hover:rounded hover:overflow-hidden'>
                        <h2 className='font-bold'>{`Semester ${semester}`}</h2>
                        <div className='md:grid-cols-3'>
                            {groupedCourses[semester].map(course => (
                                <div key={course.id}>
                                    <h3>{course.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
           
        </section>
    )
}

export default App