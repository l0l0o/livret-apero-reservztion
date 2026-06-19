import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis le LAN (téléphone / autre appareil).
  // Wildcard sur le dernier octet pour couvrir les changements d'IP DHCP du sous-réseau.
  allowedDevOrigins: ["10.14.73.*"],
};

export default nextConfig;
