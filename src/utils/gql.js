import axios from "axios";

export async function getMemTransactions(functionId) {
  try {
    const query = `query {
    transactions(
        tags: [
            {
                name: "App-Name",
                values: ["MEM"]
            },
            {
                name: "Function",
                values: ["${functionId}"]
            }
        ]
        owners:["IDsQSfjrHhw754PI3G8hZwAhs17KruE1jDJA0vB_R5A"]
    ) {
        edges {
            node {
                id
            }
        }
    }
}`;
    const response = await axios.post(
      "https://arweave.net/graphql",
      { query },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    const gateway_res = response?.data?.data?.transactions?.edges;
    const res = gateway_res.map((tx) => tx.node.id);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
}

