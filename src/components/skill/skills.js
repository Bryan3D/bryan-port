import React from 'react'
import SkillBar from 'react-skillbars';
import './skills.css';



const skills = () => {
  const skills = [
    {type: 'HTML', level: 90 },
    {type: 'CSS', level: 80 },
    {type: 'JavaScript', level: 75 },
    {type: 'React', level: 80 },
    {type: 'Node.js', level: 65 },
    {type: 'MySQL', level: 60 },
    {type: 'MongoDB', level: 60 },
    {type: 'NoSQL', level: 60 },
    {type: 'Python', level: 60 },
    {type: 'C++', level: 60 },
    {type: 'C#', level: 60 },
    {type: 'Unreal Engine', level: 90 },
    {type: 'UNITY Engine', level: 90 },
    {type: 'Blender', level: 90 },
    {type: 'Adobe Photoshop', level: 90 },
    
  ];

  const colors = {
    bar: "rgb(57, 174, 232)",
    title: {
      text: "#E4E9E7",
      background: "rgba(77,181,255,0.4)"
    }
  };
  


  return (
    <section id='skills'>
    
        <h5>Softwares Skills of Bryan A Quero</h5>
        <h2>Skills</h2>
      <SkillBar skills={skills} height={'4vh'} colors={colors} />
    </section>
  )
}

export default skills

