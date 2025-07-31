import React from 'react';
import './about.css';

// Import Sir Images
import sir1 from './assets/sir1.jpg';
import sir2 from './assets/sir2.jpg';
import sir3 from './assets/sir3.jpeg';
import sir4 from './assets/sir4.jpeg';
import sir5 from './assets/sir5.jpeg';
import sir6 from './assets/sir6.jpeg';
import sir7 from './assets/sir7.jpeg';
import sir8 from './assets/sir8.jpeg';
import sir9 from './assets/sir9.jpeg';
import sir10 from './assets/sir10.jpeg';
import sir11 from './assets/sir11.jpeg';
import sir12 from './assets/sir12.jpeg';
import sir13 from './assets/sir13.jpeg';
import sir14 from './assets/sir14.jpeg';
import sir15 from './assets/sir15.jpeg';

// Import Band Images
import band1 from './assets/band1.jpg';
import band2 from './assets/band2.jpeg';
import band3 from './assets/band3.jpeg';
import band4 from './assets/band4.jpg';
import band5 from './assets/band5.jpg';
import band6 from './assets/band6.jpg';
import band7 from './assets/band7.jpeg';
import band8 from './assets/band8.jpg';
import band9 from './assets/band9.jpg';
import band10 from './assets/band10.jpg';

function About() {
    const facultyFeedback = [
        { name: 'Dr. Abul Kalam', designation: 'Professor, Music Department', image: sir1, feedback: 'Alpha Community is transforming the music culture in our university. Their dedication is unmatched.' },
        { name: 'Dr. Shahin Ahmed', designation: 'Associate Professor, Cultural Studies', image: sir2, feedback: 'I have seen many clubs but Alpha Community stands out with their passion and discipline in music.' },
        { name: 'Prof. Rahim Uddin', designation: 'Professor, Fine Arts', image: sir3, feedback: 'Their events are always vibrant and full of cultural significance.' },
        { name: 'Dr. Salma Sultana', designation: 'Assistant Professor, Literature', image: sir4, feedback: 'Music connects souls and Alpha Community is doing it right.' },
        { name: 'Dr. Kamal Hossain', designation: 'Professor, Sociology', image: sir5, feedback: 'A great initiative for students to explore their creative side.' },
        { name: 'Dr. Nurul Islam', designation: 'Lecturer, Cultural Heritage', image: sir6, feedback: 'Alpha Community bridges academics with cultural practices wonderfully.' },
        { name: 'Dr. Nargis Akter', designation: 'Professor, Performing Arts', image: sir7, feedback: 'Their musical shows are a treat to watch!' },
        { name: 'Dr. Tanvir Hossain', designation: 'Lecturer, Drama and Music', image: sir8, feedback: 'The club brings a refreshing vibe to the university.' },
        { name: 'Prof. Hasan Mahmud', designation: 'Dean, Faculty of Arts', image: sir9, feedback: 'Every university needs a club like Alpha Community.' },
        { name: 'Dr. Rubina Rahman', designation: 'Associate Professor, Psychology', image: sir10, feedback: 'Music is therapy, and this club is spreading that.' },
        { name: 'Dr. Mizanur Rahman', designation: 'Professor, History', image: sir11, feedback: 'Their dedication to preserving culture is commendable.' },
        { name: 'Prof. Abida Sultana', designation: 'Lecturer, Musicology', image: sir12, feedback: 'They are creating history with music.' },
        { name: 'Dr. Rafiqul Islam', designation: 'Professor, Social Work', image: sir13, feedback: 'The enthusiasm of students here is infectious!' },
        { name: 'Dr. Jannat Ara', designation: 'Lecturer, Philosophy', image: sir14, feedback: 'Alpha Community inspires us all.' },
        { name: 'Dr. Shafiq Anwar', designation: 'Professor, Education', image: sir15, feedback: 'An amazing platform for students to nurture their talents.' },
    ];

    const bandFeedback = [
        { name: 'Warfaze', image: band1, feedback: 'We are amazed by the musical talent brewing inside the Alpha Community. It\'s a breeding ground for future stars!' },
        { name: 'Miles', image: band2, feedback: 'Alpha Community is doing an amazing job keeping the passion for music alive among students.' },
        { name: 'Artcell', image: band3, feedback: 'Their dedication to progressive music is admirable.' },
        { name: 'Nemesis', image: band4, feedback: 'We see great potential in this club to produce next gen musicians.' },
        { name: 'AvoidRafa', image: band5, feedback: 'Their vibe is raw and energetic. Love their initiative!' },
        { name: 'Shunno', image: band6, feedback: 'It’s inspiring to see university students so involved with music.' },
        { name: 'Cryptic Fate', image: band7, feedback: 'Their heavy metal jams are quite impressive for students.' },
        { name: 'Chirkutt', image: band8, feedback: 'We love how they blend culture and modern music!' },
        { name: 'Powersurge', image: band9, feedback: 'A power-packed club with talented youths.' },
        { name: 'Minerva', image: band10, feedback: 'One of the best student music communities we have seen.' },
    ];

    return ( <
        div className = "about-page" >
        <
        h1 > About Our Club < /h1> <
        p className = "intro" > Alpha Community is more than a music club; it 's a family of passionate artists nurturing the cultural soul of Metropolitan University.</p>

        <
        h2 > What Our Faculties Say < /h2> <
        div className = "faculty-section" > {
            facultyFeedback.map((faculty, index) => ( <
                div key = { index }
                className = "faculty-card" >
                <
                img src = { faculty.image }
                alt = { faculty.name }
                /> <
                h3 > { faculty.name } < /h3> <
                p className = "designation" > { faculty.designation } < /p> <
                p className = "feedback" > "{faculty.feedback}" < /p> < /
                div >
            ))
        } <
        /div>

        <
        h2 > What Famous Bands Say About Us < /h2> <
        div className = "band-section" > {
            bandFeedback.map((band, index) => ( <
                div key = { index }
                className = "band-card" >
                <
                img src = { band.image }
                alt = { band.name }
                /> <
                h3 > { band.name } < /h3> <
                p className = "feedback" > "{band.feedback}" < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
}

export default About;