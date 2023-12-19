import { addEnsContracts } from "@ensdomains/ensjs";
import { getTextRecord } from "@ensdomains/ensjs/public";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: addEnsContracts(mainnet),
  transport: http(),
});
const url = await getTextRecord(client, {
  name: "ens.eth",
  key: "url",
});
console.log(url);
