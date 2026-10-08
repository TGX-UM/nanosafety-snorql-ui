window.SNORQL_CONFIG = {
    endpoint: "https://nanosafety.rdf.bigcat-bioinformatics.org/sparql",
    examplesRepo: "https://github.com/h2020-riskgone/SPARQLQueries",
    examplesBranch: "main",
    defaultGraph: "http://nanosafety.org",
    title: "Nanosafety Snorql UI",
    poweredByLink: "https://github.com/wikipathways/Snorql-UI",
    poweredByLabel: "Snorql UI",
    showLiteralType: false,
    renderers: {
        enableSVGRenderer: false,
        enableSMILESRenderer: false
    },
    // Optional navbar linkout buttons, rendered in array order by linkouts.js.
    // Keep the live default EMPTY so existing deployments render unchanged.
    // Each entry: { label, url, authors?, icon? }
    //   label   - button text (shown as plain text; HTML is escaped)
    //   url     - http/https/mailto only; other schemes (javascript:/data:) are rejected
    //   authors - optional; used as the accessible name (aria-label/title) when present
    //   icon    - optional Bootstrap-3 glyphicon suffix, e.g. "book" -> glyphicon-book
    //             (allowlisted to [a-z0-9-]; invalid suffixes are dropped)
    // SECURITY: this array is untrusted input — do not remove the escaping or
    // the URL scheme allowlist in assets/js/linkouts.js. See FORK.md.
    // Example:
    //   linkouts: [
    //     { label: "Tutorial", url: "https://example.org/tutorial", icon: "book" },
    //     { label: "Credits",  url: "https://example.org/about", authors: "Jane Doe et al." }
    //   ],
    linkouts: [
        { label: "Examples", url: "https://github.com/h2020-riskgone/SPARQLQueries", icon: "list" }
    ],

    // Branding (applied by the engine's branding.js; colours are in theme.css).
    logo: { src: "assets/images/nanosafety-rdf-logo.png", alt: "NanoSafety RDF", height: 72 },
    favicon: "assets/images/nanosafety-favicon.ico",
    endpointLabel: "SPARQL Endpoint",
    metaDescription: "Explore the NanoSafety RDF data with SPARQL",
    metaAuthor: "Translational Genomics, Maastricht University",
    footer: [
        { label: "NanoSafety RDF", url: "https://nanosafety.rdf.bigcat-bioinformatics.org/sparql" }, " | ",
        { label: "Example queries", url: "https://github.com/h2020-riskgone/SPARQLQueries" }, " | ",
        { label: "GitHub", url: "https://github.com/tgx-um/nanosafety-snorql-ui" }, " \u2014 ",
        { image: "assets/images/Logo-TGX.png", url: "https://www.maastrichtuniversity.nl/research/translational-genomics", alt: "TGX", height: 32 }, " ",
        { image: "assets/images/riskgone.png", url: "https://riskgone.wp.nilu.no/", alt: "RiskGONE", height: 32 }, " ",
        { image: "assets/images/nanosolveit.png", url: "https://nanosolveit.eu/", alt: "NanoSolveIT", height: 32 }, " ",
        { image: "assets/images/sbd4nano2.png", url: "https://www.sbd4nano.eu/", alt: "SbD4Nano", height: 32 }
    ],
    // Optional branding (applied by assets/js/branding.js). Leave a key out to
    // keep the markup in index.html. Text is set as plain text and URLs are
    // allowlisted; there is no raw-HTML option. Colours go in assets/css/theme.css.
    // Example:
    //   logo: { src: "assets/images/my-logo.png", alt: "My SPARQL", height: 50 },
    //   favicon: "assets/images/my-favicon.png",
    //   endpointLabel: "SPARQL Endpoint",
    //   metaDescription: "Explore my data with SPARQL",
    //   metaAuthor: "My Team",
    //   footer: [
    //     { label: "My project", url: "https://example.org" }, " | ",
    //     { label: "Source", url: "https://github.com/me/my-snorql" },
    //     " | Data: ", { label: "CC-BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/", title: "Data licence" },
    //     " ", { image: "assets/images/partner.png", url: "https://example.org", alt: "Partner", height: 25 }
    //   ],
    namespaces: {
        rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        rdfs: "http://www.w3.org/2000/01/rdf-schema#",
        owl: "http://www.w3.org/2002/07/owl#",
        xsd: "http://www.w3.org/2001/XMLSchema#",
        skos: "http://www.w3.org/2004/02/skos/core#",
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        foaf: "http://xmlns.com/foaf/0.1/",
        bibo: "http://purl.org/ontology/bibo/",
        void: "http://rdfs.org/ns/void#",

        // Ontologies used in the NanoSafety data (eNanoMapper ontology stack)
        obo: "http://purl.obolibrary.org/obo/",
        oboInOwl: "http://www.geneontology.org/formats/oboInOwl#",
        npo: "http://purl.bioontology.org/ontology/npo#",
        enm: "http://purl.enanomapper.net/onto/internal/npo-ext.owl#",
        ncit: "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
        bao: "http://www.bioassayontology.org/bao#",
        sio: "http://semanticscience.org/resource/",
        cheminf: "http://semanticscience.org/resource/CHEMINF_",
        aopo: "http://aopkb.org/aop_ontology#",
        clo: "http://www.ebi.ac.uk/cellline/",

        // Wikidata (publications)
        wd: "http://www.wikidata.org/entity/",
        wdt: "http://www.wikidata.org/prop/direct/"
    },
    // No autocomplete pickers: the NanoSafety examples take no parameters.
    autocompleteTypes: {},
    welcomeTitle: "Nanosafety RDF Explorer",
    welcomeMessage: "<p>Browse and run SPARQL queries against the NanoSafety RDF endpoint: nanomaterial, assay and publication data from the RiskGONE, NanoSolveIT and SbD4Nano projects, annotated with the eNanoMapper ontology.</p><ul><li><strong>Browse examples</strong> in the tree on the right</li><li><strong>Write your own SPARQL</strong> in the editor below; common ontology prefixes are added for you</li></ul>",

    // ---- Phase 9: Query Reliability knobs ----
    // queryTimeoutMs: XHR timeout in milliseconds. Hung requests fail in bounded
    // time instead of polling indefinitely. Forks for federated/heavy queries
    // may bump this to 120000 or higher. (RELIAB-05)
    queryTimeoutMs: 60000,

    // maxGetUrlBytes: Single threshold gating BOTH the GET→POST method switch
    // and the permalink refusal. Computed against the prefixed, URL-encoded
    // query length. 4000 is conservative (well below nginx 8KB default and
    // Cloudflare 8KB limit). (RELIAB-03 + RELIAB-04)
    maxGetUrlBytes: 4000,

    // sendPrefixBlock: Controls PREFIX block delivery to the endpoint.
    //   'auto'  — used-only token-scan; prepend only prefixes the query
    //             references and that are NOT already declared inline (default).
    //   true    — force-prepend ALL CONFIG.namespaces entries not already
    //             declared inline (predictable, slightly heavier URL).
    //   false   — skip prepending entirely (rely on server-registered prefixes;
    //             best for Virtuoso-only forks). (RELIAB-01)
    sendPrefixBlock: 'auto',

    // bitlyToken: Bitly access token used by "Get Permalink" to shorten the ?q= URL.
    // It is visible to anyone who loads the page, so use a token with no other rights.
    // Empty string = no shortening; the full permalink is shown. Set at container start
    // with SNORQL_BITLY_TOKEN (an empty value disables shortening).
    bitlyToken: "b0021fe4839aefbc4e7967b3578443d9ea6e89bf"
};
