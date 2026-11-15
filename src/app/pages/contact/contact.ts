import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactDetails = [
    {
      label: 'Email',
      value: 'xavierdivya01@gmail.com',
      link: 'mailto:xavierdivya01@gmail.com',
      icon: '✉'
    },
    {
      label: 'Phone',
      value: '+91 9789386073',
      link: 'tel:+919789386073',
      icon: '☎'
    },
    {
      label: 'LinkedIn',
      value: 'Connect professionally',
      link: 'https://www.linkedin.com/in/divya-xavier-3b5317290',
      icon: 'in'
    },
    {
      label: 'GitHub',
      value: 'Explore my repositories',
      link: 'https://github.com/Xavierdivya',
      icon: '</>'
    },
    {
      label: 'LeetCode',
      value: 'View my coding profile',
      link: 'https://leetcode.com/u/DivyaXavier/',
      icon: '⌘'
    }
  ];

  sendMessage(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const name = form.value.name.trim();
    const email = form.value.email.trim();
    const subject = form.value.subject.trim();
    const message = form.value.message.trim();

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello Divya,\n\n${message}\n\nRegards,\n${name}\n${email}`
    );

    const mailtoLink =
      `mailto:xavierdivya01@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  }
}