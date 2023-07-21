import kwiljs from "kwil";
import dotenv from "dotenv";
import { DB_ID } from "./constants.js";
const Utils = kwiljs.Utils;
dotenv.config();

const kwil = new kwiljs.NodeKwil({
  kwilProvider: "https://provider.kwil.com",
});

export async function getDatabase() {
  const schema = await kwil.getSchema(DB_ID);
  const res = await kwil.selectQuery(DB_ID, "SELECT * FROM db");
  console.log(res.data);
  return res.data;
}