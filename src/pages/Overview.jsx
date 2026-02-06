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
            <TiTick /> Build modern backend applications using{" "}
            <b>Spring Boot</b>
          </p>
          <p>
            <TiTick /> Design and develop <b>RESTful APIs</b> with industry best
            practices
          </p>
          <p>
            <TiTick /> Work with databases using{" "}
            <b>Spring Data JPA & Hibernate.</b>
          </p>
          <p>
            <TiTick /> Understand{" "}
            <b>how AI integrates with Java applications</b>
          </p>
          <p>
            <TiTick /> Integrate <b>AI APIs</b> into Spring Boot apps (chatbots
            & smart features)
          </p>
          <p>
            <TiTick /> Develop an <b>AI-powered mini project</b> for resume and
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
            Gain practical knowledge useful for <b>placements & internships</b>
          </p>
          <p>
            <TiTick />
            Add a <b>real-time AI + Spring Boot project</b> to their resume
          </p>
          <p>
            <TiTick />
            Stay aligned with <b>latest 2026 IT industry trends</b>
          </p>
        </div>
      </div>
      <div className="over-theme" data-aos="fade-up">
        <h1>Workshop Theme</h1>
        <h3>Gen Z Oriented – Future-Ready Tech Skills</h3>
        <p>
          The IT industry in <b>2026</b> demands developers who can combine{" "}
          <b>strong backend knowledge with AI-powered features.</b> This
          workshop is specially designed to help students and professionals
          understand how modern applications are built using <b>Spring Boot</b>{" "}
          and how{" "}
          <b>
            Artificial Intelligence can be integrated into real-world systems.
          </b>
        </p>
        This is not just theory — participants will gain{" "}
        <b>hands-on exposure</b> to building intelligent backend applications
        aligned with current industry needs.
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
