⁸const categories = [
  ['🚗', 'Cars & Vehicles'],
  ['🔧', 'Tools & Equipment'],
  ['🚚', 'Trailers & Caravans'],
  ['⛑️', 'Work & Trade'],
  ['🚜', 'Farm & Rural'],
  ['🖥️', 'Electronics'],
  ['🧺', 'White Goods'],
  ['🪴', 'Home & Garden'],
  ['🛋️', 'Furniture'],
  ['🍼', 'Kids & Baby'],
  ['🚲', 'Sports & Outdoors'],
  ['🎸', 'Hobbies & Accessories'],
['🃏', 'Trading Cards'],
['...', 'More Categories'],
]

const listings = [
  ['2020 Toyota Hilux SR5', 'Brisbane, QLD', '$38,500', '/hilux.jpg', true],
  ['CAT 305.5 Excavator', 'Perth, WA', '$45,000', '/excavator.jpg', true],
  ['8x5 Box Trailer', 'Melbourne, VIC', '$2,200', '/trailer.jpg', true],
  ['Samsung 65” Smart TV', 'Adelaide, SA', '$850', '/tv.jpg', false],
  ['LG 8kg Front Loader', 'Gold Coast, QLD', '$450', '/washing-machine.jpg', false],
]

export default function Home() {
  return (
    <main>
      <div className="logoWrap">
  <img src="/yardie-logo.svg" alt="Yardie.au" className="logoImage" />

    
        <nav className="nav">
          <a className="browse">Browse⌄</a>
          <div className="topSearch">
            <span>⌕</span>
            <input placeholder="Search for anything..." />
          </div>
          <div className="location">⌖ Australia Wide⌄</div>
          <a className="login">Login</a>
          <span className="divider"></span>
          <button>Sign Up</button>
        </nav>
      </header>

    

      <section className="hero">
        <button className="floatingPost">＋ Post an Ad</button>

        <div className="heroText">
          <h1>AUSTRALIA’S LOCAL <span>ONLINE MARKETPLACE</span></h1>
          <p>Buy, sell and find just about anything.<br />From tools to utes and everything in between.</p>

          <div className="heroButtons">
            <button>Post an Ad — $2.99</button>
            <button className="ghost">Browse Listings</button>
          </div>
        </div>

        <div className="trustPill">
          <span>🏷️ $2.99 to list</span>
          <b>•</b>
          <span>🛡️ Safe & Secure</span>
          <b>•</b>
          <span>📍 Local & Australia Wide</span>
        </div>
      </section>

      <section className="categoryStrip">
        {categories.map(([icon, label]) => (
          <div className="category" key={label}>
            <div className="catIcon">{icon}</div>
            <p>{label}</p>
          </div>
        ))}
      </section>

      <section className="mainArea">
        <div className="featured">
          <div className="sectionTitle">
            <h2>Featured Listings</h2>
            <a>View all ›</a>
          </div>

          <div className="cards">
            {listings.map(([title, place, price, img, featured]) => (
              <article className="card" key={title}>
                <div className="photo">
                  <img src={img} alt={title} />
                  {featured && <span className="badge">FEATURED</span>}
                </div>
                <div className="cardBody">
                  <h3>{title}</h3>
                  <p>📍 {place}</p>
                  <div className="priceRow">
                    <strong>{price}</strong>pp
                    <span>♡</span>p
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="why">
          <h2>Why Yardie.au?</h2>

          <div className="whyItem">
            <span>🏷️</span>
            <div>
              <h3>Low cost to list</h3>
              <p>List from just $2.99.</p>
            </div>
          </div>

          <div className="whyItem">
            <span>📍</span>
            <div>
              <h3>Local & Australia Wide</h3>
              <p>Find buyers and sellers near you.</p>
            </div>
          </div>

          <div className="whyItem">
            <span>🛡️</span>
            <div>
              <h3>Safe & Secure</h3>
              <p>Report scams and stay protected.</p>
            </div>
          </div>

          <div className="whyItem">
            <span>✨</span>
            <div>
              <h3>Feature Your Ad</h3>
              <p>Get more views, sell faster.</p>
            </div>
          </div>

          <button>Find Out More</button>
        </aside>
      </section>

      <section className="bottomStrip">
        <div>
          <span>🏷️</span>
          <h3>Low Cost to List</h3>
          <p>List anything from just $2.99.</p>
        </div>

        <div>
          <span>⭐</span>
          <h3>Feature Your Ad</h3>
          <p>Boost your listing for $4.99.</p>
        </div>

        <div>
          <span>💬</span>
          <h3>Chat Safely</h3>
          <p>Message buyers and sellers directly.</p>
        </div>

        <div>
          <span>♡</span>
          <h3>Save & Share</h3>
          <p>Save your favourites.</p>
        </div>

        <div>
          <span>🛡️</span>
          <h3>Report & Protect</h3>
          <p>Help keep Yardie.au safe.</p>
        </div>
      </section>
    </main>
  )
        }
