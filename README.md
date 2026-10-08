[![Docker Build](https://github.com/tgx-um/nanosafety-snorql-ui/actions/workflows/docker.yml/badge.svg)](https://github.com/tgx-um/nanosafety-snorql-ui/actions/workflows/docker.yml)

# NanoSafety RDF Explorer

SPARQL query interface for the NanoSafety RDF endpoint, live at
<https://nanosafety.rdf.bigcat-bioinformatics.org/>. The data comes from the RiskGONE, NanoSolveIT and
SbD4Nano projects; the example queries live in
[h2020-riskgone/SPARQLQueries](https://github.com/h2020-riskgone/SPARQLQueries).

This repository holds only the **NanoSafety instance** of the Snorql UI. The UI itself (the "engine")
lives in [wikipathways/Snorql-UI](https://github.com/wikipathways/Snorql-UI) and is published as
`ghcr.io/wikipathways/snorql-ui`. The image built here is that engine plus:

| File | What it sets |
|---|---|
| [`config.js`](config.js) | endpoint and default graph, examples repo and branch, namespaces, logo, favicon, footer |
| [`theme.css`](theme.css) | colours from the NanoSafety RDF logo |
| [`images/`](images) | logo, favicon, TGX and project logos |

It replaces [h2020-riskgone/nanosafety-snorql-extended](https://github.com/h2020-riskgone/nanosafety-snorql-extended)
(2021, based on Snorql Extended Edition).

## Changing things

- **Instance settings or look:** edit the files above. `node test/check-config.js` checks `config.js`;
  CI runs it before building `ghcr.io/tgx-um/nanosafety-snorql-ui`.
- **UI features or bugs:** change the engine upstream, then bump the `FROM` tag in the
  [`Dockerfile`](Dockerfile). Dependabot opens that PR when a new engine version is published.
- At container start the engine applies environment variables over `config.js` (`SNORQL_ENDPOINT`,
  `SNORQL_TITLE`, `DEFAULT_GRAPH`, ...). The browser tab title comes from `SNORQL_TITLE`.
- The endpoint sends no CORS headers, so the UI must be served from the same host as the endpoint
  (as in production); a local copy shows the page but cannot run queries.

## Try it locally

```bash
docker build -t nanosafety-snorql-ui .
docker run --rm -p 8088:80 -e SNORQL_TITLE="Nanosafety Snorql UI" nanosafety-snorql-ui
```

## Deployment

Runs as `nanosafety_snorql` on the VHP4Safety Strato Docker Swarm, next to the `nanosafety_virtuoso`
endpoint. Roll out a new image with
`docker service update --with-registry-auth --image ghcr.io/tgx-um/nanosafety-snorql-ui@sha256:<digest> nanosafety_snorql`
(stateless; never redeploy the stack without checking the Virtuoso service). Cluster-side reference:
`/mnt/gluster/documentation/services/nanosafety.md` on tgx1.

Questions and bugs: [GitHub Issues](https://github.com/tgx-um/nanosafety-snorql-ui/issues).
