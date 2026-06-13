import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const LANG_KEY = 'intuifit-lang';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);

  constructor() {
    // Localized meta description (index.html ships the English source; this
    // overrides it on the French build for SEO).
    inject(Meta).updateTag({
      name: 'description',
      content: $localize`:@@meta.description:IntuiFit is a minimalist iOS workout tracker. Log a set in 3 seconds. No setup. No ads.`,
    });
  }

  /** Active locale, derived from the per-locale <base href> the build injects. */
  get currentLang(): 'en' | 'fr' {
    return /\/fr\/$/.test(this.baseHref()) ? 'fr' : 'en';
  }

  /** Absolute URL of the same route in the requested locale (full reload). */
  langHref(lang: 'en' | 'fr'): string {
    const enBase = this.baseHref().replace(/fr\/$/, '');
    const target = lang === 'fr' ? `${enBase}fr/` : enBase;
    return target + this.document.location.hash;
  }

  /** Remember the explicit choice so the auto-redirect respects it next time. */
  setLang(lang: 'en' | 'fr'): void {
    try {
      this.document.defaultView?.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // localStorage unavailable (private mode) — ignore, navigation still works.
    }
  }

  private baseHref(): string {
    return this.document.querySelector('base')?.getAttribute('href') ?? '/';
  }
}
