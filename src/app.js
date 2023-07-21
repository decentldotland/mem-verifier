import { getMemTransactions } from "./utils/gql.js";
import { TransactionVerifier } from "./utils/verifier.js";
import { getDatabase } from "./utils/indexer.js";
import express from "express";
import cors from "cors";

// TransactionVerifier("Ej2_F6KyxJ3216hupMcfC0keC8BSmjPNLgoviGoxeFk", "5d9cea2265e26625a59221f02ebf5b5c2599dbacb139fd22b9c41df2ef514fa067c92bca3a5f9a2504133f6b4fe93d233f103b8a950ff52ef39bd8ac1ba41d86")

const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/verify/:func_id/:mem_tx_id/:type?", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { func_id, mem_tx_id, type } = req.params;
  const result = await TransactionVerifier(func_id, mem_tx_id, type);
  res.send({result});
  return;
});

app.listen(port, async () => {
  console.log(`[✅] running at PORT:${port}`);
});

