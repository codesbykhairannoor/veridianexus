import { useTranslation } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useTranslation(); // 't' is now used

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('home.welcome')}</h1>
        <p className="text-lg text-gray-600">{t('home.description')}</p>
      </div>
    </main>
  );
}