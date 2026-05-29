// eco-blog.jsx
// Blog listing + hash-based post detail for the Eco variant

// ─── Category visual card ────────────────────────────────────────────────────

const BLOG_CAT_STYLES = {
  'À propos':         { bg: '#c8e6a0', text: '#0e2a1e', symbol: '◐' },
  'Aides':            { bg: '#52b757', text: '#fff',    symbol: '€' },
  'Chauffage':        { bg: '#e88472', text: '#fff',    symbol: '▲' },
  'Solaire & Chauffage': { bg: '#fab627', text: '#0e2a1e', symbol: '◈' },
  'Solaire':          { bg: '#c8e6a0', text: '#0e2a1e', symbol: '◯' },
  'Audit':            { bg: '#7fa680', text: '#fff',    symbol: '◻' },
  'DPE':              { bg: '#e6c878', text: '#0e2a1e', symbol: 'A→G' },
  'Réglementation':   { bg: '#f1ede0', text: '#0e2a1e', symbol: '§' },
};

function BlogCardVisual({ cat, image }) {
  const cfg = BLOG_CAT_STYLES[cat] || BLOG_CAT_STYLES['À propos'];
  if (image) {
    return (
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative', background: cfg.bg }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(14,42,30,0.4))' }}></div>
      </div>
    );
  }
  return (
    <div style={{
      aspectRatio: '16/9', background: cfg.bg, position: 'relative',
      overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0 12px, transparent 12px 24px)' }}></div>
      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 80, color: cfg.text, opacity: 0.2, lineHeight: 1, userSelect: 'none' }}>{cfg.symbol}</div>
    </div>
  );
}

// ─── Blog card ───────────────────────────────────────────────────────────────

