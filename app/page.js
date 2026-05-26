const categories = [
  ['🚗', 'Cars & Vehicles'],
  ['🔧', 'Tools & Equipment'],
  ['🚚', 'Trailers & Caravans'],
  ['🏗️', 'Work & Trade'],
  ['🚜', 'Farm & Rural'],
  ['📺', 'Electronics'],
  ['🧺', 'White Goods'],
  ['🪴', 'Home & Garden'],
  ['🛋️', 'Furniture'],
  ['🍼', 'Kids & Baby'],
  ['🚲', 'Sports & Outdoors'],
  ['🎸', 'Hobbies & Collectables'],
  ['👕', 'Clothing & Shoes'],
  ['⋯', 'More Categories'],
]

const listings = [
  {
    title: '2020 Toyota Hilux SR5',
    place: 'Brisbane, QLD',
    price: '$38,500',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    title: 'CAT 305.5 Excavator',
    place: 'Perth, WA',
    price: '$45,000',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    title: '8x5 Box Trailer',
    place: 'Melbourne, VIC',
    price: '$2,200',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    title: 'Samsung 65” Smart TV',
    place: 'Adelaide, SA',
    price: '$850',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    title: 'LG 8kg Front Loader',
    place: 'Gold Coast, QLD',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
]

const benefits = [
  ['🏷️', 'Low Cost to List', 'List your ad from just $2.99.'],
  ['📍', 'Local & Australia Wide', 'Find buyers and sellers near you.'],
  ['🛡️', 'Safe & Secure', 'Report scams and stay protected.'],
  ['⭐', 'Feature Your Ad', 'Get more views from only $4.99.'],
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <div className="mark">Y</div>
          <div>
            <div className="logoText">YARDIE<span>.AU</span></div>
            <div className="tagline">BUY. SELL. YARD IT.</div>
          </div>
        </div>

        <nav>
          <a>Browse Categories</a>
          <a>Favourites</a>
          <a>Messages</a>
          <a>Login</a>
          <button>Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <div className="searchBar">
            <span>🔎</span>
            <input placeholder="Search for anything..." />
            <div className="location">📍 Australia Wide</div>
          </div>

          <h1>AUSTRALIA’S LOCAL <span>ONLINE MARKETPLACE</span></h1>
          <p>Buy, sell and find just about anything. From tools to toys and everything in between.</p>

          <div className="heroActions">
            <button className="primary">🏷️ Post an Ad — $2.99</button>
            <button className="secondary">🔎 Browse Listings</button>
          </div>

          <div className="trust">
            <span>🏷️ $2.99 to list</span>
            <span>🛡️ Safe & Secure</span>
            <span>📍 Local & Australia Wide</span>
          </div>
        </div>

        <div className="postBox">
          <button>＋ Post an Ad</button>
          <small>Keep it online indefinitely</small>
        </div>
      </section>

      <section className="categoryStrip">
        {categories.map(([icon, name]) => (
          <div className="category" key={name}>
            <div className="catIcon">{icon}</div>
            <div>{name}</div>
          </div>
        ))}
      </section>

      <section className="contentGrid">
        <div>
          <div className="sectionHead">
            <h2>Featured Listings</h2>
            <a>View all listings ›</a>
          </div>

          <div className="listings">
            {listings.map((item) => (
              <article className="card" key={item.title}>
                <div className="imageWrap">
                  <img src={item.image} alt={item.title} />
                  {item.featured && <div className="badge">FEATURED</div>}
                  <div className="heart">♡</div>
                </div>
                <div className="cardBody">
                  <h3>{item.title}</h3>
                  <p>📍 {item.place}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="why">
          <h2>Why Yardie.au?</h2>
          {benefits.map(([icon, title, text]) => (
            <div className="benefit" key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <button>Find Out More</button>
        </aside>
      </section>

      <section className="pricing">
        <div className="priceCard">
          <div className="priceIcon">🏷️</div>
          <h3>Standard Listing</h3>
          <p>Put an ad up for $2.99 and keep it online indefinitely.</p>
        </div>
        <div className="priceCard featuredPrice">
          <div className="priceIcon">⭐</div>
          <h3>Feature Your Ad</h3>
          <p>Boost your ad for $4.99 and get seen by more buyers.</p>
        </div>
        <div className="priceCard">
          <div className="priceIcon">💬</div>
          <h3>Chat Safely</h3>
          <p>Message buyers and sellers directly.</p>
        </div>
        <div className="priceCard">
          <div className="priceIcon">🛡️</div>
          <h3>Report & Protect</h3>
          <p>Help keep Yardie.au safe for everyone.</p>
        </div>
      </section>

      <section className="postPanel">
        <div>
          <h2>Ready to sell?</h2>
          <p>List your item from just $2.99. Featured upgrades are only $4.99.</p>
        </div>
        <button>Post an Ad</button>
      </section>

      <footer>
        <div className="brand small">
          <div className="mark">Y</div>
          <div>
            <div className="logoText">YARDIE<span>.AU</span></div>
            <div className="tagline">Australia’s local online marketplace.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
