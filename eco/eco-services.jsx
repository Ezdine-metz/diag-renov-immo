// Eco — Services détaillés page

function EcoServicesHero({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0 ${tk.density.sectionY - 20}px`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
          <span style={{ width: 8, height: 8, background: tk.accent, borderRadius: '50%' }}></span>
          <div style={{ ...tk.mono, fontSize: 13, color: tk.inkSoft, letterSpacing: '0.02em' }}>Services · 4 prestations · DPE, Audit, PV, Chauffage</div>
          <div style={{ flex: 1, height: 1, background: tk.border, marginLeft: 16 }}></div>
        </div>
        <h1 style={{
          ...tk.display, fontSize: 120 * tk.heroScale, lineHeight: 0.92, margin: 0,
          color: tk.ink, letterSpacing: '-0.04em', maxWidth: 1200,
        }}>
          Quatre prestations,<br/>
          <span style={{ color: tk.accent, fontStyle: 'italic' }}>une seule logique :</span><br/>
          mesurer pour décider.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, marginTop: 56 }}>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: tk.inkSoft, margin: 0 }}>
            Chaque prestation s'appuie sur des relevés normés et des méthodes de calcul officielles. Nos rapports sont rédigés pour être lus et compris par un propriétaire — pas par un bureau d'études concurrent.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {DRI.SERVICES.map((s, i) => (
              <a key={s.key} href={`#${s.key}`} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 0', borderBottom: `1px solid ${tk.border}`,
                textDecoration: 'none', color: tk.ink,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, letterSpacing: '0.08em' }}>0{i+1}</span>
                  <span style={{ ...tk.display, fontSize: 20 }}>{s.title}</span>
                </div>
                <span style={{ color: tk.accent }}>↓</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Detailed service block — featured for "audit", lighter for others
