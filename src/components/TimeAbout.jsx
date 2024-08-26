import React from 'react';
import styles from '../styles/TimeAbout.module.css';
import Navbar from '../components/Navbar';

const TimeAbout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.timelineWrapper}>
        <section className={styles.timeline}>
          <h1>Linha do Tempo de Carreira</h1>

          {/* Ano 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>Systems Analyst</h2>
              <ul>
                <li><strong>Fhits</strong> (2022 - 2024)</li>
                <p>During my time at Fhits, I was responsible for the continuous development and enhancement of the company's internal system, focusing on:</p>
                <p>Frontend and backend development using PHP, JavaScript, HTML, and CSS.</p>
                <p>Implementation and optimization of API integrations, with a focus on META and ChatGPT APIs.</p>
              </ul>
            </div>
          </div>

          {/* Ano 2-3 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>Housekeeper</h2>
              <ul>
                <li><strong>Wisp Resort</strong> (2021 - 2022)</li>
                <p>I participated in a three-month exchange program in the United States working as a housekeeper. During this period, I took part in a work program, which allowed me to practice English with native speakers and experience a unique cultural immersion.</p>
              </ul>
            </div>
          </div>

          {/* Ano 4-5 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>Support</h2>
              <ul>
                <li><strong>1001 Cupons</strong> (2021 - 2021)</li>
                <p>Creation and distribution of coupons for sales websites, utilizing SEO, marketing, and web writing skills.</p>
              </ul>
            </div>
          </div>
          {/* Ano 4-5 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h2>Internship</h2>
              <ul>
                <li><strong>TravelMate Intecâmbio</strong> (2018 - 2019)</li>
                <p>I completed a six-month internship at a travel and exchange company in the areas of social media, design, and marketing. After the initial six months, my contract was extended for an additional six months. During the extension, I worked in customer service, assisting the agency's consultant by making initial contact via phone, email, and WhatsApp.</p>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <section className={styles.skills}>
            <h2 className={styles.title2}>Habilidades</h2>
            <div className={styles.box}>
              <h4>HTML</h4>
              <div className={styles.percent}>
                <div style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>CSS</h4>
              <div className={styles.percent}>
                <div style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>JavaScript</h4>
              <div className={styles.percent}>
                <div style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>PHP</h4>
              <div className={styles.percent}>
                <div style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>C</h4>
              <div className={styles.percent}>
                <div style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>MySQL</h4>
              <div className={styles.percent}>
                <div style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>.React</h4>
              <div className={styles.percent}>
                <div style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>Ajax</h4>
              <div className={styles.percent}>
                <div style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className={styles.box}>
              <h4>NodeJS</h4>
              <div className={styles.percent}>
                <div style={{ width: '15%' }}></div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default TimeAbout;
