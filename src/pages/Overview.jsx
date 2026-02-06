import "../styles/overview.css";
import { TiTick } from "react-icons/ti";

export const Overview = () => {
  return (
    <div className="overview-page">
      <h1 className="over-heading" data-aos="fade-up">
        Overview
      </h1>
      <div className="over-learn" data-aos="fade-up">
        <h1>What will you learn</h1>
        <div className="points">
          <p>
            <TiTick /> Build modern backend applications using Spring Boot
          </p>
          <p>
            <TiTick /> Design and develop RESTful APIs with industry best
            practices
          </p>
          <p>
            <TiTick /> Work with databases using Spring Data JPA & Hibernate
          </p>
          <p>
            <TiTick /> Understand how AI integrates with Java applications
          </p>
          <p>
            <TiTick /> Integrate AI APIs into Spring Boot apps (chatbots & smart
            features)
          </p>
          <p>
            <TiTick /> Develop an AI-powered mini project for resume and
            interviews
          </p>
        </div>
      </div>
      <div className="over-outcomes" data-aos="fade-up">
        <h1>Workshop outcomes</h1>
        <div className="points">
          <p>By the end of the session, participants will:</p>
          <p>
            <TiTick />
            Understand how enterprise backend systems are built
          </p>
          <p>
            <TiTick />
            Know how to connect AI services with Java applications
          </p>
          <p>
            <TiTick />
            Gain practical knowledge useful for placements & internships
          </p>
          <p>
            <TiTick />
            Add a real-time AI + Spring Boot project to their resume
          </p>
          <p>
            <TiTick />
            Stay aligned with latest 2026 IT industry trends
          </p>
        </div>
      </div>
      <div className="over-theme" data-aos="fade-up">
        <h1>Workshop Theme</h1>
        <h3>Gen Z Oriented – Future-Ready Tech Skills</h3>
        <p>
          The IT industry in 2026 demands developers who can combine strong
          backend knowledge with AI-powered features. This workshop is specially
          designed to help students and professionals understand how modern
          applications are built using Spring Boot and how Artificial
          Intelligence can be integrated into real-world systems.
        </p>
        This is not just theory — participants will gain hands-on exposure to
        building intelligent backend applications aligned with current industry
        needs.
        <p></p>
      </div>
      <div className="over-join" data-aos="fade-up">
        <h1>Who can join?</h1>
        <div className="points">
          <ul>
            <li>All UG & PG Students</li>
            <li>Faculty Members</li>
            <li>Industry Professionals & Tech Enthusiasts</li>
            <li>
              No prior AI experience required. Basic Java knowledge is helpful.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
