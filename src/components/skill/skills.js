import React from 'react'
import SkillBar from 'react-skillbars';
import './skills.css';



const skills = () => {
  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'JavaScript', value: 75 },
    { name: 'React', value: 80 },
    { name: 'Node.js', value: 65 },
    { name: 'MySQL', value: 60 },
    { name: 'MongoDB', value: 60 },
    { name: 'MERN', value: 60 },
    { name: 'Python', value: 60 },
    { name: 'C++', value: 60 },
    { name: 'C#', value: 60 },
    { name: 'Unreal Engine', value: 90 },
  ];


  return (
    <section>
      <SkillBar skills={skills} />
    </section>
  )
}

export default skills

