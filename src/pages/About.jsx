import "../styles/about.css";

export const About = () => {
  return (
    <div className="about-page">
      <div className="heading" data-aos="fade-up">
        <h1>ABOUT</h1>
        <h1>VIGONORA EDGE</h1>
        <p className="sub-heading">
          "Vignora EDGE - Quality Tech Education for Every Corner, For
          Everyone."
        </p>
      </div>
      <p data-aos="fade-up">
        Vignora EDGE is committed to making high-quality technology education
        accessible to everyone, everywhere. We offer industry-relevant courses
        in Java, Advanced Java, Spring,
      </p>
      <p data-aos="fade-up">
        Spring Boot, Microservices, and Full Stack Development, along with
        front-end technologies like HTML, CSS, JavaScript, Bootstrap, and React
        JS. Our programs are designed to build real-world skills through
        practical learning, guided instruction, and certification that adds
        value to your career. By keeping our courses affordable without
        compromising on quality, Vignora EDGE ensures that learners from every
        background can gain the knowledge, confidence, and technical expertise
        needed to succeed in today’s competitive IT industry.
      </p>
      <div className="second-about" data-aos="fade-up">
        <div className="heading">
          <h1>RESOURCE PERSON:</h1>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}/speaker.jpg`}
          alt="speaker"
          className="about-speaker-img"
        />
        <h2>Mr.G.Jaya Krishna</h2>

        <p data-aos="fade-up">
          Jaya Krishna is a Senior Java Developer and passionate technical
          educator with strong expertise in DSA, Core & Advanced Java, Spring
          Framework, Spring Boot, and Microservices architecture. He also
          possesses solid frontend development skills in HTML, CSS, JavaScript,
          Bootstrap, and React.js, enabling him to design and develop complete
          end-to-end web applications.
        </p>
        <p data-aos="fade-up">
          As a trainer, he focuses on delivering practical, industry-ready
          skills that bridge the gap between academic learning and real-world
          software development. In this workshop, he will demonstrate how to
          build industry-ready Spring Boot applications integrated with AI,
          aligned with modern technology trends and industry demands.
        </p>
      </div>
      <div className="second-about" data-aos="fade-up">
        <div className="heading">
          <h1>VENKAT'S TIME</h1>
        </div>
        <p data-aos="fade-up">
          Vignora EDGE is committed to making high-quality technology education
          accessible to everyone, everywhere. We offer industry-relevant courses
          in Java, Advanced Java, Spring,
        </p>
        <p data-aos="fade-up">
          Spring Boot, Microservices, and Full Stack Developal-world skills
          through practical learning, guided
        </p>
      </div>
    </div>
  );
};
