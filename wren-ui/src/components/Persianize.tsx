import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { installPersianDomTranslator } from '@/utils/i18n/fa';

export default function Persianize() {
  const router = useRouter();

  useEffect(() => installPersianDomTranslator(), []);

  useEffect(() => {
    document.documentElement.dataset.wrenPath = router.pathname;
  }, [router.pathname]);

  return null;
}
