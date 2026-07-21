import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";

import styles from "./styles.module.css";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return null;
};

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <a className={styles.brand} href="https://lingotuner.io/" target="_blank" rel="noreferrer">
          <img
            className={styles.brandIcon}
            src="https://lingotuner.io/images/icon-only.png"
            alt=""
            width={36}
            height={36}
          />
          <img
            className={styles.brandText}
            src="https://lingotuner.io/images/text-only.png"
            alt="LingoTuner"
            height={22}
          />
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.badgeRow}>
              <span className={styles.shopifyBadge}>
                <svg
                  className={styles.shopifyIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M15.2 3.1c-.1-.5-.5-.7-.9-.8l-1.1-.2s-.8-.8-1.7-.6c-.9.2-1.5.9-1.7 1.6-.1.4-.2.9-.2 1.3l-2.1.6c-.4.1-.7.4-.7.8l-1.4 11.5c0 .3.2.6.5.7l8.1 1.5c.3.1.6-.1.7-.4l2.8-11.1c.1-.3 0-.6-.2-.8l-2.1-1.1zm-3.5.8c.3 0 .5.1.7.2l-1.5.4c.1-.5.4-.6.8-.6zm-.8 1.9 2.9-.8c.2.6.6 1.1 1.2 1.3l-3.8 15.1-7.4-1.4 1.3-10.7 5.8-1.5z"
                  />
                </svg>
                Officially Shopify supported
              </span>
              <p className={styles.eyebrow}>Verified translation for Shopify</p>
            </div>
            <h1 className={styles.heading}>
              Translation that checks its own work.
            </h1>
            <p className={styles.lead}>
              LingoTuner is a Shopify app that translates, back-translates, and
              verifies your catalog automatically — then writes approved
              translations back to your store.
            </p>
            <div className={styles.ctaRow}>
              <a
                className={styles.ctaPrimary}
                href="https://lingotuner.io/"
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
              <a className={styles.ctaSecondary} href="#connect-shopify">
                How to connect
              </a>
            </div>
          </div>

          <div className={styles.loopCard} aria-label="LingoTuner verification loop">
            <p className={styles.loopLabel}>
              The LingoTuner loop: translate → back-translate → verify
            </p>
            <div className={styles.loopStep}>
              <span className={styles.loopMeta}>English (original)</span>
              <p className={styles.loopText}>Hello, World!</p>
            </div>
            <div className={styles.loopArrow} aria-hidden="true">
              ↓
            </div>
            <div className={styles.loopStep}>
              <span className={styles.loopMeta}>Spanish (reference)</span>
              <p className={styles.loopText}>¡Hola, Mundo!</p>
            </div>
            <div className={styles.loopArrow} aria-hidden="true">
              ↓
            </div>
            <div className={`${styles.loopStep} ${styles.loopStepVerified}`}>
              <span className={styles.loopMeta}>English (validation)</span>
              <p className={styles.loopText}>Hello, World!</p>
              <span className={styles.verified}>✓ Verified</span>
            </div>
          </div>
        </section>

        <section
          id="connect-shopify"
          className={`${styles.section} ${styles.connectSection}`}
        >
          <p className={styles.eyebrow}>Shopify integration</p>
          <h2 className={styles.sectionTitle}>
            How to connect LingoTuner with Shopify
          </h2>
          <p className={styles.sectionLead}>
            Install once from Shopify, approve permissions, and translate your
            catalog from inside Admin — no CSV exports or agency handoffs.
          </p>

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div>
                <h3 className={styles.stepTitle}>Sign in with your shop</h3>
                <p className={styles.stepText}>
                  Click <strong>Visit website</strong>, enter your shop domain
                  (for example{" "}
                  <code className={styles.code}>my-store.myshopify.com</code>),
                  and continue to Shopify.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div>
                <h3 className={styles.stepTitle}>Install &amp; approve access</h3>
                <p className={styles.stepText}>
                  Review permissions and click <strong>Install app</strong>.
                  LingoTuner needs access to products, locales, and translations
                  so it can read your catalog and write verified translations
                  back.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div>
                <h3 className={styles.stepTitle}>Open it in Shopify Admin</h3>
                <p className={styles.stepText}>
                  Go to <strong>Apps → LingoTuner</strong>. The embedded
                  dashboard opens inside Shopify where you pick languages,
                  translate products and collections, and publish when ready.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <div>
                <h3 className={styles.stepTitle}>Translate &amp; go live</h3>
                <p className={styles.stepText}>
                  Choose target languages, run Autopilot or Hands-on
                  verification, then apply translations to your live store —
                  titles, descriptions, SEO metas, and more.
                </p>
              </div>
            </li>
          </ol>

          <div className={styles.connectCta}>
            <a
              className={styles.ctaPrimary}
              href="https://lingotuner.io/"
              target="_blank"
              rel="noreferrer"
            >
              Visit website
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Every translation gets verified. You choose who does it.
          </h2>
          <div className={styles.modeGrid}>
            <article className={styles.modeCard}>
              <span className={styles.modeIcon} aria-hidden="true">
                ⚡
              </span>
              <h3 className={styles.modeTitle}>Autopilot</h3>
              <p className={styles.modeText}>
                The AI Agent translates your text, back-translates it, compares
                the result with your original, and fixes discrepancies on its
                own — then hands you a summary of every change it made.
              </p>
            </article>
            <article className={styles.modeCard}>
              <span className={styles.modeIcon} aria-hidden="true">
                🎯
              </span>
              <h3 className={styles.modeTitle}>Hands-on</h3>
              <p className={styles.modeText}>
                Review the back-translation in your own language, edit the
                reference text, and re-verify until every nuance is exactly
                right. No knowledge of the target language needed.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Built for Shopify stores. Verified, not guessed.
          </h2>
          <p className={styles.sectionLead}>
            Native Shopify integration — translate products, collections, SEO
            titles, metas, and more, then push verified copy straight back to
            your store.
          </p>
          <ul className={styles.benefitList}>
            <li>
              <strong>Shopify Admin embedded</strong> — use LingoTuner without
              leaving your store dashboard.
            </li>
            <li>
              <strong>Catalog sync</strong> — products and collections stay in
              sync; new items can be translated as you add them.
            </li>
            <li>
              <strong>Translation API ready</strong> — verified translations are
              written via Shopify&apos;s translation APIs.
            </li>
            <li>
              <strong>Protected terms &amp; SEO</strong> — brand names, SKUs, and
              localized metas stay accurate across languages.
            </li>
          </ul>
        </section>

        <section className={styles.bottomCta}>
          <h2 className={styles.bottomTitle}>
            Connect Shopify and publish in any language.
          </h2>
          <p className={styles.bottomText}>
            Install the app, approve access, and start translating your catalog
            with built-in verification.
          </p>
          <a
            className={styles.ctaPrimary}
            href="https://lingotuner.io/"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} LingoTuner. All rights reserved.</p>
        <a href="https://lingotuner.io/" target="_blank" rel="noreferrer">
          lingotuner.io
        </a>
      </footer>
    </div>
  );
}
