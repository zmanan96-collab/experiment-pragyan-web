'use client';

import { useEffect } from 'react';

export default function ScrollSnapController() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const userAgent = window.navigator?.userAgent || '';
        const isMac = /Mac|iPhone|iPad|iPod/.test(userAgent);
        if (isMac) {
          document.documentElement.classList.add('is-mac');
        } else {
          document.documentElement.classList.add('is-not-mac');
        }
      } catch (e) {
        console.warn('Platform detection failed:', e);
      }
    }
  }, []);

  return null;
}
