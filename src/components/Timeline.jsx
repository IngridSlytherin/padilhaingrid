// Timeline.jsx
import React from 'react';
import styles from '../styles/Timeline.module.css'; // Certifique-se de que o caminho esteja correto

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <h1>Linha do Tempo de Carreira na Buzzvel</h1>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2>Year 1: Building a Strong Foundation</h2>
          <ul>
            <li><strong>Immersive Learning:</strong> Dive deep into Buzzvel’s ecosystem, understanding the core values, company culture, and the specifics of its technology stack.</li>
            <li><strong>Skill Enhancement:</strong> Focus on honing my existing skills and acquiring new ones essential for my role, particularly those that will help in contributing effectively to ongoing projects.</li>
            <li><strong>Team Collaboration:</strong> Actively engage with cross-functional teams to build strong working relationships and understand the diverse aspects of Buzzvel's projects.</li>
          </ul>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2>Ano 2-3: Building a Strong Foundation</h2>
          <ul>
            <li><strong>Project Leadership:</strong> Begin leading initiatives that align with Buzzvel’s strategic goals, taking ownership of their success and implementing innovative solutions.</li>
            <li><strong>Innovation and Experimentation:</strong> Start exploring new technologies and frameworks that could benefit Buzzvel, introducing pilot projects or proof-of-concepts that demonstrate value.</li>
            <li><strong>Peer Learning and Contribution:</strong> Develop internal workshops or learning sessions to share knowledge with peers, fostering a culture of continuous learning and mutual support.</li>
          </ul>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2>Ano 4-5: Strategic Leadership and Visionary Growth</h2>
          <ul>
            <li><strong>Visionary Leadership:</strong> Take on a role that involves setting the strategic direction for a segment of Buzzvel’s development efforts, potentially heading a new innovative team or project.</li>
            <li><strong>Driving Change:</strong> Lead efforts in adopting new technologies or methodologies that align with future trends, positioning Buzzvel as a leader in the tech space.</li>
            <li><strong>Global Perspective:</strong> Work towards initiatives that expand Buzzvel’s reach beyond local markets, collaborating with global teams to bring a more international perspective to the company’s growth.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;