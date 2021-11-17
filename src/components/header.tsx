import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-x-0">
      <div className="text-black space-x-5 text-lg flex items-center">
        <Link href="https://www.solanalongnecks.com/">
          <img className="header-img" src={`/giraffe3.png`} />
        </Link>
      </div>
      <div className="hide-mobile">
        <div className="flex space-x-5 items-center">
          <WalletMultiButton
            style={{
              backgroundColor: "#fff",
              color: "#1f1c45",
              border: "2px solid #1f1c45",
              fontFamily: "IBM Plex Mono",
            }}
          />
          <WalletDisconnectButton
            style={{
              backgroundColor: "#fff",
              color: "#1f1c45",
              border: "2px solid #1f1c45",
              fontFamily: "IBM Plex Mono",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
