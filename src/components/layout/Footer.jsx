import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="ff">
        <h3>
          Organized by <b>VENKAT'S TIME</b>
        </h3>
        <p>An Academy of Excellence</p>
        <p>An ISO & MSME certified company</p>
      </div>
      <div className="footer-logo">
        <img
          src={`${import.meta.env.BASE_URL}/venkatLogo.jpg`}
          alt="venkat's time logo"
        />
        <img
          src={`${import.meta.env.BASE_URL}/isoLogo.avif`}
          alt="iso certified company"
        />
      </div>

      <div className="fs">
        <h3>Industry Associates:</h3>
        <div className="fss">
          {/* <p>Skillora</p> */}
          <img
            src={`${import.meta.env.BASE_URL}/skilloraLogo.jpg`}
            alt="Skillora logo"
          />
          {/* <p>|</p> */}
          {/* <p>Vignora Edge</p> */}
          <img
            src={`${import.meta.env.BASE_URL}/logo.png`}
            alt="Vignora logo"
            className="vignora"
          />
          {/* <p>|</p> */}
          {/* <p>Heeltech</p> */}
          <img
            src={`${import.meta.env.BASE_URL}/heelTech.jpeg`}
            alt="HeelTech"
          />
        </div>
      </div>
    </footer>
  );
};
