'use client';

import { useEffect } from 'react';

export default function ScrollSnapController() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const platform = window.navigator?.platform || '';
        const userAgent = window.navigator?.userAgent || '';
        if (platform.indexOf('Mac') !== -1 || userAgent.indexOf('Macintosh') !== -1) {
          document.documentElement.classList.add('is-mac');
        } else {
          document.documentElement.classList.add('is-not-mac');
        }
      } catch (e) {}
    }
  }, []);

  return null;
}
