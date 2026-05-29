// Shared design system + nav/footer for the eco-moderne site.
// Loaded before pages. Exposes: ecoTokens, EcoNav, EcoFooter, EcoSectionLabel, EcoBadge.

// Default tweak values — surfaced through the Tweaks panel.
const ECO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c8e6a0",
  "bgTone": "forest",
  "density": "regular",
  "heroScale": 1
}/*EDITMODE-END*/;

const ECO_BG_TONES = {
  forest:    { bg: '#0e2a1e', bgDeep: '#081c14', bgPanel: '#143228' },
  deepGreen: { bg: '#0b1f17', bgDeep: '#040d09', bgPanel: '#102a20' },
  charcoal:  { bg: '#15191a', bgDeep: '#0a0c0d', bgPanel: '#1d2122' },
  sand:      { bg: '#1d1916', bgDeep: '#0f0d0b', bgPanel: '#26221d' },
};

const ECO_DENSITIES = {
  compact: { sectionY: 80,  navH: 64, gap: 16, head: 64 },
  regular: { sectionY: 120, navH: 72, gap: 24, head: 80 },
  comfy:   { sectionY: 160, navH: 80, gap: 32, head: 96 },
};

function ecoTokens(tweaks) {
  const tone = ECO_BG_TONES[tweaks.bgTone] || ECO_BG_TONES.forest;
  const density = ECO_DENSITIES[tweaks.density] || ECO_DENSITIES.regular;
  return {
    accent: tweaks.accent,
    ...tone,
    ink: '#f1ede0',
    inkSoft: 'rgba(241,237,224,0.7)',
    inkMute: 'rgba(241,237,224,0.48)',
    border: 'rgba(241,237,224,0.12)',
    borderStrong: 'rgba(241,237,224,0.22)',
    sage: '#7fa680',
    amber: '#e6c878',
    red: '#e88472',
    density,
    heroScale: tweaks.heroScale || 1,
    display: { fontFamily: "'Playfair Display', serif", fontWeight: 400, letterSpacing: '-0.01em' },
    mono: { fontFamily: "'DM Sans', sans-serif", fontWeight: 500 },
  };
}

// ─────────────────────────────────────────────────────────────
// Nav

