import "../styles/brochure.css";

export const Brochure = () => {
  const brochureUrl = `${import.meta.env.BASE_URL}brochure.pdf`;

  const handleDownload = async () => {
    try {
      const response = await fetch(brochureUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = url;
      a.download = "SpringBoot-AI-Workshop-Brochure.pdf";
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      alert("Failed to download brochure");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Spring Boot with AI Workshop",
        text: "Check out the workshop brochure",
        url: brochureUrl,
      });
    } else {
      await navigator.clipboard.writeText(brochureUrl);
      alert("Brochure link copied to clipboard");
    }
  };

  return (
    <section className="brochure-page" data-aos="fade-up">
      <h1>Workshop Brochure</h1>

      {/* PDF VIEWER */}
      <div className="pdf-container" data-aos="zoom-in">
        <iframe src={brochureUrl} title="Workshop Brochure" />
      </div>

      <div className="brochure-actions">
        <button onClick={handleDownload} className="download-btn">
          Download PDF
        </button>

        <button onClick={handleShare} className="share-btn">
          Share
        </button>
      </div>
    </section>
  );
};
