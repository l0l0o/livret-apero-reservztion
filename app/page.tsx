import Image from "next/image";
import Navbar from "@/features/navbar/Navbar";
import NFZCounter from "@/features/NFZCounter/NFZCounter";

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
      <h1 className="text-3xl font-bold underline">Mon livret A(pero)</h1>
      <NFZCounter />
      {/* 
      <InviteButton />

      <div>
        <h2 className="text-2xl font-bold underline">Découvrez vos offres</h2>
        <Image src="/images/offres.png" alt="Filtres" className="w-4 h-4" />
      </div>

      <OffersFilter />
      <OffersList /> */}
    </div>
  );
}

const styles = {
  colorMainDark:
    "linear-gradient(46deg, #806FE1 -36.01%, #000 58.26%), #000613",
  height: "100vh",
  padding: "16px",
};
