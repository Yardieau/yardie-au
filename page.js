
export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      <section style={{padding:'60px 20px',maxWidth:'1200px',margin:'0 auto'}}>
        <h1 style={{fontSize:'64px',fontWeight:'900',lineHeight:'1.1'}}>
          Australia’s Local <span style={{color:'#f97316'}}>Online Marketplace</span>
        </h1>

        <p style={{fontSize:'20px',maxWidth:'700px',marginTop:'20px',color:'#cbd5e1'}}>
          Buy, sell and discover local bargains across Australia with Yardie.au.
        </p>

        <div style={{display:'flex',gap:'16px',marginTop:'30px',flexWrap:'wrap'}}>
          <button style={{
            background:'#f97316',
            border:'none',
            padding:'16px 28px',
            borderRadius:'14px',
            color:'white',
            fontWeight:'700',
            fontSize:'18px'
          }}>
            Post Ad — $2.99
          </button>

          <button style={{
            background:'transparent',
            border:'2px solid white',
            padding:'16px 28px',
            borderRadius:'14px',
            color:'white',
            fontWeight:'700',
            fontSize:'18px'
          }}>
            Feature Ad — $4.99
          </button>
        </div>

        <div style={{
          marginTop:'50px',
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',
          gap:'20px'
        }}>
          {[
            'Electronics',
            'White Goods',
            'Furniture',
            'Tools',
            'Cars & Parts',
            'Home & Garden',
            'Kids & Baby',
            'Collectables'
          ].map((cat) => (
            <div key={cat} style={{
              background:'white',
              color:'#111827',
              padding:'24px',
              borderRadius:'20px',
              fontWeight:'700',
              fontSize:'18px'
            }}>
              {cat}
            </div>
          ))}
        </div>

        <div style={{marginTop:'70px'}}>
          <h2 style={{fontSize:'40px',fontWeight:'900'}}>Featured Listings</h2>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
            gap:'24px',
            marginTop:'30px'
          }}>
            {[
              ['Samsung TV', '$850'],
              ['LG Front Loader', '$450'],
              ['Outdoor Setting', '$150']
            ].map(([title, price]) => (
              <div key={title} style={{
                background:'white',
                color:'#111827',
                borderRadius:'24px',
                overflow:'hidden'
              }}>
                <div style={{
                  height:'180px',
                  background:'#e5e7eb'
                }} />
                <div style={{padding:'20px'}}>
                  <p style={{
                    display:'inline-block',
                    background:'#f97316',
                    color:'white',
                    padding:'6px 12px',
                    borderRadius:'999px',
                    fontSize:'12px',
                    fontWeight:'700'
                  }}>
                    FEATURED
                  </p>

                  <h3 style={{marginTop:'16px',fontSize:'24px',fontWeight:'800'}}>
                    {title}
                  </h3>

                  <p style={{fontSize:'28px',fontWeight:'900',marginTop:'8px'}}>
                    {price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