function EcoBlogCard({ tk, post, featured }) {
  const href = 'blog.html#' + post.slug;
  if (featured) {
    const cfg = BLOG_CAT_STYLES[post.cat] || BLOG_CAT_STYLES['À propos'];
    return (
      <a href={href} style={{
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        background: tk.bgPanel,
        border: `1px solid ${tk.border}`,
        borderRadius: 28,
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 0.18s',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = tk.accent}
        onMouseLeave={e => e.currentTarget.style.borderColor = tk.border}
      >
        {/* Full-height image column — no aspect-ratio so it fills the grid row */}
        <div style={{ position: 'relative', minHeight: 320, background: cfg.bg, overflow: 'hidden' }}>
          {post.image
            ? <img src={post.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            : <>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0 12px, transparent 12px 24px)' }}></div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Instrument Serif', serif", fontSize: 140, color: 'rgba(14,42,30,0.15)', lineHeight: 1 }}>{cfg.symbol}</div>
              </>
          }
        </div>
        <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
            <span style={{
              padding: '5px 13px', background: tk.accent, color: tk.bg,
              borderRadius: 100, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>{post.cat}</span>
            <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{post.date}</span>
            <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{post.readTime}</span>
          </div>
          <h2 style={{ ...tk.display, fontSize: 36, color: tk.ink, margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{post.title}</h2>
          <p style={{ fontSize: 15, color: tk.inkSoft, lineHeight: 1.6, margin: '0 0 28px' }}>{post.excerpt}</p>
          <span style={{ color: tk.accent, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
            Lire l'article <span style={{ fontSize: 18 }}>→</span>
          </span>
        </div>
      </a>
    );
  }
  return (
    <a href={href} style={{
      background: tk.bgPanel,
      border: `1px solid ${tk.border}`,
      borderRadius: 24,
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'block',
      transition: 'border-color 0.18s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = tk.accent}
      onMouseLeave={e => e.currentTarget.style.borderColor = tk.border}
    >
      <BlogCardVisual cat={post.cat} image={post.image} />
      <div style={{ padding: '24px 28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{
            padding: '4px 11px', background: tk.bg, color: tk.accent,
            border: `1px solid ${tk.borderStrong}`,
            borderRadius: 100, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>{post.cat}</span>
          <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{post.readTime}</span>
        </div>
        <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 10 }}>{post.date}</div>
        <h3 style={{ ...tk.display, fontSize: 22, color: tk.ink, margin: '0 0 12px', lineHeight: 1.2 }}>{post.title}</h3>
        <p style={{ fontSize: 13, color: tk.inkSoft, lineHeight: 1.55, margin: '0 0 20px' }}>{post.excerpt}</p>
        <span style={{ color: tk.accent, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          Lire <span>→</span>
        </span>
      </div>
    </a>
  );
}

// ─── Content block renderer ───────────────────────────────────────────────────

function BlogContentBlock({ tk, block }) {
  if (block.type === 'h2') {
    return (
      <h2 style={{
        ...tk.display, fontSize: 32, color: tk.ink,
        margin: '48px 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em',
        borderBottom: `1px solid ${tk.border}`, paddingBottom: 16,
      }}>{block.text}</h2>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul style={{ margin: '0 0 24px', padding: '0 0 0 0', listStyle: 'none' }}>
        {block.items.map((item, i) => (
          <li key={i} style={{
            fontSize: 16, color: tk.inkSoft, lineHeight: 1.65,
            paddingLeft: 20, position: 'relative', marginBottom: 10,
          }}>
            <span style={{ position: 'absolute', left: 0, top: '0.5em', width: 6, height: 6, borderRadius: '50%', background: tk.accent, display: 'block' }}></span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p style={{ fontSize: 16, color: tk.inkSoft, lineHeight: 1.75, margin: '0 0 20px' }}>{block.text}</p>
  );
}

// ─── Single post view ────────────────────────────────────────────────────────

function EcoBlogPostDetail({ tk, post }) {
  return (
    <div style={{ background: tk.bg, minHeight: '100vh' }}>
      <EcoNav tk={tk} current="blog" />

      {/* Back + meta strip */}
      <div style={{ background: tk.bgDeep, borderBottom: `1px solid ${tk.border}`, padding: '16px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="blog.html" style={{ ...tk.mono, fontSize: 12, color: tk.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            ← Tous les articles
          </a>
          <span style={{ color: tk.border }}>|</span>
          <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.cat}</span>
          <span style={{ color: tk.border }}>|</span>
          <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{post.date}</span>
          <span style={{ color: tk.border }}>|</span>
          <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{post.readTime} de lecture</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{
            padding: '6px 14px', background: tk.accent, color: tk.bg,
            borderRadius: 100, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>{post.cat}</span>
        </div>
        <h1 style={{
          ...tk.display, fontSize: 64, lineHeight: 1.05,
          color: tk.ink, margin: '24px 0 24px', letterSpacing: '-0.03em',
        }}>{post.title}</h1>
        <p style={{ fontSize: 19, color: tk.inkSoft, lineHeight: 1.6, margin: '0 0 48px', maxWidth: 700 }}>{post.excerpt}</p>
      </div>

      {/* Visual */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ borderRadius: 24, overflow: 'hidden', border: `1px solid ${tk.border}`, aspectRatio: '2/1', position: 'relative', background: (BLOG_CAT_STYLES[post.cat] || BLOG_CAT_STYLES['À propos']).bg }}>
          {post.image
            ? <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : <BlogCardVisual cat={post.cat} />
          }
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 40px 80px' }}>
        <div style={{ maxWidth: 700 }}>
          {post.content.map((block, i) => (
            <BlogContentBlock key={i} tk={tk} block={block} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 64, padding: 48, background: tk.bgPanel, border: `1px solid ${tk.border}`,
          borderRadius: 28,
        }}>
          <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Prochaine étape</div>
          <h3 style={{ ...tk.display, fontSize: 36, color: tk.ink, margin: '0 0 16px', lineHeight: 1.1 }}>
            Parlons de votre projet <span style={{ color: tk.accent, fontStyle: 'italic' }}>ensemble.</span>
          </h3>
          <p style={{ fontSize: 15, color: tk.inkSoft, margin: '0 0 28px', lineHeight: 1.6 }}>
            Premier échange téléphonique gratuit, sans engagement. On cerne votre situation en 15 minutes.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`tel:${DRI.CONTACT.phone}`} style={{
              padding: '16px 28px', background: tk.accent, color: tk.bg,
              fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>{DRI.CONTACT.phone} →</a>
            <a href={`mailto:${DRI.CONTACT.email}`} style={{
              padding: '16px 28px', background: 'transparent', color: tk.ink,
              fontSize: 15, fontWeight: 500, textDecoration: 'none', borderRadius: 100,
              border: `1px solid ${tk.border}`,
            }}>{DRI.CONTACT.email}</a>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <a href="blog.html" style={{ ...tk.mono, fontSize: 13, color: tk.accent, textDecoration: 'none' }}>
            ← Retour au journal
          </a>
        </div>
      </div>

      <EcoFooter tk={tk} />
    </div>
  );
}

// ─── Blog listing page ────────────────────────────────────────────────────────

function EcoBlogList({ tk, tweaks, setTweak }) {
  const [activeCat, setActiveCat] = React.useState('Tous');
  const posts = ECO_DATA.BLOG_POSTS;
  const cats = ['Tous', ...Array.from(new Set(posts.map(p => p.cat)))];
  const filtered = activeCat === 'Tous' ? posts : posts.filter(p => p.cat === activeCat);

  return (
    <div style={{ background: tk.bg, minHeight: '100vh' }}>
      <EcoNav tk={tk} current="blog" />

      {/* Hero */}
      <section style={{ background: tk.bgDeep, borderBottom: `1px solid ${tk.border}`, padding: '80px 0 72px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, background: tk.accent, borderRadius: '50%' }}></span>
            <div style={{ ...tk.mono, fontSize: 13, color: tk.inkSoft, letterSpacing: '0.02em' }}>
              Journal · {posts.length} articles
            </div>
            <div style={{ flex: 1, height: 1, background: tk.border, marginLeft: 16 }}></div>
          </div>
          <h1 style={{
            ...tk.display, fontSize: 104, lineHeight: 0.96,
            margin: 0, color: tk.ink, letterSpacing: '-0.035em',
          }}>
            Pour <span style={{ color: tk.accent, fontStyle: 'italic' }}>aller<br/>plus loin.</span>
          </h1>
          <p style={{ fontSize: 18, color: tk.inkSoft, margin: '32px 0 0', maxWidth: 600, lineHeight: 1.6 }}>
            Conseils, réglementation, aides financières, études de cas — tout ce qu'il faut savoir avant de lancer votre rénovation énergétique.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div style={{ background: tk.bg, borderBottom: `1px solid ${tk.border}`, position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px', display: 'flex', gap: 8, overflowX: 'auto', padding: '16px 56px' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', flexShrink: 0,
              background: activeCat === cat ? tk.accent : 'transparent',
              color: activeCat === cat ? tk.bg : tk.inkSoft,
              border: activeCat === cat ? 'none' : `1px solid ${tk.border}`,
              transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '64px 56px 120px' }}>
        {activeCat === 'Tous' ? (
          <>
            {/* Featured first post */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 28 }}>
              <EcoBlogCard tk={tk} post={filtered[0]} featured={true} />
            </div>
            {/* Rest of posts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {filtered.slice(1).map(post => (
                <EcoBlogCard key={post.slug} tk={tk} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {filtered.map((post, i) => (
              i === 0 && filtered.length > 2 ? (
                <div key={post.slug} style={{ gridColumn: '1 / -1' }}>
                  <EcoBlogCard tk={tk} post={post} featured={true} />
                </div>
              ) : (
                <EcoBlogCard key={post.slug} tk={tk} post={post} />
              )
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: tk.inkMute }}>
            <div style={{ ...tk.mono, fontSize: 48, marginBottom: 16, opacity: 0.3 }}>—</div>
            <div style={{ fontSize: 16 }}>Aucun article dans cette catégorie.</div>
          </div>
        )}
      </div>

      {/* Newsletter / CTA strip */}
      <div style={{ background: tk.bgDeep, borderTop: `1px solid ${tk.border}`, padding: '80px 0' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <EcoSectionLabel tk={tk} num="∞">Votre projet</EcoSectionLabel>
              <h2 style={{ ...tk.display, fontSize: 64, color: tk.ink, margin: '0 0 20px', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                Des questions ?<br/>
                <span style={{ color: tk.accent, fontStyle: 'italic' }}>On répond.</span>
              </h2>
              <p style={{ fontSize: 16, color: tk.inkSoft, margin: 0, lineHeight: 1.65 }}>
                Chaque logement est différent. Plutôt que des réponses génériques, un échange direct de 15 minutes vous donnera un avis adapté à votre situation réelle.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{
                padding: '22px 32px', background: tk.accent, color: tk.bg,
                fontSize: 17, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>Appeler Alex</span>
                <span>{DRI.CONTACT.phone} →</span>
              </a>
              <a href={`mailto:${DRI.CONTACT.email}`} style={{
                padding: '22px 32px', background: 'transparent', color: tk.ink,
                fontSize: 17, fontWeight: 500, textDecoration: 'none', borderRadius: 100,
                border: `1px solid ${tk.borderStrong}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>Envoyer un email</span>
                <span style={{ ...tk.mono, fontSize: 13, color: tk.inkMute }}>{DRI.CONTACT.email} →</span>
              </a>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, textAlign: 'center', lineHeight: 1.5 }}>
                Réponse sous 24h · Devis gratuit · Aucun engagement
              </div>
            </div>
          </div>
        </div>
      </div>

      <EcoFooter tk={tk} />
      {window.location.search.includes('dev') && <EcoTweaksPanel tweaks={tweaks} setTweak={setTweak} />}
    </div>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────

function EcoBlog() {
  const [tweaks, setTweaksState] = React.useState(ECO_TWEAK_DEFAULTS);
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  function setTweak(k, v) {
    setTweaksState(prev => ({ ...prev, [k]: v }));
  }

  const tk = ecoTokens(tweaks);
  const slug = hash.startsWith('#') ? hash.slice(1) : null;
  const post = slug ? (ECO_DATA.BLOG_POSTS || []).find(p => p.slug === slug) : null;

  if (post) {
    return <EcoBlogPostDetail tk={tk} post={post} />;
  }
  return <EcoBlogList tk={tk} tweaks={tweaks} setTweak={setTweak} />;
}
