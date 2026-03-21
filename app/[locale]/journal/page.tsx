import { getTranslations } from 'next-intl/server'

export default async function JournalPage() {
  const t = await getTranslations('journal')

  const ARTICLES = [
    {
      id: 1,
      tag: t('a1tag'),
      title: t('a1title'),
      hook: t('a1hook'),
      story: t('a1story'),
      result: t('a1result'),
      cta: t('a1cta'),
    },
    {
      id: 2,
      tag: t('a2tag'),
      title: t('a2title'),
      hook: t('a2hook'),
      story: t('a2story'),
      result: t('a2result'),
      cta: t('a2cta'),
    },
    {
      id: 3,
      tag: t('a3tag'),
      title: t('a3title'),
      hook: t('a3hook'),
      story: t('a3story'),
      result: t('a3result'),
      cta: t('a3cta'),
    },
    {
      id: 4,
      tag: t('a4tag'),
      title: t('a4title'),
      hook: t('a4hook'),
      story: t('a4story'),
      result: t('a4result'),
      cta: t('a4cta'),
    },
  ]

  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('heroLabel')}</span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-6 max-w-3xl leading-tight">
            {t('heroTitle1')}<br />
            <span className="text-[#FF4D00]">{t('heroTitle2')}</span>
          </h1>
          <p className="text-lg text-[#0a0a0a]/60 dark:text-white/60 max-w-xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {ARTICLES.map((a) => (
            <article
              key={a.id}
              className="border-t border-black/10 dark:border-white/10 pt-12"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#FF4D00]/10 text-[#FF4D00] mb-4">
                {a.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0a0a0a] dark:text-white mb-6 leading-tight">
                {a.title}
              </h2>
              <p className="text-xl text-[#0a0a0a]/70 dark:text-white/70 font-medium leading-relaxed mb-8 italic">
                &ldquo;{a.hook}&rdquo;
              </p>
              <div className="text-[#0a0a0a]/65 dark:text-white/65 leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                {a.story}
              </div>
              <div className="p-5 rounded-xl border border-[#FF4D00]/20 bg-[#FF4D00]/5 mb-8">
                <p className="text-[#FF4D00] font-semibold text-sm leading-relaxed">
                  → <strong>Risultato:</strong> {a.result}
                </p>
              </div>
              <a
                href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20ho%20letto%20il%20journal%20e%20vorrei%20parlare%20del%20mio%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 text-xs min-h-[44px] inline-flex"
              >
                {a.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#070707] dark:bg-[#050505] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
            {t('newsletterTitle1')}<br /><span className="text-[#FF4D00]">{t('newsletterTitle2')}</span>
          </h2>
          <p className="text-white/60 mb-8">
            {t('newsletterDesc')}
          </p>
          <a
            href="https://www.instagram.com/ayromex_srl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            {t('newsletterBtn')}
          </a>
        </div>
      </section>

    </main>
  )
}
