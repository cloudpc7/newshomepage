import retro from "../images/image-retro-pcs.jpg"
import laptop from "../images/image-top-laptops.jpg"
import gaming from "../images/image-gaming-growth.jpg"

export default function Footer() {
  return (
    <div className="footer">
      <div className="topics">
        <div className="topic-image">
          <img src={retro} alt="retro pc" className="retro-pc"/>
        </div>
        <div className="topic-content">
          <p className="topic-number">01</p>
          <a className="topic-title" href="#review">Reviving Retro PCs</a>
          <p className="topic-text">What happens when old PCs<br/> are given modern upgrades?</p>
        </div>
      </div>
      <div className="topics">
        <div className="topic-image">
          <img src={laptop}  alt="laptop" className="laptop"/>
        </div>
        <div className="topic-content">
          <p className="topic-number">02</p>
          <a className="topic-title" href="#laptops">Top 10 Laptops of 2022</a>
          <p className="topic-text">Our best picks for various<br/> needs and budgets.</p>
        </div>
      </div>
      <div className="topics-gaming">
        <div className="topic-image">
          <img src={gaming} alt="gaming" className="gaming"/>
        </div>
        <div className="topic-content">
          <p className="topic-number">03</p>
          <a className="topic-title" href="#retro">Reviving Retro PCs</a>
          <p className="topic-text">How the pandemic has sparked<br/> fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
