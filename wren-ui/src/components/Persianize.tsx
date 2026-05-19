import { useEffect } from 'react';
import { installPersianDomTranslator } from '@/utils/i18n/fa';

export default function Persianize() {
  useEffect(() => installPersianDomTranslator(), []);
  return null;
}
