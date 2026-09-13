import { useState } from 'react';

const image = (name) => `/assets/Images/${name}`;

const services = [
  { icon: 'icon_104.svg', label: 'Home Loan', tone: 'soft' },
  { icon: 'icon_105.svg', label: 'Travel Insurance', tone: 'active' },
  { icon: 'icon_106.svg', label: 'Insure the Car', tone: 'soft' },
  { icon: 'icon_107.svg', label: 'Health Insurance', tone: 'soft' },
];

const posts = [
  { image: 'blog_img_09.jpg', date: '23 APR, 2022', title: 'A Discount Cartridge dsu is Better Ever.' },
  { image: 'blog_img_10.jpg', date: '14 MARCH, 2022', title: 'Truck Side Advertising Isn It Time for action.' },
  { image: 'blog_img_11.jpg', date: '27 FEB, 2022', title: 'A Discount Cartridge dsu is Better Ever.' },
];

function Header() {
  const menus = {
    Home: { className: 'home-menu', columns: [{ title: 'Business', items: ['Insurance', 'Web Hosting', 'Education', 'N.P. Charity', 'Real Estate'] }, { title: 'Landing', items: ['Sass Product', 'App Landing', 'Crypto', 'Personal Portfolio'] }, { title: 'Agency', items: ['Agency Modern', 'SEO & Digital Agency', 'Design Agency', 'Lead Generation'] }] },
    Pages: { className: 'pages-menu', items: ['About Us', 'Services', 'Our Team', 'Pricing', 'Features', 'Other Pages'] },
    Portfolio: { className: 'portfolio-menu', items: ['Portfolio 01', 'Portfolio 02', 'Portfolio 03', 'Portfolio 04', 'Portfolio 05', 'Portfolio 06', 'Portfolio Details'] },
    Blog: { className: 'blog-menu', items: ['List With Sidebar', 'Grid With Sidebar', 'Grid Layout', 'Blog Details'] },
    Contact: { className: 'contact-menu', items: ['Contact - Insurance', 'Contact - Agency', 'Contact - Web Hosting', 'Contact - L.Generation'] },
  };
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid page-container">
          <a className="brand" href="#top">Jano.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-4">
              {['Home', 'Pages', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <li className="nav-item dropdown-nav" key={item}>
                  <a className={`nav-link ${index === 0 ? 'active' : ''}`} href={`#${item.toLowerCase()}`}>
                    {item} <i className="bi bi-chevron-down" />
                  </a>
                  {menus[item].columns ? <div className={`nav-dropdown mega-menu ${menus[item].className}`}>{menus[item].columns.map((column) => <div className="menu-column" key={column.title}><a className="menu-heading" href={`#${column.title.toLowerCase()}`}>{column.title}</a>{column.items.map((entry) => <a href="#services" key={entry}>{entry}</a>)}</div>)}</div> : <div className={`nav-dropdown ${menus[item].className}`}>{menus[item].items.map((entry) => <a href="#services" key={entry}>{entry}{item === 'Pages' && <i className="bi bi-chevron-right" />}</a>)}</div>}
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <button className="user-button" aria-label="Account"><i className="bi bi-person" /></button>
              <a className="primary-button" href="#contact">Contact us</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <img className="hero-decoration hero-decoration-left" src={image('ils_12.png')} alt="" />
      <img className="hero-decoration hero-decoration-right" src={image('ils_11.png')} alt="" />
      <div className="container page-container hero-content text-center">
        <h1>Everything for your<br /><span>Home</span> &amp; Future.</h1>
        <p>Instant everything. Incredible prices. Big heart.</p>
        <div className="search-box">
          <select aria-label="Select insurance type" defaultValue="">
            <option value="" disabled>Select insurance type..</option>
            <option>Home insurance</option>
            <option>Travel insurance</option>
            <option>Health insurance</option>
          </select>
          <input type="text" placeholder="Your Zip code" aria-label="Your Zip code" />
          <button className="primary-button">Search</button>
        </div>
        <div className="approved"><i className="bi bi-check2" /> An UK insurer approved by the UICO.</div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="features-section section-space">
      <div className="container feature-grid">
        <article className="feature-card card-yellow"><h3>Regulated by<br />WICO.</h3><p>100% Reliable</p><i className="bi bi-megaphone feature-icon" /></article>
        <article className="feature-card card-white"><h3>Get Instant support<br />all day.</h3><p>Claim Support</p><i className="bi bi-cash-coin feature-icon" /></article>
        <article className="feature-card card-blue"><h3>Unbiased advice<br />from expert.</h3><p>Consultation</p><i className="bi bi-cloud-check feature-icon" /></article>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story-section section-space">
      <div className="container story-grid">
        <div className="story-visual">
          <div className="dot-grid" />
          <img src={image('img_53.png')} alt="Jano insurance team member" />
          <div className="stat-card stat-left"><strong>Happier</strong><span>Customers</span></div>
          <div className="stat-card stat-top"><strong>30+</strong><span>Insurance Item</span></div>
          <div className="stat-card stat-bottom"><strong>Saller Leads</strong><span>Who are listing soon</span></div>
        </div>
        <div className="story-copy">
          <button className="play-button" aria-label="Play video"><i className="bi bi-play-fill" /></button>
          <h2>The team signed<br /><span>~$7,000,000</span> in new<br />business in July.<br />Accelerator has been a<br />large part of that.</h2>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section section-space" id="services">
      <div className="container">
        <div className="section-heading split-heading"><h2>Discover all our<br />Services.</h2><a className="primary-button" href="#contact">View all Services</a></div>
        <div className="services-grid">
          {services.map((service) => <article className={`service-card ${service.tone}`} key={service.label}><img src={image(service.icon)} alt="" /><small>I want</small><h3>{service.label}</h3><span className="service-arrow"><i className="bi bi-arrow-right" /></span></article>)}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const [open, setOpen] = useState(1);
  const rows = ['Lowest Price.', 'Fast Process & Loan', 'Guaranteed Return & Claim'];
  return (
    <section className="why-section section-space">
      <div className="container why-grid">
        <div className="why-stats">
          <div className="why-dots why-dots-top" aria-hidden="true" />
          <article className="why-stat yellow"><strong>10million+</strong><p>Customers trust us &amp; have<br />bought insurance.</p></article>
          <article className="why-stat purple"><strong>50+<br />Insurance</strong><p>Partnered with us so that<br />you can compare easily &amp;<br />transparently</p></article>
          <article className="why-stat cyan"><strong>Claims</strong><p>Get Support by<br />expert easily.</p></article>
          <div className="why-dots why-dots-bottom" aria-hidden="true" />
        </div>
        <div className="why-copy"><small>WHY CHOOSE US</small><h2>What makes us the<br />best.</h2><div className="accordion-list">{rows.map((row, index) => <button className={`accordion-row ${open === index ? 'open' : ''}`} key={row} onClick={() => setOpen(open === index ? -1 : index)}><span><i className={`bi ${index === 0 ? 'bi-bag' : index === 1 ? 'bi-send' : 'bi-shield-check'}`} />{row}</span><i className={`bi bi-chevron-${open === index ? 'up' : 'down'}`} />{open === index && <p>Practice what you learned on realistic lorem quiz test questions testing.</p>}</button>)}</div></div>
      </div>
    </section>
  );
}

function Feedback() {
  return <section className="feedback-section section-space"><div className="container"><h2>Client Feedback</h2><div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel"><div className="carousel-inner">{[0, 1, 2, 3].map((slide) => <div className={`carousel-item ${slide === 0 ? 'active' : ''}`} key={slide}><div className="feedback-grid">{['img_54.jpg', 'img_55.jpg', 'img_54.jpg'].map((avatar, item) => <article className="feedback-card" key={`${slide}-${item}`}><h3>Very Solid!!</h3><div className="stars">★★★★★</div><p>They not only understand what I say but read between the lines and also give me ideas of my own.</p><strong>Rashed Kabir, <span>California</span></strong><img className="feedback-avatar" src={image(avatar)} alt="Rashed Kabir" /><i className="bi bi-quote quote-mark" /></article>)}</div></div>)}</div><div className="carousel-indicators"><button type="button" data-bs-target="#feedbackCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" /><button type="button" data-bs-target="#feedbackCarousel" data-bs-slide-to="1" aria-label="Slide 2" /><button type="button" data-bs-target="#feedbackCarousel" data-bs-slide-to="2" aria-label="Slide 3" /><button type="button" data-bs-target="#feedbackCarousel" data-bs-slide-to="3" aria-label="Slide 4" /></div></div></div></section>;
}

function MobileApp() {
  return <section className="app-section section-space"><div className="container app-grid"><div><small>MOBILE APP</small><h2>Download our Jano<br />Application.</h2><p>Get control of all your insurance needs anywhere, anytime</p><ul><li>Compare different insurance Item</li><li>Buy, store and share all your policies online</li><li>Email &amp; Live chat.</li></ul><div className="store-buttons"><img src={image('playstore.png')} alt="Get it on Google Play" /><img src={image('apple-black.png')} alt="Download on the App Store" /></div></div><div className="phone-stack"><img className="phone-back" src={image('img_57.png')} alt="Jano app giveback screen" /><img className="phone-front" src={image('img_56.png')} alt="Jano app renters screen" /></div></div></section>;
}

function Contact() {
  return <section className="contact-section section-space" id="contact"><div className="form-callout" aria-hidden="true"><span>Fill the<br />form</span><img src={image('shape_140.svg')} alt="" /></div><div className="container contact-card"><form><input type="text" placeholder="Your name*" aria-label="Your name" /><input type="email" placeholder="Email*" aria-label="Email" /><textarea placeholder="Your message*" aria-label="Your message" /><button className="primary-button" type="button">SEND MESSAGE</button><p>Been here before? <strong>Check your query</strong></p></form><div className="contact-copy"><i className="bi bi-headset" /><h2>Let’s talk with<br />experience<br />advisors.</h2><p>eiusmod tempor incididunt. Ut enim minim veniam,<br />quis nostrud elit lorem dolor.</p></div></div></section>;
}

function Blog() {
  return <section className="blog-section section-space" id="blog"><div className="container"><div className="section-heading split-heading"><h2>Our Blog</h2><a className="primary-button" href="#blog">Go to Blog</a></div><div className="blog-grid">{posts.map((post) => <article className="blog-card" key={post.image}><img src={image(post.image)} alt="" /><small>{post.date}</small><h3>{post.title}</h3><a href="#blog">Read More</a></article>)}</div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><img className="footer-decoration footer-decoration-left" src={image('ils_14.png')} alt="" /><img className="footer-decoration footer-decoration-right" src={image('ils_13.png')} alt="" /><div className="container footer-grid"><div><a className="brand footer-brand" href="#top">Jano.</a><p>Best Insurance Company.</p><small>© 2026 - 2027 jano inc.</small></div><div><h3>Links</h3><a href="#top">Home</a><a href="#services">Pricing</a><a href="#top">About us</a><a href="#contact">Careers</a><a href="#services">Features</a><a href="#blog">Blog</a></div><div><h3>Services</h3><a href="#services">Health Insurance Plans</a><a href="#services">Car Insurance</a><a href="#services">Investment</a><a href="#services">Mediclaiam Policy</a><a href="#services">Others</a><a href="#services">Health Insurance</a></div><div><h3>Address</h3><p>2190 Zinai terrace, Lake view<br />house state, 10 no road.</p><div className="socials"><a href="#top"><i className="bi bi-facebook" /></a><a href="#top"><i className="bi bi-twitter" /></a><a href="#top"><i className="bi bi-linkedin" /></a></div></div></div></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><FeatureCards /><Story /><Services /><WhyChoose /><Feedback /><MobileApp /><Contact /><Blog /></main><Footer /><a className="back-to-top" href="#top" aria-label="Back to top"><i className="bi bi-arrow-up" /></a></>;
}
