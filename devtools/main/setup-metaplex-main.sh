# echo "[INFO] Cleaning older cache folder for metaplex"
# rm -rf ./.cache/mainnet-beta-temp
echo "[INFO] Uploading all resources"
ts-node ../metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./nfts-sources --env mainnet-beta --keypair ~/.config/solana/candyfactory-mainnet.json --rent-days 30
echo "[INFO] Creating candy machine"
ts-node ../metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env mainnet-beta --keypair ~/.config/solana/candyfactory-mainnet.json --price 0.25 > ./logs/main/candy-machine-log.txt
echo "[INFO] Setting minting start date (goLiveDate)"
ts-node ../metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine -d "16 Nov 2021 01:00:00 UTC" --env mainnet-beta --keypair ~/.config/solana/candyfactory-mainnet.json > ./logs/main/candy-machine-start-date.txt


# verify?
# ts-node ../metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts verify --keypair ~/.config/solana/candyfactory-mainnet.json --log-level info > ./logs/main/verify.txt