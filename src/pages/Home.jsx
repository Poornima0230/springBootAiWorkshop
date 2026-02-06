import { useEffect, useRef, useState } from "react";
import "../styles/home.css";

export const Home = () => {
  // Set workshop date here (YYYY-MM-DDTHH:MM:SS)
  const eventDate = new Date("2026-02-14T10:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  // no button
  const [noPos, setNoPos] = useState({});
  const [showModal, setShowModal] = useState(false);

  const areaRef = useRef(null);
  const noBtnRef = useRef(null);

  // count down
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // run away
  const lastMoveRef = useRef(0);

  const moveNoButton = () => {
    const now = Date.now();
    if (now - lastMoveRef.current < 120) return;

    lastMoveRef.current = now;

    const area = areaRef.current;
    const btn = noBtnRef.current;
    if (!area || !btn) return;

    const areaRect = area.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const padding = 10;

    const maxX = areaRect.width - btnRect.width - padding;
    const maxY = areaRect.height - btnRect.height - padding;

    setNoPos({
      left: `${Math.random() * maxX + padding}px`,
      top: `${Math.random() * maxY + padding}px`,
      transform: "none",
    });
  };

  return (
    <section className="home-page">
      {/* Glass Card */}
      <div className="glass-card" data-aos="fade-up">
        <h2>One day National virtual workshop</h2>
        <h2>On</h2>
        <h1>Spring boot with AI</h1>
        <p className="subheading">Build the Future of Backend Development</p>

        {/* Countdown */}
        <div className="countdown">
          <div>
            <span>{timeLeft.days || 0}</span>
            <small>Days</small>
          </div>
          <div>
            <span>{timeLeft.hours || 0}</span>
            <small>Hours</small>
          </div>
          <div>
            <span>{timeLeft.minutes || 0}</span>
            <small>Minutes</small>
          </div>
          <div>
            <span>{timeLeft.seconds || 0}</span>
            <small>Seconds</small>
          </div>
        </div>

        {/* Event Details */}
        <div className="details">
          <p>
            <strong>Date:</strong> February 14, 2026
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM – 1:00 PM & 3:00 PM - 5:00 PM
          </p>
          <p>
            <strong>Mode:</strong> Virtual
          </p>
        </div>

        {/* Resource Person */}
        <div className="speaker">
          <img
            src={`${import.meta.env.BASE_URL}/speaker.jpg`}
            alt="Resource Person"
          />
          <div>
            <h4>Resource Person:</h4>
            <h3>MR.G.JAYA KRISHNA</h3>
            <p>Senior Java Developer and passionate technical educator.</p>
          </div>
        </div>
      </div>

      {/* interest section */}
      <div className="interest-box" data-aos="fade-up">
        <h2>Are you interested to join the workshop?</h2>

        <div
          className="interest-area"
          ref={areaRef}
          onMouseMove={moveNoButton}
          onTouchMove={moveNoButton}
        >
          <button className="yes-btn" onClick={() => setShowModal(true)}>
            Yes
          </button>

          <button className="no-btn" ref={noBtnRef} style={noPos} tabIndex={-1}>
            No
          </button>
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank you for your enthusiasm</h2>
            <p>Please register by scanning the QR Code below</p>

            <img
              src={`${import.meta.env.BASE_URL}/register.png`}
              alt="Register QR"
            />
            <a href="https://forms.gle/uicz8PtijJEJUiki8">
              https://forms.gle/uicz8PtijJEJUiki8
            </a>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};
