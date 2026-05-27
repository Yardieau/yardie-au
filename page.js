const categories = [
  ['🚗', 'Cars & Vehicles'], ['🔧', 'Tools & Equipment'], ['🚚', 'Trailers & Caravans'],
  ['🏗️', 'Work & Trade'], ['🚜', 'Farm & Rural'], ['📺', 'Electronics'],
  ['🧺', 'White Goods'], ['🪴', 'Home & Garden'], ['🛋️', 'Furniture'],
  ['🍼', 'Kids & Baby'], ['🚲', 'Sports & Outdoors'], ['🎸', 'Hobbies & Collectables'],
  ['👕', 'Clothing & Shoes'], ['⋯', 'More Categories'],
]

const listings = [
  ['2020 Toyota Hilux SR5', 'Brisbane, QLD', '$38,500', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80', true],
  ['CAT 305.5 Excavator', 'Perth, WA', '$45,000', 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80', true],
  ['8x5 Box Trailer', 'Melbourne, VIC', '$2,200', 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80', true],
  ['Samsung 65” Smart TV', 'Adelaide, SA', '$850', 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80', false],
  ['LG 8kg Front Loader', 'Gold Coast, QLD', '$450', 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80', false],
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <img src="/yardie-logo.svg" alt="Yardie.au - Buy it. Sell it. Yard it." className="logoImage" />
        <nav>
          <a>Browse Categories</a>
          <div className="searchTop">🔎 Search for anything...</div>
          <a>♡ Favourites</a>
          <a>💬 Messages</a>
          <a>Login</a>
          <button>Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <h1>AUSTRALIA’S LOCAL <span>ONLINE MARKETPLACE</span></h1>
          <p>Buy, sell and find just about anything.<br />From tools to toys and everything in between.</p>
          <div className="heroActions">
            <button className="primary">🏷️ Post an Ad — $2.99</button>
            <button className="secondary">🔎 Browse Listings</button>
          </div>
          <div className="trust">
            <span>🏷️ $2.99 to list</span><span>🛡️ Safe & Secure</span><span>📍 Local & Australia Wide</span>
          </div>
        </div>
        <div className="postBox"><button>＋ Post an Ad</button><small>Keep it online indefinitely</small></div>
      </section>

      <section className="categoryStrip">
        {categories.map(([icon, name]) => <div className="category" key={name}><div className="catIcon">{icon}</div><div>{name}</div></div>)}
      </section>

      <section className="contentGrid">
        <div>
          <div className="sectionHead"><h2>Featured Listings</h2><a>View all listings ›</a></div>
          <div className="listings">
            {listings.map(([title, place, price, image, featured]) => (
              <article className="card" key={title}>
                <div className="imageWrap">
                  <img src={image} alt={title} />
                  {featured && <div className="badge">FEATURED</div>}
                  <div className="heart">♡</div>
                </div>
                <div className="cardBody"><h3>{title}</h3><p>📍 {place}</p><strong>{price}</strong></div>
              </article>
            ))}
          </div>
        </div>

        <aside className="why">
          <h2>Why Yardie.au?</h2>
          <div className="benefit"><span>🏷️</span><div><h3>Low Cost to List</h3><p>Put your ad online from just $2.99.</p></div></div>
          <div className="benefit"><span>📍</span><div><h3>Local & Australia Wide</h3><p>Find buyers and sellers near you.</p></div></div>
          <div className="benefit"><span>🛡️</span><div><h3>Safe & Secure</h3><p>Report scams and stay protected.</p></div></div>
          <div className="benefit"><span>⭐</span><div><h3>Feature Your Ad</h3><p>Get more views from only $4.99.</p></div></div>
          <button>Find Out More</button>
        </aside>
      </section>

      <section className="pricing">
        <div className="priceCard"><div className="priceIcon">🏷️</div><div><h3>List for $2.99</h3><p>Keep your ad online indefinitely.</p></div></div>
        <div className="priceCard featuredPrice"><div className="priceIcon">⭐</div><div><h3>Feature Your Ad</h3><p>Boost your listing for $4.99.</p></div></div>
        <div className="priceCard"><div className="priceIcon">💬</div><div><h3>Chat Safely</h3><p>Message buyers and sellers directly.</p></div></div>
        <div className="priceCard"><div className="priceIcon">🛡️</div><div><h3>Report & Protect</h3><p>Help keep Yardie.au safe for everyone.</p></div></div>
      </section>

      <section className="postPanel"><div><h2>Ready to sell?</h2><p>List your item from just $2.99. Featured upgrades are only $4.99.</p></div><button>Post an Ad</button></section>
      <footer><img src="/yardie-logo.svg" alt="Yardie.au" className="footerLogo" /></footer>
    </main>
  )
}