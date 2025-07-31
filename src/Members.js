// Members.js
import React, { useState } from 'react';
import './Members.css';

const committeeMembers = [
    { name: "Anik Chowdhury", role: "President", image: require('./media/members/committee/c1.jpeg') },
    { name: "Rina Akter", role: "Vice President", image: require('./media/members/committee/c2.jpeg') },
    { name: "Tariq Hasan", role: "General Secretary", image: require('./media/members/committee/c3.jpeg') },
    { name: "Lubna Sultana", role: "Joint Secretary", image: require('./media/members/committee/c4.jpeg') },
    { name: "Rina Rahman", role: "Treasurer", image: require('./media/members/committee/c5.jpeg') },
    { name: "Showmik Hasan", role: "Cultural Secretary", image: require('./media/members/committee/c6.jpeg') },
    { name: "Mizanur Rahman", role: "Sports Secretary", image: require('./media/members/committee/c7.jpeg') },
    { name: "Farida Yesmin", role: "Executive Member", image: require('./media/members/committee/c8.jpeg') },
    { name: "Habib Khan", role: "Executive Member", image: require('./media/members/committee/c9.jpeg') },
    { name: "Prattay Rahan", role: "Executive Member", image: require('./media/members/committee/c10.jpeg') },
    { name: "Salma Khatun", role: "Advisor", image: require('./media/members/committee/c11.jpeg') },
    { name: "Aminul Haque", role: "Advisor", image: require('./media/members/committee/c12.jpeg') },
    { name: "Asma Begum", role: "Legal Advisor", image: require('./media/members/committee/c13.jpeg') },
    { name: "Rezaul karim", role: "Member", image: require('./media/members/committee/c14.jpeg') },
    { name: "Shahabuddin", role: "Member", image: require('./media/members/committee/c15.jpeg') },
    { name: "Kamal Hossain", role: "Member", image: require('./media/members/committee/c16.jpeg') },
    { name: "Zakir Hossain", role: "Member", image: require('./media/members/committee/c17.jpeg') },
    { name: "Fatema Jahan", role: "Member", image: require('./media/members/committee/c18.jpeg') },
    { name: "Nayeem Islam", role: "Member", image: require('./media/members/committee/c19.jpeg') },
    { name: "Zahidul Islam", role: "Member", image: require('./media/members/committee/c20.jpeg') },
];

const performers = [
    { name: "Rumi Rahman", role: "Singer", image: require('./media/members/performers/p1.jpeg') },
    { name: "Nazmul Huda", role: "Dancer", image: require('./media/members/performers/p2.jpeg') },
    { name: "Lamia Hossain", role: "Guitarist", image: require('./media/members/performers/p3.jpeg') },
    { name: "Sabbir Mahmud", role: "Violinist", image: require('./media/members/performers/p4.jpeg') },
    { name: "Mahir Zaman", role: "Host", image: require('./media/members/performers/p5.jpeg') },
    { name: "Aktharuzzaman", role: "Poet", image: require('./media/members/performers/p6.jpeg') },
    { name: "Rayhan Khan", role: "Performer", image: require('./media/members/performers/p7.jpeg') },
    { name: "Arijit Singh", role: "Vocal", image: require('./media/members/performers/p8.jpeg') },
    { name: "Emon Hossain", role: "Musician", image: require('./media/members/performers/p9.jpeg') },
    { name: "Monir Hasan", role: "Performer", image: require('./media/members/performers/p10.jpeg') },
];

const MemberCard = ({ member, onClick }) => ( <
    div className = "member-card"
    onClick = {
        () => onClick(member)
    } >
    <
    img src = { member.image }
    alt = { member.name }
    /> <
    h3 > { member.name } < /h3> <
    p > { member.role } < /p> < /
    div >
);

const MemberModal = ({ member, onClose }) => {
    if (!member) return null;
    return ( <
        div className = "modal-overlay"
        onClick = { onClose } >
        <
        div className = "modal-content"
        onClick = {
            (e) => e.stopPropagation()
        } >
        <
        img src = { member.image }
        alt = { member.name }
        /> <
        h2 > { member.name } < /h2> <
        p > { member.role } < /p> < /
        div > <
        /div>
    );
};

export default function Member() {
    const [selectedMember, setSelectedMember] = useState(null);

    return ( <
        div className = "member-page" >
        <
        MemberModal member = { selectedMember }
        onClose = {
            () => setSelectedMember(null)
        }
        />

        <
        div className = "member-section" >
        <
        h2 > Committee Members < /h2> <
        div className = "member-grid" > {
            committeeMembers.map((member, index) => ( <
                MemberCard key = { index }
                member = { member }
                onClick = { setSelectedMember }
                />
            ))
        } <
        /div> < /
        div >

        <
        div className = "member-section" >
        <
        h2 > Performers < /h2> <
        div className = "member-grid" > {
            performers.map((member, index) => ( <
                MemberCard key = { index }
                member = { member }
                onClick = { setSelectedMember }
                />
            ))
        } <
        /div> < /
        div > <
        /div>
    );
}