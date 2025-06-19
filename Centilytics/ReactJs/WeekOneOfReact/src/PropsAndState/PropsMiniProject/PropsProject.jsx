import React from 'react'
import Cart from './Cart'

const PropsProject = () => {

    const users = [
        {
          level: "pro",
          name: "Ava Morgan",
          position: "Frontend Developer",
          description: "Passionate about crafting sleek UI and seamless user experiences.",
          profilePicture: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          level: "beginner",
          name: "Liam Scott",
          position: "Web Developer Intern",
          description: "Learning web technologies and building small projects daily.",
          profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          level: "intermediate",
          name: "Sophia Brown",
          position: "UI/UX Designer",
          description: "Design thinker focused on usability and accessibility.",
          profilePicture: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          level: "pro",
          name: "Noah Wilson",
          position: "Full Stack Engineer",
          description: "Loves solving complex problems with clean code.",
          profilePicture: "https://randomuser.me/api/portraits/men/54.jpg"
        },
        {
          level: "beginner",
          name: "Emma Davis",
          position: "Student Developer",
          description: "Exploring the world of coding, one bug at a time.",
          profilePicture: "https://randomuser.me/api/portraits/women/91.jpg"
        },
        {
          level: "intermediate",
          name: "Jackson Lee",
          position: "Backend Developer",
          description: "Enjoys building scalable and secure server-side applications.",
          profilePicture: "https://randomuser.me/api/portraits/men/76.jpg"
        },
        {
          level: "pro",
          name: "Olivia Taylor",
          position: "Software Architect",
          description: "Architecting robust systems with a passion for performance.",
          profilePicture: "https://randomuser.me/api/portraits/women/81.jpg"
        },
        {
          level: "intermediate",
          name: "Ethan Martinez",
          position: "DevOps Engineer",
          description: "Automating deployments and optimizing CI/CD pipelines.",
          profilePicture: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          level: "beginner",
          name: "Mia Anderson",
          position: "Junior QA Tester",
          description: "Learning test automation and improving app reliability.",
          profilePicture: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
          level: "pro",
          name: "Lucas Thompson",
          position: "Mobile App Developer",
          description: "Creating intuitive mobile apps with high performance.",
          profilePicture: "https://randomuser.me/api/portraits/men/85.jpg"
        }
      ];
      

  return (
    <div className='props-project'> 
      {
         users.map( elem => <Cart level = {elem.level} name={elem.name} position ={elem.position} description = {elem.description} profilePicture = {elem.profilePicture}/>
         )
      }        
    </div>
  )
}

export default PropsProject