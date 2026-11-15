import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: false,
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements {

  codingAchievements = [
    {
      title: 'LeetCode Problem Solving',
      value: '150+',
      description: 'Problems solved across data structures and algorithms.',
      platform: 'LeetCode'
    },
    {
      title: 'HackerRank Java',
      value: '3★',
      description: 'Achieved a three-star rating in Java programming.',
      platform: 'HackerRank'
    },
    {
      title: 'Logic Fest',
      value: '1st Prize',
      description: 'Recognized for logical thinking and problem-solving.',
      platform: 'Competition'
    },
    {
      title: 'Prompt Paradox',
      value: 'Winner',
      description: 'Achievement in a prompt-based competition.',
      platform: 'Competition'
    }
  ];

  hackathons = [
    {
      name: 'Tensor 24-Hour Hackathon',
      organizer: 'SRM Institute of Science and Technology, Trichy',
      description: 'Participated in a 24-hour hackathon focused on developing solutions through teamwork and technical problem-solving.',
      duration: '24 Hours'
    },
    {
      name: '12-Hour Hackathon',
      organizer: 'Prince Institutions',
      description: 'Participated in a collaborative hackathon involving idea development and technical implementation.',
      duration: '12 Hours'
    },
    {
      name: 'IBM TGMC',
      organizer: 'IBM',
      description: 'Participated in The Great Mind Challenge, gaining exposure to project-based software development.',
      duration: 'Project Participation'
    }
  ];

  activities = [
    {
      title: 'Smart Canteen',
      type: 'Conference Presentation',
      description: 'Presented a project concept related to a smart canteen system.'
    },
    {
      title: 'IoT Workshop',
      type: 'Technical Workshop',
      description: 'Participated in a workshop exploring Internet of Things concepts.'
    },
    {
      title: 'AI Workshop',
      type: 'Technical Workshop',
      description: 'Explored introductory concepts and applications of Artificial Intelligence.'
    },
    {
      title: 'Cloud Computing Workshop',
      type: 'Technical Workshop',
      description: 'Gained exposure to cloud computing concepts and technologies.'
    }
  ];

  codingProfiles = [
    {
      name: 'LeetCode',
      username: 'DivyaXavier',
      url: 'https://leetcode.com/u/DivyaXavier/'
    },
    {
      name: 'HackerRank',
      username: 'Java – 3 Stars',
      url: 'https://www.hackerrank.com/'
    },
    {
      name: 'GitHub',
      username: 'Xavierdivya',
      url: 'https://github.com/Xavierdivya'
    }
  ];
}