function EcoServiceBlock({ tk, service, index, featured }) {
  const details = {
    dpe: {
      tagline: "Le document obligatoire pour vendre ou louer.",
      method: '3CL-2021',
      price: '150 — 280 €',
      validity: '10 ans',
      law: "Annexé à toute transaction immobilière depuis 2006. Sanctions en cas d'absence.",
      content: [
        ['Surface habitable', 'Mesure et qualification des pièces'],
        ['Enveloppe', "Murs, toiture, plancher, ouvertures"],
        ['Chauffage', 'Type, rendement, consommation'],
        ['Ventilation & ECS', 'Évaluation des systèmes en place'],
      ],
      output: 'Rapport DPE officiel (étiquette A→G énergie + climat), valable 10 ans.',
      cta: 'Demander un DPE',
    },
    audit: {
      tagline: "Le diagnostic poussé qui chiffre votre rénovation.",
      method: 'Th-BCE 2012 + DPE 3CL',
      price: '850 — 1 400 €',
      validity: '5 ans',
      law: "Obligatoire à la vente d'un logement classé F ou G depuis avril 2023.",
      content: [
        ['Thermographie infrarouge', 'Repérage des ponts thermiques et défauts d\'isolation'],
        ['Mesure des U-values', 'Calcul des transmissions thermiques par paroi'],
        ['État des équipements', 'Diagnostic chauffage, ECS, VMC, électricité'],
        ['Scénarios chiffrés', '3 trajectoires de rénovation, du minimal au global'],
        ['Plan d\'aides', 'Simulation MaPrimeRénov\', CEE, éco-PTZ'],
        ['Plan de financement', 'Coût HT/TTC, reste à charge, ROI'],
      ],
      output: "Rapport d'audit (40-80 pages) recevable Anah pour MaPrimeRénov' Ampleur.",
      cta: "Démarrer l'audit",
    },
    pv: {
      tagline: "Faisabilité et dimensionnement solaire.",
      method: 'PVGIS + Helios 3D',
      price: '320 — 520 €',
      validity: '2 ans',
      law: "Permet de bénéficier de la prime à l'autoconsommation et du tarif de revente.",
      content: [
        ['Étude d\'ensoleillement', 'Modélisation de la course du soleil sur 12 mois'],
        ['Analyse des ombrages', 'Cheminées, arbres, bâtiments voisins'],
        ['Dimensionnement', 'Nombre de panneaux, puissance crête, onduleur'],
        ['Étude de production', 'Estimation kWh/an, profil de production'],
      ],
      output: "Étude technique et économique (autoconsommation vs revente).",
      cta: 'Étudier mon toit',
    },
    chauffage: {
      tagline: "Comparer objectivement vos options de chauffage.",
      method: 'Calcul des déperditions + LCC',
      price: '280 — 450 €',
      validity: '3 ans',
      law: "Obligatoire avant remplacement de chaudière fioul (interdite depuis 2022).",
      content: [
        ['Calcul des déperditions', 'Bilan thermique pièce par pièce'],
        ['Comparatif des solutions', 'PAC, granulés, gaz, hybride, électricité'],
        ['Coût global (LCC)', 'Investissement + énergie + maintenance sur 20 ans'],
        ['Aides applicables', 'Calcul des primes selon la solution retenue'],
      ],
      output: 'Comparatif chiffré multi-solutions avec recommandation argumentée.',
      cta: 'Étudier mon chauffage',
    },
  };
  const d = details[service.key];

  return (
    <section id={service.key} style={{
      background: featured ? tk.bg : tk.bgDeep, padding: `${tk.density.sectionY}px 0`,
      borderTop: `1px solid ${tk.border}`,
    }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num={String(index + 1).padStart(2, '0')}>{service.title}</EcoSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: featured ? 64 : 40 }}>
          <div>
            <h2 style={{ ...tk.display, fontSize: featured ? 96 : 72, lineHeight: 0.95, margin: '24px 0 0', color: tk.ink, letterSpacing: '-0.03em' }}>
              {service.title.split(' ').slice(0, 2).join(' ')}<br/>
              <span style={{ color: tk.accent, fontStyle: 'italic' }}>{service.title.split(' ').slice(2).join(' ') || d.tagline.split(' ').slice(0, 3).join(' ')}</span>
            </h2>
            {featured && (
              <div style={{ marginTop: 24 }}>
                <span style={{ ...tk.mono, fontSize: 11, padding: '5px 10px', background: tk.accent, color: tk.bg, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>★ Le + demandé</span>
              </div>
            )}
          </div>
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: tk.ink, margin: '0 0 32px', fontWeight: 500 }}>{d.tagline}</p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: tk.inkSoft, margin: '0 0 32px' }}>{service.summary}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${tk.border}`, borderBottom: `1px solid ${tk.border}`, padding: '20px 0' }}>
              {[['Méthode', d.method], ['Tarif (100 m²)', d.price], ['Durée', service.duration]].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: tk.inkMute, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 15, color: tk.ink, fontWeight: 500, ...tk.mono }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Ce que contient {d.tagline.toLowerCase().includes('document') ? 'le DPE' : "la prestation"}</div>
            <div style={{ display: 'grid', gridTemplateColumns: featured ? 'repeat(2, 1fr)' : '1fr', gap: 12 }}>
              {d.content.map(([title, desc]) => (
                <div key={title} style={{
                  background: featured ? tk.bgPanel : tk.bg, border: `1px solid ${tk.border}`,
                  borderRadius: 16, padding: 24,
                }}>
                  <div style={{ ...tk.display, fontSize: 20, color: tk.ink, marginBottom: 8, lineHeight: 1.2 }}>{title}</div>
                  <div style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: tk.accent, color: tk.bg, borderRadius: 20, padding: 28 }}>
              <div style={{ ...tk.mono, fontSize: 11, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7 }}>Livrable</div>
              <div style={{ ...tk.display, fontSize: 24, lineHeight: 1.2, marginBottom: 16 }}>{service.deliverable}</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>{d.output}</p>
            </div>
            <div style={{ background: featured ? tk.bgPanel : tk.bg, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 24 }}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Validité</div>
              <div style={{ ...tk.display, fontSize: 22, color: tk.ink, lineHeight: 1.1 }}>{d.validity}</div>
            </div>
            <div style={{ background: featured ? tk.bgPanel : tk.bg, border: `1px solid ${tk.border}`, borderRadius: 20, padding: 24 }}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cadre légal</div>
              <p style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55, margin: 0 }}>{d.law}</p>
            </div>
            <a href="index.html#contact" style={{
              padding: '18px 24px', background: tk.bg, color: tk.accent,
              border: `1px solid ${tk.accent}`, borderRadius: 100,
              fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
            }}>{d.cta} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Focused breakdown of the audit deliverables — surfaces the depth of the audit
function EcoAuditDeliverables({ tk }) {
  return (
    <section style={{ background: tk.bgDeep, padding: `${tk.density.sectionY}px 0`, borderTop: `1px solid ${tk.border}` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="ZOOM">L'audit énergétique en détail</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 56px', color: tk.ink, letterSpacing: '-0.03em', maxWidth: 1100 }}>
          Ce qu'il y a <span style={{ color: tk.accent, fontStyle: 'italic' }}>dans un rapport</span> Diag Renov.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {ECO_DATA.DELIVERABLES_AUDIT.map((d, i) => (
            <div key={d.title} style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 24, padding: 32 }}>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.accent, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Partie {i + 1}</div>
              <h3 style={{ ...tk.display, fontSize: 24, color: tk.ink, margin: '0 0 20px', lineHeight: 1.15 }}>{d.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {d.items.map(item => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 13, color: tk.inkSoft, lineHeight: 1.5 }}>
                    <span style={{ color: tk.accent, ...tk.mono, fontSize: 12 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: tk.accent, color: tk.bg, borderRadius: 24, padding: 36, display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ ...tk.display, fontSize: 72, lineHeight: 1, fontStyle: 'italic' }}>40-80</div>
            <div>
              <div style={{ ...tk.mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8, marginBottom: 6 }}>pages</div>
              <div style={{ fontSize: 16, lineHeight: 1.4 }}>Un rapport complet, illustré, lisible.</div>
            </div>
          </div>
          <div style={{ background: tk.bgPanel, border: `1px solid ${tk.border}`, borderRadius: 24, padding: 36, display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ ...tk.display, fontSize: 72, lineHeight: 1, color: tk.accent, fontStyle: 'italic' }}>10j</div>
            <div>
              <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>délai</div>
              <div style={{ fontSize: 16, lineHeight: 1.4, color: tk.ink }}>Rapport remis sous 10 jours ouvrés après la visite.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoServicesProcess({ tk }) {
  return (
    <section style={{ background: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <EcoSectionLabel tk={tk} num="MÉTHODE">Comment on travaille</EcoSectionLabel>
        <h2 style={{ ...tk.display, fontSize: tk.density.head, lineHeight: 0.95, margin: '24px 0 64px', color: tk.ink, letterSpacing: '-0.03em', maxWidth: 1100 }}>
          Quatre étapes, <span style={{ color: tk.accent, fontStyle: 'italic' }}>zéro mauvaise surprise.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {DRI.PROCESS.map((p, i) => (
            <div key={p.n} style={{
              padding: '32px 32px 32px 0',
              borderTop: `2px solid ${tk.accent}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
                <div style={{ ...tk.display, fontSize: 72, lineHeight: 1, color: tk.accent }}>0{p.n}</div>
                <div style={{ ...tk.mono, fontSize: 11, color: tk.inkMute, letterSpacing: '0.08em' }}>
                  {i === 0 ? 'GRATUIT' : i === DRI.PROCESS.length - 1 ? 'AVEC VOUS' : 'INCLUS'}
                </div>
              </div>
              <h3 style={{ ...tk.display, fontSize: 26, color: tk.ink, margin: '0 0 12px', lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: tk.inkSoft, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcoServicesCTA({ tk }) {
  return (
    <section style={{ background: tk.accent, color: tk.bg, padding: `${tk.density.sectionY}px 0` }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
          <h2 style={{ ...tk.display, fontSize: 112, lineHeight: 0.92, margin: 0, letterSpacing: '-0.04em' }}>
            Pas sûr de la<br/>
            <span style={{ fontStyle: 'italic' }}>bonne prestation</span> ?
          </h2>
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.6, margin: '0 0 32px', opacity: 0.85 }}>
              On en discute en 15 minutes, gratuitement. On vous oriente vers la prestation adaptée — ou on vous dit que vous n'en avez pas besoin.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="index.html#contact" style={{
                padding: '18px 30px', background: tk.bg, color: tk.accent,
                fontSize: 15, fontWeight: 700, textDecoration: 'none', borderRadius: 100,
              }}>Demander un conseil →</a>
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

function EcoServices() {
  const [tweaks, setTweak] = useTweaks(ECO_TWEAK_DEFAULTS);
  const tk = ecoTokens(tweaks);
  // Re-order so audit is featured second (after DPE)
  const order = ['dpe', 'audit', 'pv', 'chauffage'];
  const services = order.map(k => DRI.SERVICES.find(s => s.key === k));
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: tk.ink, background: tk.bg }}>
      <EcoNav tk={tk} current="services" />
      <EcoServicesHero tk={tk} />
      {services.map((s, i) => (
        <EcoServiceBlock key={s.key} tk={tk} service={s} index={i} featured={s.key === 'audit'} />
      ))}
      <EcoAuditDeliverables tk={tk} />
      <EcoServicesProcess tk={tk} />
      <EcoServicesCTA tk={tk} />
      <EcoFooter tk={tk} />
      {window.location.search.includes('dev') && <EcoTweaksPanel tweaks={tweaks} setTweak={setTweak} />}
    </div>
  );
}

window.EcoServices = EcoServices;
