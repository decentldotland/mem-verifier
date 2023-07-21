<p align="center">
  <a href="https://decent.land">
    <img src="https://github.com/decentldotland/MEM/assets/77340894/d840ef84-540f-4ccc-a7e0-1ed03c4af8dd" height="180">
  </a>
  <h3 align="center"><code>@decentdotland/mem-verifier</code></h3>
  <p align="center">Verify the existence of a MEM TX on the DA layer</p>
</p>



## Build & Run

```bash

git pull https://github.com/decentldotland/mem-verifier.git

npm install && npm run start

```
## Enpoint

#### base endpoint: ...

```console
GET /verify/:contract_id/mem_txid/:type?
```

if `type` is `"hosted"` the verifier will check the ME TX existence by checking its availability in the [indexer](https://github.com/decentldotland/mem-indexer) ; if not, the verifier will run an onchain verification process.
## License
This project is licensed under the [MIT License](./LICENSE)
