import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis l'IP LAN (téléphone / autre appareil)
  allowedDevOrigins: ["10.14.73.116"],
};

export default nextConfig;
