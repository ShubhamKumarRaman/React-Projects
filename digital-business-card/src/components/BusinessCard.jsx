import React from 'react'
import styles from './BusinessCard.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const BusinessCard = ({ user }) => {
    const copyEmail = async () => {
        await navigator.clipboard.writeText(user.email);
        alert("Email copied");
    };
    return (
        <div className={styles.card}>
            <img
                src={user.image}
                alt={user.name}
                className={styles.avatar}
            />

            <h1>{user.name}</h1>

            <p className={styles.role}>
                {user.role}
            </p>

            <div className={styles.buttons}>
                <button onClick={copyEmail}>Copy Email</button>
                <a href={`mailto:${user.email}`}>Contact</a>
            </div>

            <div>
                <a href={user.linkedin} target='_blank' rel='noneferrer'>
                    <FaLinkedin />
                </a>

                <a href={user.github} target='_blank' rel='noneferrer'>
                    <FaGithub />
                </a>

                <a href={user.twitter} target='_blank' rel='noneferrer'>
                    <FaTwitter />
                </a>
            </div>
        </div>
    )
}

export default BusinessCard
