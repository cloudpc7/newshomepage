import web from "../images/image-web-3-desktop.jpg"

export default function Hero() {
  return (
    <>
    <div className="hero">
      <img
        src={web}
        className="news-image"
        alt="web desktop"
      />
      <h1 className="hero-title">The Bright Future of Web 3.0?</h1>
      <div className="hero-content">
        <p className="hero-text">
          We dive into the next evolution of the web that claims to put the power
          of the platforms back into the hands of the people. But is it really
          fulfilling its promise?
        </p>
        <button className="hero-btn">READ MORE</button>
      </div>
    </div>
    <div className="news-feeds">
      <h2 className="news-logo">New</h2>
      <div className="news news-hydro">
        <p className="news-title">Hydrogen VS Electric Cars</p>
        <p className="news-text">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="news news-artist">
        <p className="news-title">The Downsides of AI Artistry</p>
        <p className="news-text">What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <div className="news news-vc">
        <p className="news-title">Is VC Funding Drying Up?</p>
        <p className="news-text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
    </>
  );
}
