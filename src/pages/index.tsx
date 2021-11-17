import Head from "next/head";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/use-candy-machine";
import Header from "../components/header";
import Footer from "../components/footer";
import useWalletBalance from "../hooks/use-wallet-balance";
import { shortenAddress } from "../utils/candy-machine";
import Countdown from "react-countdown";
import { RecaptchaButton } from "../components/recaptcha-button";

const Home = () => {
  const [balance] = useWalletBalance();
  const [isActive, setIsActive] = useState(false);
  const wallet = useWallet();

  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    onMint,
    onMintMultiple,
    nftsData,
  } = useCandyMachine();

  return (
    <main className="p-5">
      <Toaster />
      <Head>
        <title>GiraffeSol Mint</title>
        <meta
          name="description"
          content="Minting site for GiraffeSol NFT on the Solana blockchain."
        />
        <link rel="icon" href="/giraffeicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,200,300,400,450,500,600,700,800"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className="page-container">
        <div className="title">
          <h1>Mint GiraffeSol: 0.25 SOL</h1>
        </div>
        <div className="giraffe-container">
          <img className="giraffe-img" src={`/giraffe1.png`} />
          <img className="giraffe-img" src={`/giraffe2.png`} />
          <img className="giraffe-img" src={`/giraffe3.png`} />
          <img className="giraffe-img" src={`/giraffe4.png`} />
        </div>
        <div className="text-container">
          {!wallet.connected && <h2>Please connect to your wallet above!</h2>}
          {!wallet.connected && (
            <br /><h2 className="show-mobile">(View on computer)</h2>
          )}
          {wallet.connected && (
            <>
              <h2>Balance: {(balance || 0).toLocaleString()} SOL</h2>
            </>
          )}

          <div className="small-break"></div>
          <div className="small-break"></div>

          {wallet.connected && (
            <RecaptchaButton
              actionName="mint"
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ? (
                <span className="button-wallet">
                  Mint 1 GiraffeSol {isMinting && "Loading..."}
                </span>
              ) : (
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </RecaptchaButton>
          )}

          <div className="small-break"></div>
        </div>
      </div>
    </main>
  );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <span className="uppercase">
      Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default Home;
