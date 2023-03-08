import React from 'react'
import SkillBar from 'react-skillbars';
import '../../styles.css'



const skills = () => {
  // Skills bar for the page
  const skills = [
    {type: 'HTML', level: 90 },
    {type: 'CSS', level: 80 },
    {type: 'JavaScript', level: 80 },
    {type: 'React', level: 70 },
    {type: 'Node.js', level: 75 },
    {type: 'MySQL', level: 60 },
    {type: 'MongoDB', level: 60 },
    {type: 'NoSQL', level: 60 },
    {type: 'Python', level: 75 },
    {type: 'C++', level: 70 },
    {type: 'C#', level: 85 },
    {type: 'Unreal Engine', level: 90 },
    {type: 'UNITY Engine', level: 90 },
    {type: 'Blender', level: 90 },
    {type: 'Adobe Photoshop', level: 90 },
    
  ];

  const colors = {
    // Text and Bar color for the skills bar
    bar: "rgb(57, 174, 232)",
    title: {
      text: "#E4E9E7",
      background: "rgba(77,181,255,0.4)"
    }
  };
  


  return (
    <section id='skills'>
    {/* Skills bars Title */}
      <h5 className='text-light'>Softwares Skills of Bryan A Quero</h5>
      <h2>Skills</h2>
      <SkillBar skills={skills} height={'4vh'} colors={colors} />
    </section>
  )
}

export default skills

