// Eco — À propos page

function EcoAboutHero({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0 ${tk.density.sectionY - 20}px`, position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: -300, left: -200, width: 900, height: 900, borderRadius: '50%',
        background: `radial-gradient(circle, ${tk.accent}22 0%, transparent 60%)`, pointerEvents: 'none',
      }}></div>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
          <span style={{ width: 8, height: 8, background: tk.accent, borderRadius: '50%' }}></span>
          <div style={{ ...tk.mono, fontSize: 13, color: tk.inkSoft, letterSpacing: '0.02em' }}>À propos · Notre histoire · Notre équipe</div>
          <div style={{ flex: 1, height: 1, background: tk.border, marginLeft: 16 }}></div>
        </div>
        <h1 style={{
          ...tk.display, fontSize: 120 * tk.heroScale, lineHeight: 0.92, margin: 0,
          color: tk.ink, letterSpacing: '-0.04em', maxWidth: 1200,
        }}>
          Un bureau d'études<br/>
          <span style={{ color: tk.accent, fontStyle: 'italic' }}>indépendant,</span><br/>
          en Lorraine.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56 }}>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: tk.inkSoft, margin: 0 }}>
            Diag Renov Immo est un bureau d'études en performance énergétique du bâtiment, créé en 2022 par Alex Oudin, ingénieur thermicien. Basé à Nancy, il intervient personnellement sur toute la Meurthe-et-Moselle.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: tk.inkSoft, margin: 0 }}>
            Notre métier : produire des diagnostics et des audits sérieux pour les propriétaires de logements anciens, et les accompagner dans la réalisation effective des travaux. Pas de sous-traitance, pas de commission, pas de partenariat commercial avec des artisans.
          </p>
        </div>
      </div>
    </section>
  );
}

function EcoAboutStats({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: '64px 0', borderTop: `1px solid ${tk.border}`, borderBottom: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            ['2022', "Année de création"],
            ['1', "Expert sur le terrain"],
            ['200+', "Foyers conseillés"],
            ['54', "Département d'intervention"],
          ].map(([v, l], i) => (
            <div key={i} style={{
              padding: '12px 32px 12px 0',
              borderRight: i < 3 ? `1px solid ${tk.border}` : 'none',
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{ ...tk.display, fontSize: 64, lineHeight: 1, color: tk.accent, marginBottom: 10 }}>{v}</div>
              <div style={{ fontSize: 14, color: tk.inkSoft }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoAboutStory({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="01">L'histoire</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 0', color: tk.ink, letterSpacing: '-0.03em' }}>
            Comment <span style={{ color: tk.accent, fontStyle: 'italic' }}>tout</span><br/>a commencé.
          </h2>
          <div style={{ paddingTop: 24 }}>
            {[
              {
                year: '2018',
                title: 'Le constat',
                text: "Alex est ingénieur thermicien dans un grand bureau d'études parisien. Il constate que les diagnostics qu'il produit ne sont presque jamais expliqués aux propriétaires, et que les recommandations sont souvent trop techniques pour être actionnées.",
              },
              {
                year: '2020',
                title: 'Le retour en Lorraine',
                text: "Crise sanitaire. Alex rentre à Nancy, sa région d'origine. Il commence à conseiller bénévolement des amis propriétaires sur leurs projets de rénovation. Le bouche-à-oreille fait son travail.",
              },
              {
                year: '2022',
                title: 'La création',
                text: "Diag Renov Immo est immatriculée à Nancy. Le positionnement est clair dès le départ : audit pédagogique, indépendance totale, accompagnement long. Première année : 38 diagnostics réalisés.",
              },
              {
                year: '2024',
                title: "L'agrément MAR",
                text: "Obtention de l'agrément Mon Accompagnateur Rénov' sur tout le département — reconnaissance officielle de l'État pour accompagner les rénovations globales de A à Z.",
              },
              {
                year: '2026',
                title: "Aujourd'hui",
                text: "200+ foyers conseillés, 4,9/5 sur Google. Un seul expert, une seule méthode : mesurer rigoureusement, expliquer simplement, accompagner réellement.",
              },
            ].map((s, i) => (
              <div key={s.year} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 32, padding: '32px 0', borderTop: i === 0 ? 'none' : `1px solid ${tk.border}` }}>
                <div style={{ ...tk.display, fontSize: 36, color: tk.accent, lineHeight: 1, fontStyle: 'italic' }}>{s.year}</div>
                <div>
                  <h3 style={{ ...tk.display, fontSize: 26, color: tk.ink, margin: '0 0 12px', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 16, color: tk.inkSoft, lineHeight: 1.65, margin: 0 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoAboutValues({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="02">Nos engagements</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 56px', color: tk.ink, letterSpacing: '-0.03em', maxWidth: 1100 }}>
          Quatre principes <span style={{ color: tk.accent, fontStyle: 'italic' }}>non-négociables.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {ECO_DATA.VALUES.map((v, i) => (
            <div key={v.title} style={{
              background: i === 0 ? tk.accent : tk.bgPanel, color: i === 0 ? tk.bg : tk.ink,
              border: i === 0 ? 'none' : `1px solid ${tk.border}`,
              borderRadius: 24, padding: 40,
            }}>
              <div style={{ ...tk.mono, fontSize: 12, marginBottom: 24, letterSpacing: '0.08em', opacity: 0.7 }}>0{i + 1} / 04</div>
              <h3 style={{ ...tk.display, fontSize: 36, margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>{v.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0, opacity: i === 0 ? 0.85 : 0.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoAboutTeam({ tk }) {
  const alex = ECO_DATA.TEAM[0];
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="03">Votre interlocuteur</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'center' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
            <img src={alex.photo} alt={alex.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', gap: 6 }}>
              {alex.badges.map(b => (
                <span key={b} style={{ fontSize: 10, padding: '5px 10px', background: tk.accent, color: tk.bg, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 4 }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: tk.accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>Fondateur &amp; expert certifié</div>
            <h2 style={{ ...tk.display, fontSize: 80, color: tk.ink, margin: '0 0 12px', lineHeight: 1.0 }}>Alex Oudin</h2>
            <div style={{ fontSize: 17, color: tk.inkSoft, marginBottom: 36 }}>Auditeur certifié · Mon Accompagnateur Rénov'</div>
            <p style={{ fontSize: 17, color: tk.inkSoft, lineHeight: 1.75, margin: '0 0 44px' }}>{alex.bio}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 44 }}>
              {[
                { code: 'OPQIBI', label: 'Qualifications', detail: 'Ingénierie bâtiment' },
                { code: 'RGE', label: 'Reconnu Garant', detail: 'de l\'Environnement' },
                { code: 'MAR', label: 'Agréé État', detail: 'Mon Accompagnateur Rénov\'' },
              ].map(({ code, label, detail }) => (
                <div key={code} style={{ padding: '20px 24px', background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 16 }}>
                  <div style={{ fontSize: 22, color: tk.ink, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 8 }}>{code}</div>
                  <div style={{ fontSize: 11, color: tk.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: tk.inkMute, lineHeight: 1.4 }}>{detail}</div>
                </div>
              ))}
            </div>
            <a href="index.html#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', background: tk.accent, color: tk.bg, fontSize: 14, fontWeight: 700, textDecoration: 'none', borderRadius: 100 }}>
              Discutons de votre projet →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoAboutCertifs({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="04">Certifications & agréments</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 28px', color: tk.ink, letterSpacing: '-0.03em' }}>
              Nos <span style={{ color: tk.accent, fontStyle: 'italic' }}>papiers</span> en règle.
            </h2>
            <p style={{ fontSize: 16, color: tk.inkSoft, lineHeight: 1.65, margin: 0 }}>
              Tous nos diagnostics et audits sont produits sous certification — c'est ce qui permet à nos rapports d'être recevables auprès de l'Anah, des banques pour l'éco-PTZ, et des notaires en cas de vente.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { code: 'MAR', name: 'Mon Accompagnateur Rénov\'', issuer: 'Anah', num: 'MAR-54-2024-0847', valid: '2024 — 2029' },
              { code: 'RGE', name: 'Reconnu Garant de l\'Environnement', issuer: 'Qualibat', num: 'RGE-54-118-2023', valid: '2023 — 2027' },
              { code: 'OPQIBI', name: 'Qualif. ingénierie bâtiment', issuer: 'OPQIBI', num: '14-12-2104', valid: '2024 — 2026' },
              { code: 'DPE', name: 'Diagnostiqueur certifié DPE', issuer: 'I.Cert', num: 'CPDI-7842', valid: '2023 — 2030' },
            ].map(c => (
              <div key={c.code} style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ ...tk.mono, fontSize: 11, padding: '5px 9px', background: tk.accent, color: tk.bg, fontWeight: 700, letterSpacing: '0.08em' }}>{c.code}</div>
                  <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute }}>{c.valid}</span>
                </div>
                <h4 style={{ ...tk.display, fontSize: 22, color: tk.ink, margin: '0 0 8px', lineHeight: 1.15 }}>{c.name}</h4>
                <div style={{ fontSize: 13, color: tk.inkSoft, marginBottom: 16 }}>Délivré par {c.issuer}</div>
                <div style={{ paddingTop: 14, borderTop: `1px solid ${tk.border}`, ...tk.mono, fontSize: 12, color: tk.accent }}>{c.num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoAboutCTA({ tk }) {
  return (
    <section style={{ background: tk.accent, color: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
          <h2 style={{ ...tk.display, fontSize: 112, lineHeight: 0.92, margin: 0, letterSpacing: '-0.04em' }}>
            Un expert<br/>
            <span style={{ fontStyle: 'italic' }}>à votre service.</span>
          </h2>
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.6, margin: '0 0 32px', opacity: 0.85 }}>
              Discutons de votre projet. Quinze minutes au téléphone, gratuites, pour cerner vos besoins et identifier les leviers d'aides.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="index.html#contact" style={{
                padding: '18px 30px', background: tk.bg, color: tk.accent,
                fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
              }}>Démarrer un projet →</a>
              <a href={`tel:${DRI.CONTACT.phone}`} style={{
                padding: '18px 30px', background: 'transparent', color: tk.bg,
                fontSize: 15, fontWeight: 600, textDecoration: 'none', borderRadius: 100,
                border: `1.5px solid ${tk.bg}`,
              }}>{DRI.CONTACT.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoAbout() {
  const [tweaks, setTweak] = useTweaks(ECO_TWEAK_DEFAULTS);
  const tk = ecoTokens(tweaks);
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: tk.ink, background: tk.bg }}>
      <EcoNav tk={tk} current="about" />
      <EcoAboutHero tk={tk} />
      <EcoAboutStats tk={tk} />
      <EcoAboutStory tk={tk} />
      <EcoAboutValues tk={tk} />
      <EcoAboutTeam tk={tk} />
      <EcoAboutCertifs tk={tk} />
      <EcoAboutCTA tk={tk} />
      <EcoFooter tk={tk} />
      {window.location.search.includes('dev') && <EcoTweaksPanel tweaks={tweaks} setTweak={setTweak} />}
    </div>
  );
}

window.EcoAbout = EcoAbout;
