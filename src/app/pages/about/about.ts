
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  introduction = `I am a Computer Science and Engineering student at
  PSNA College of Engineering and Technology, passionate about
  software development and problem-solving.

  My technical interests include Java development, full-stack
  web development, database management, and modern frontend
  technologies. I enjoy transforming ideas into practical
  applications and continuously improving my technical skills.

  I believe in learning by building projects, exploring new
  technologies, and solving real-world problems.`;

  education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'PSNA College of Engineering and Technology',
      period: 'Sep 2023 – Aug 2027',
      score: '8.73 CGPA',
      status: 'Currently Pursuing'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: "St. Joseph's Girls Higher Secondary School",
      period: 'Jun 2022 – Mar 2023',
      score: '91%',
      status: 'Completed'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: "St. Joseph's Girls Higher Secondary School",
      period: 'Jun 2020 – Mar 2021',
      score: 'Passed',
      status: 'COVID-19 Batch'
    }
  ];

  skillGroups = [
    {
      category: 'Programming Languages',
      icon: '01',
      skills: ['Java', 'JavaScript', 'Python', 'C', 'C++']
    },
    {
      category: 'Web Development',
      icon: '02',
      skills: ['HTML5', 'CSS3', 'Angular', 'React', 'Spring Boot', 'REST APIs']
    },
    {
      category: 'Database Technologies',
      icon: '03',
      skills: ['MySQL', 'MongoDB', 'SQL', 'JDBC']
    },
    {
      category: 'Tools & Platforms',
      icon: '04',
      skills: ['Git', 'GitHub', 'Docker Basics', 'Postman', 'Eclipse', 'IntelliJ IDEA']
    },
    {
      category: 'Core Computer Science',
      icon: '05',
      skills: ['OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks']
    }
  ];

  interests = [
    {
      title: 'Full Stack Development',
      description: 'Building responsive applications with frontend and backend technologies.'
    },
    {
      title: 'Problem Solving',
      description: 'Practising data structures, algorithms, and logical programming challenges.'
    },
    {
      title: 'Learning New Technologies',
      description: 'Exploring modern frameworks, development tools, and software practices.'
    }
  ];

}
