import axios from "axios";
import { getMemTransactions } from "./gql.js";
import { getDatabase } from "./indexer.js";

export async function getMemIdsOf(txid) {
  try {
    const data = (await axios.get(`https://arweave.net/${txid}`))?.data;
    console.log(data?.entities?.map((tx) => tx?.raw?.id));
    return data?.entities?.map((tx) => tx?.raw?.id);
  } catch (error) {
    return [];
  }
}

export async function TransactionVerifier(functionId, memId, type) {
  try {
    if (type === "hosted") {
      const isMemTx = (await getDatabase())?.find(
        (tx) => tx.mem_id === memId && tx.contract_id === functionId,
      );
      return Boolean(isMemTx);
    }

    const txs = await getMemTransactions(functionId);
    for (const tx of txs) {
      const mem_ids = await getMemIdsOf(tx);
      if (mem_ids.includes(memId)) {
        console.log("true verified");
        return true;
      }
    }
    console.log("false unverified");
    return false;
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
}
