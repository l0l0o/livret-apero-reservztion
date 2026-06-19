import Navbar from '@/features/navbar/Navbar';
import OffersList from '@/features/offers-list/OffersList';

import NFZCounter from "@/features/NFZCounter/NFZCounter";
import InviteButton from "@/features/InviteButton/InviteButton";

export default function Home() {
  return (
    <div
      style={{
        background: styles.colorMainDark,
        height: styles.height,
        padding: styles.padding,
      }}
    >
      <Navbar />
      <div style={wrapperStyles}>
        <h1 style={titleStyles}>Mon livret A(pero)</h1>
        <NFZCounter NFZvalue={280} maxValue={500} />
        <div className="flex flex-col items-center justify-center gap-2">
          <InviteButton />
          <div className="flex items-center gap-3">
            <p className="text-white text-sm">0/5 membres</p>
            <span className="text-white text-sm">|</span>
            <div className="flex items-center gap-1 ml-1">
              <span className="font-bold text-white">+20</span>
              <Image
                src="/image/NightFlouz.png"
                alt="Coin"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>

        {/* 

      <div>
        <h2 className="text-2xl font-bold underline">Découvrez vos offres</h2>
        <Image src="/images/offres.png" alt="Filtres" className="w-4 h-4" />
      </div>

      <OffersFilter /> */}
        <OffersList />
      </div>
    </div>
  );
}

const styles = {
  colorMainDark:
    "linear-gradient(46deg, #806FE1 -36.01%, #000 58.26%), #000613",
  height: "100vh",
  padding: "16px",
};

const wrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "16px 0px",
};

const titleStyles = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "20px",
};
