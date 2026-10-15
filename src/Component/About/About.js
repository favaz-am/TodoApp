import React from 'react'
import './About.css'

export default function About() {
  return (
   <div className="about-page">
  <h1>About TodoApp</h1>
  <p>
    TodoApp is a simple and beautiful task manager designed to help you 
    organize your day efficiently.
  </p>
  <h2>Features</h2>
  <ul>
    <li> Add, edit, and delete tasks</li>
    <li> Mark tasks as completed</li>
    <li> Clean and minimal neumorphic design</li>
    <li> Built with React</li>
  </ul>
  <h2>Why TodoApp?</h2>
  <p>
    I built this app to practice React and share a lightweight productivity 
    tool with others.
  </p>
</div>

  )
}
