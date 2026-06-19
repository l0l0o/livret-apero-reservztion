import Navbar from '@/features/navbar/Navbar';

import HomeContent from '@/features/HomeContent/HomeContent';

export default function Home() {
  // Solde NFZ de l'utilisateur : source unique de vérité partagée avec les offres.
  const userNfz = 180;

  return (
    <div
      className="flex flex-col"
      style={{
        background: styles.colorMainDark,
        height: styles.height,
        padding: styles.padding,
      }}
    >
      <Navbar />
      <div style={wrapperStyles}>
        <h1 style={titleStyles}>Mon livret A(pero)</h1>
        <HomeContent baseNfz={userNfz} maxValue={500} />
      </div>
    </div>
  );
}

const styles = {
  colorMainDark: 'linear-gradient(46deg, #806FE1 -36.01%, #000 58.26%), #000613',
  height: '100vh',
  padding: '16px 16px 0',
};

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  paddingTop: '16px',
  flex: 1,
  minHeight: 0,
};

const titleStyles = {
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: '20px',
};