function EcoNav({ tk, current = 'home' }) {
  const items = [
    { key: 'home', label: 'Accueil', href: 'index.html' },
    { key: 'services', label: 'Services', href: 'services.html' },
    { key: 'about', label: 'À propos', href: 'a-propos.html' },
    { key: 'blog', label: 'Journal', href: 'blog.html' },
    { key: 'contact', label: 'Contact', href: 'index.html#contact' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: `${tk.bg}E6`,
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${tk.border}`,
    }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: `${tk.density.navH / 4}px 56px`, display: 'flex', alignItems: 'center', gap: 40 }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: tk.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: tk.bg, fontSize: 18, ...tk.display,
          }}>◐</div>
          <div>
            <div style={{ fontSize: 15, color: tk.ink, letterSpacing: '-0.01em', fontWeight: 600, lineHeight: 1.1 }}>
              Diag Renov Immo
            </div>
            <div style={{ fontSize: 10, color: tk.inkMute, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
              Audit · Rénovation énergétique
            </div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 'auto', alignItems: 'center' }}>
          {items.map(it => (
            <a key={it.key} href={it.href} style={{
              fontSize: 14, color: tk.ink, textDecoration: 'none', fontWeight: 500,
              opacity: current === it.key ? 1 : 0.7,
              borderBottom: current === it.key ? `1.5px solid ${tk.accent}` : '1.5px solid transparent',
              paddingBottom: 4,
            }}>{it.label}</a>
          ))}
        </nav>
        <a href={`tel:${DRI.CONTACT.phone}`} style={{
          padding: '12px 22px', background: tk.accent, color: tk.bg,
          fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>{DRI.CONTACT.phone} <span>↗</span></a>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// Section label

function EcoSectionLabel({ tk, num, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
      <div style={{ ...tk.mono, fontSize: 12, color: tk.accent, letterSpacing: '0.05em' }}>§{num}</div>
      <div style={{ ...tk.mono, fontSize: 12, color: tk.inkSoft, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{children}</div>
      <div style={{ flex: 1, height: 1, background: tk.border }}></div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer

function EcoFooter({ tk }) {
  return (
    <footer style={{ background: tk.bgDeep, color: tk.inkSoft, padding: '80px 0 32px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{
          ...tk.display, fontSize: 140, lineHeight: 0.9,
          color: tk.ink, marginBottom: 64, letterSpacing: '-0.04em',
        }}>
          Diag Renov Immo<span style={{ color: tk.accent, fontStyle: 'italic' }}>.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: tk.inkSoft, margin: 0, maxWidth: 320 }}>
              Audit énergétique et accompagnement à la rénovation. Agréé Mon Accompagnateur Rénov' sur tout le département de la Meurthe-et-Moselle.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
              {['MAR', 'RGE', 'OPQIBI'].map(c => (
                <span key={c} style={{ ...tk.mono, fontSize: 10, padding: '5px 9px', border: `1px solid ${tk.border}`, color: tk.ink, letterSpacing: '0.08em' }}>{c}</span>
              ))}
            </div>
          </div>
          {[
            ['Site', [['Accueil', 'index.html'], ['Services', 'services.html'], ['À propos', 'a-propos.html'], ['Journal', 'blog.html']]],
            ['Services', [['DPE', 'services.html#dpe'], ['Audit énergétique', 'services.html#audit'], ['Étude PV', 'services.html#pv'], ['Étude chauffage', 'services.html#chauffage']]],
            ['Contact', [[DRI.CONTACT.phone, `tel:${DRI.CONTACT.phone}`], [DRI.CONTACT.email, `mailto:${DRI.CONTACT.email}`], [DRI.CONTACT.zone, null]]],
          ].map(([head, items]) => (
            <div key={head}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{head}</div>
              {items.map(([label, href]) => (
                <div key={label} style={{ fontSize: 13, marginBottom: 10 }}>
                  {href ? <a href={href} style={{ color: tk.inkSoft, textDecoration: 'none' }}>{label}</a> : label}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 24, borderTop: `1px solid ${tk.border}`,
          display: 'flex', justifyContent: 'space-between',
          fontSize: 11, color: tk.inkMute, ...tk.mono, letterSpacing: '0.05em',
        }}>
          <div>© 2026 DIAG RENOV IMMO · SIRET 928 471 392 00018</div>
          <div>MENTIONS · CGV · COOKIES · CONFIDENTIALITÉ</div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// Tweaks panel

function EcoTweaksPanel({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Couleur d'accent" />
      <TweakColor label="Accent" value={tweaks.accent}
        options={['#c8e6a0', '#e8ff5a', '#ffb86b', '#ffd166', '#7ec8e3', '#f4a8c0']}
        onChange={(v) => setTweak('accent', v)} />

      <TweakSection label="Ambiance" />
      <TweakSelect label="Fond" value={tweaks.bgTone}
        options={['forest', 'deepGreen', 'charcoal', 'sand']}
        onChange={(v) => setTweak('bgTone', v)} />
      <TweakRadio label="Densité" value={tweaks.density}
        options={['compact', 'regular', 'comfy']}
        onChange={(v) => setTweak('density', v)} />

      <TweakSection label="Hero" />
      <TweakSlider label="Taille titre" value={tweaks.heroScale} min={0.6} max={1.4} step={0.1}
        onChange={(v) => setTweak('heroScale', v)} />
    </TweaksPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// Reusable interactive blocks

// DPE scale used on home AND inside service detail page
function EcoDPEInteractive({ tk, defaultLetter = 'F' }) {
  const [selected, setSelected] = React.useState(defaultLetter);
  const data = DRI.DPE.find(d => d.letter === selected);
  const idx = DRI.DPE.findIndex(d => d.letter === selected);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 32 }}>
        {DRI.DPE.map((d, i) => {
          const active = d.letter === selected;
          return (
            <button key={d.letter} onClick={() => setSelected(d.letter)} style={{
              flex: 1, padding: 0, border: 'none', cursor: 'pointer', background: 'transparent',
            }}>
              <div style={{
                height: 60 + i * 22, background: d.color, color: tk.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...tk.display, fontSize: 76, lineHeight: 1,
                borderRadius: 12, position: 'relative',
                boxShadow: active ? `0 0 0 3px ${tk.accent}, 0 0 36px ${d.color}88` : 'none',
                transition: 'all 0.18s',
                transform: active ? 'translateY(-10px)' : 'translateY(0)',
              }}>
                {d.letter}
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <div style={{ background: tk.bgPanel, borderRadius: 20, padding: 28, border: `1px solid ${tk.border}` }}>
          <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Classe</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: data.color, color: tk.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...tk.display, fontSize: 36 }}>{data.letter}</div>
            <div style={{ ...tk.display, fontSize: 22, color: tk.ink, lineHeight: 1.1 }}>{data.label}</div>
          </div>
          <div style={{ borderTop: `1px solid ${tk.border}`, paddingTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: tk.inkMute }}>Énergie</span>
              <span style={{ fontSize: 12, color: tk.ink, ...tk.mono }}>{data.range}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: tk.inkMute }}>CO₂</span>
              <span style={{ fontSize: 12, color: tk.ink, ...tk.mono }}>{data.co2}</span>
            </div>
          </div>
        </div>
        <div style={{ background: tk.bgPanel, borderRadius: 20, padding: 28, border: `1px solid ${tk.border}` }}>
          <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cadre légal</div>
          <p style={{ fontSize: 14, color: tk.ink, lineHeight: 1.6, margin: 0 }}>
            {idx === 6 && <>Location interdite depuis 2025. Travaux indispensables.</>}
            {idx === 5 && <>Location interdite depuis 2028. Audit obligatoire à la vente.</>}
            {idx === 4 && <>Interdiction de location prévue en 2034. Anticipation conseillée.</>}
            {idx < 4 && <>Pas de restriction. DPE valable 10 ans.</>}
          </p>
        </div>
        <div style={{ background: tk.accent, color: tk.bg, borderRadius: 20, padding: 28 }}>
          <div style={{ ...tk.mono, fontSize: 11, marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.7 }}>Avec un audit</div>
          <div style={{ ...tk.display, fontSize: 22, lineHeight: 1.15, marginBottom: 14 }}>
            {idx >= 5 ? `Passer de ${data.letter} à C` : idx >= 3 ? 'Viser le B' : 'Optimiser'}
          </div>
          <a href="services.html#audit" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: tk.bg, color: tk.accent, fontSize: 13, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>Voir l'audit →</a>
        </div>
      </div>
    </div>
  );
}

// Aides simulator
function EcoAidesSimulator({ tk }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const questions = [
    { key: 'revenu', label: 'Revenus annuels du foyer', options: ['< 20 000 €', '20 — 35 000 €', '35 — 60 000 €', '> 60 000 €'] },
    { key: 'travaux', label: 'Type de projet', options: ['Rénovation globale', 'Isolation seule', 'Chauffage seul', 'Je découvre'] },
    { key: 'surface', label: 'Surface du logement', options: ['< 70 m²', '70 — 120 m²', '120 — 180 m²', '> 180 m²'] },
  ];
  const result = answers.revenu === '< 20 000 €' ? 38000 :
    answers.revenu === '20 — 35 000 €' ? 26000 :
    answers.revenu === '35 — 60 000 €' ? 16000 : 9500;
  return (
    <div style={{ background: tk.bgPanel, borderRadius: 32, padding: 44, border: `1px solid ${tk.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 8, height: 8, background: tk.accent, borderRadius: '50%' }}></span>
        <div style={{ ...tk.mono, fontSize: 12, color: tk.accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Simulateur · 60 sec</div>
      </div>
      <h3 style={{ ...tk.display, fontSize: 40, margin: '0 0 28px', lineHeight: 1.05, color: tk.ink }}>
        Vos aides estimées<br/>
        <span style={{ color: tk.accent, fontStyle: 'italic' }}>en 3 questions.</span>
      </h3>
      <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
        {questions.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? tk.accent : tk.border }}></div>
        ))}
      </div>
      {step < questions.length ? (
        <>
          <div style={{ ...tk.mono, fontSize: 12, color: tk.inkMute, marginBottom: 6 }}>Q{step + 1}/{questions.length}</div>
          <div style={{ fontSize: 20, marginBottom: 24, color: tk.ink, lineHeight: 1.3 }}>{questions[step].label}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
            {questions[step].options.map(opt => (
              <button key={opt} onClick={() => { setAnswers({ ...answers, [questions[step].key]: opt }); setStep(step + 1); }} style={{
                padding: '16px 20px', background: tk.bg, border: `1px solid ${tk.border}`,
                color: tk.ink, borderRadius: 100, textAlign: 'left', fontSize: 15,
                cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{opt}</span><span style={{ color: tk.accent }}>→</span>
              </button>
            ))}
          </div>
          {step > 0 && <button onClick={() => setStep(step - 1)} style={{ background: 'transparent', border: 'none', color: tk.inkMute, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>← Précédent</button>}
        </>
      ) : (
        <>
          <div style={{ ...tk.mono, fontSize: 12, color: tk.accent, marginBottom: 10 }}>● ESTIMATION</div>
          <div style={{ ...tk.display, fontSize: 96, lineHeight: 1, color: tk.accent, fontStyle: 'italic', marginBottom: 8 }}>
            {result.toLocaleString('fr-FR')} €
          </div>
          <p style={{ fontSize: 14, color: tk.inkSoft, marginBottom: 28, lineHeight: 1.55 }}>d'aides cumulées, à valider sur projet précis.</p>
          <a href="index.html#contact" style={{ display: 'block', textAlign: 'center', padding: '18px 24px', background: tk.accent, color: tk.bg, fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100, marginBottom: 12 }}>Étudier mon dossier →</a>
          <button onClick={() => { setStep(0); setAnswers({}); }} style={{ background: 'transparent', border: 'none', color: tk.inkMute, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>↺ Refaire la simulation</button>
        </>
      )}
    </div>
  );
}

// ── EmailJS config ─────────────────────────────────────────────
// Replace these three values with your own from emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // Account → API Keys → Public Key

function EcoContactForm({ tk }) {
  const [selected, setSelected] = React.useState([]);
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  const projectTypes = ['DPE', 'Audit', 'Étude PV', 'Chauffage', 'Rénovation globale', 'Je découvre'];

  const toggle = (b) => setSelected(prev =>
    prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.nom.value,
        from_email: form.email.value,
        phone:      form.telephone.value || 'Non renseigné',
        commune:    form.commune.value   || 'Non renseignée',
        projet:     selected.join(', ')  || 'Non précisé',
        message:    form.message.value   || '—',
      },
      EMAILJS_PUBLIC_KEY
    )
      .then(() => setStatus('sent'))
      .catch(err => { console.error('[EmailJS]', err); setStatus('error'); });
  };

  if (status === 'sent') {
    return (
      <div style={{ background: tk.bg, color: tk.ink, borderRadius: 32, padding: 48, textAlign: 'center' }}>
        <div style={{ ...tk.display, fontSize: 64, color: tk.accent, fontStyle: 'italic', marginBottom: 16 }}>Envoyé.</div>
        <p style={{ fontSize: 17, color: tk.inkSoft, lineHeight: 1.6, margin: '0 0 28px' }}>
          Merci ! Nous vous répondons sous 24h ouvrées.
        </p>
        <a href="index.html" style={{ ...tk.mono, fontSize: 13, color: tk.accent, textDecoration: 'none' }}>← Retour à l'accueil</a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: tk.bg, color: tk.ink, borderRadius: 32, padding: 48 }}
    >
      <h3 style={{ ...tk.display, fontSize: 32, margin: '0 0 28px', lineHeight: 1.1 }}>
        Écrivez-nous <span style={{ color: tk.accent, fontStyle: 'italic' }}>ici.</span>
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <EcoFormField tk={tk} name="nom" label="Prénom et nom" placeholder="Marie Dupont" required />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <EcoFormField tk={tk} name="telephone" label="Téléphone" placeholder="06 …" />
          <EcoFormField tk={tk} name="email" label="Email" placeholder="marie@…" type="email" required />
        </div>
        <EcoFormField tk={tk} name="commune" label="Commune" placeholder="Nancy, Lunéville…" />

        <div>
          <label style={{ display: 'block', fontSize: 11, color: tk.inkMute, ...tk.mono, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Type de projet</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {projectTypes.map(b => (
              <button key={b} type="button" onClick={() => toggle(b)} style={{
                padding: '10px 16px',
                background: selected.includes(b) ? tk.accent : tk.bgPanel,
                color: selected.includes(b) ? tk.bg : tk.ink,
                border: `1px solid ${selected.includes(b) ? tk.accent : tk.border}`,
                borderRadius: 100, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                transition: 'all 0.15s',
              }}>{b}</button>
            ))}
          </div>
        </div>

        <EcoFormField tk={tk} name="message" label="Votre projet en quelques mots" placeholder="ex : pavillon 1970 classé F, on voudrait baisser les factures" multiline />

        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#c0392b', margin: 0 }}>
            Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
          </p>
        )}

        <button type="submit" disabled={status === 'sending'} style={{
          width: '100%', padding: '20px 24px', background: tk.accent, color: tk.bg,
          border: 'none', fontSize: 16, fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer',
          fontFamily: 'inherit', borderRadius: 100, marginTop: 8,
          opacity: status === 'sending' ? 0.7 : 1, transition: 'opacity 0.2s',
        }}>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande →'}</button>
        <div style={{ fontSize: 11, color: tk.inkMute, lineHeight: 1.5 }}>
          Réponse sous 24h ouvrées · Données confidentielles, jamais partagées.
        </div>
      </div>
    </form>
  );
}

function EcoFormField({ tk, name, label, placeholder, multiline, type = 'text', required }) {
  const base = {
    width: '100%', padding: '14px 18px',
    background: tk.bgPanel, border: `1px solid ${tk.border}`,
    fontSize: 15, fontFamily: 'inherit', color: tk.ink, outline: 'none',
  };
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, color: tk.inkMute, ...tk.mono, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</label>
      {multiline ? (
        <textarea name={name} placeholder={placeholder} rows={3} required={required} style={{ ...base, borderRadius: 16, resize: 'vertical' }} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} style={{ ...base, borderRadius: 100 }} />
      )}
    </div>
  );
}

Object.assign(window, {
  ECO_TWEAK_DEFAULTS,
  ecoTokens,
  EcoNav,
  EcoFooter,
  EcoSectionLabel,
  EcoTweaksPanel,
  EcoDPEInteractive,
  EcoAidesSimulator,
  EcoContactForm,
  EcoFormField,
});
