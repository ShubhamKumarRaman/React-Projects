import React from 'react'
import BusinessCard from './components/BusinessCard'
import styles from './App.module.css'

const App = () => {
  const user = {
    name: "Shubham Kumar",
    role: "MERN Stack developer",
    email: "shubham@gmail.com",
    image: "/src/assets/profile.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com"
  }
  return (
    <div className={styles.container}>
      <BusinessCard user={user} />
    </div>
  )
}

export default App
