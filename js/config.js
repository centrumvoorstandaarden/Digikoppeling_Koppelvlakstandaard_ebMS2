var respecConfig = {
    // this template doesn''t use all possible config parameters
    // see https://respec.org/docs/ for alle 
  
    // specStatus currently supported
    // WW, GN-WV: Werkversie
    // CV, GN-CV: Consultatie versie
    // VV, GN-VV: Vastgestelde versie (of Versie ter vaststelling)
    // DEF, GN-DEF: Definitieve versie
    // EO: Einde ondersteuning, verouderde versie, vervangen door nieuwe versie
    // TG: Versie teruggetrokken
    // BASIS, GN-BASIS: 'geen status'
    specStatus: "DEF",
  
    // SpecType currently supported
    // NO: "Norm"
    // ST: "Standaard"
    // IM: "Informatiemodel"
    // PR: "Praktijkrichtlijn"
    // HR: "Handreiking"
    // WA: "Werkafspraak"
    // AL: "Algemeen"
    // BD: "Beheerdocumentatie"
    // BP: "Best Practice"
    specType: "ST",
  
    // subtitle will be shown below title, can be omitted 
    //subtitle: "Hier komt een subtitle",
  
    // The specification's "short name", which is the name used in NL_Respec URLs
    shortName: "ebms",
  
    // A YYYY-MM-DD date. The publication date of the present document. 
    // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
    // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
    publishDate: "2021-02-01",
  
    // A YYYY-MM-DD date. When there is a previous release of a given specification, (W3C)
    previousPublishDate: "2020-09-01",

    publishVersion:"2.6",
    previousPublishVersion:"2.0",
  
    // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
    // A YYYY-MM-DD date. When a previousPublishDate is specified, this is typically required as well in order to generate the "Previous Version"
    previousMaturity: "DEF",
  
    // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
    license: 'cc-by-nd',
  
    // Overrides the standard logo with one or more other logos. (see https://respec.org/docs/#logos)
    // Geef een lege array op als er geen <default> logo moet staan
    // logos: [], 
  
    //Adds a JSON-LD script element containing schema.org information, which can be useful for search engines.
    doJsonLd: true,
  
    // An array of person objects describing the editors of the document
    // this can be simple or more elaborated
    editors: [{
      name: "Peter Haasnoot",
      url: "https://logius.nl/standaarden",
    },
    {
      name: "Pieter Hering",
      mailto: "api@digikoppeling.nl",
      company: "Logius",
      companyURL: "https://logius.nl/standaarden",
    }
    ],
    // An array of person objects describing the authors of the document
    // this can be simple or more elaborated
    authors: [{
      name: "Pieter Hering",
      url: "https://logius.nl/standaarden",
    }
    ],
    // The github option allows you associate your specification with a repository on GitHub.
    github: "https://github.com/centrumvoorstandaarden/Digikoppeling_Koppelvlakstandaard_ebMS2",
  
    // The URL of your test suite, gets included in the specification's headers.
    // testSuiteURI: "https://portaal.digikoppeling.nl/CV/home.html",
  
    // With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with <var> (e.g., Let <var>elem</var> be ...).
    // highlightVars: true,
  
    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,
  
    // Lints for accessibility issues using axe-core
    a11y: false,
  
    // A number indicating the maximum depth of the table of contents. Defaults to 0 which includes all levels.
    // maxTocLevel: 3,
  
    // Shows links to alternate formats (such as PDF, ePub) in the document header.
    // alternateFormats: [{
    //     label: "html",
    //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.html",
    //   },
    //   {
    //     label: "pdf",
    //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.pdf",
    //   },
    // ],
  
    // You can use markdown to write ReSpec based documents.
    // format: "markdown",
    // TODO  Do not suse this config, it may cause a problem., use instead:
    // <section data-format="markdown" data-include="<filename>.md"></section>
  
  
    // The specification's publish domain, which is used to publish the specification
    // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<specStatus>-<specType.toLowerCase()>-<conf.shortName>}-conf.publishDate>/`
    pubDomain: "dk",
    pubSubDomain: "ebms",
  
    // For Consultatieversies (specStatus="GN-CV") there is a default text in the section "Status of this document" that contains an emailaddress for feedback and comments on the document.
    nl_emailComments: "digikoppeling@logius.nl",
    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: true,
    
    // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
    // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
    nl_markdownSplitH1sections: true,
  
    // in some cases the Repository of a Specification document and the Issue- and PR bases are split
    // thi scan be configured below
    // if not set, the url's will be generated on the respecConfig.github automatically  
    nl_github: {
      //issueBase: "https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften/issues",
      revision: "https://github.com/centrumvoorstandaarden/Digikoppeling_Koppelvlakstandaard_ebMS2/commits",
      //pullrequests: "https://github.com/Logius-standaarden/Digikoppeling-Beveiligingsstandaarden-en-voorschriften/pulls"
    },
  
    // nl_organisationName is used for some company specific values in the header (and Sotd)
    // currently supported: Logius and Geonovum (default)  
    nl_organisationName: "Logius",
  
    // prefix for the names of company specific css, svg and ico prefixes
    // defaults to "GN-"  
    nl_organisationPrefix: "LS-",
  
    // class style can be automatically insertd in generated markdown tables
    // currently defaults to simple, but this may change    
    nl_markdownTableClass: "dkkvs",
  
    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
  
    // this url points to the folder where organsation specific css files are stored
    // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
    nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
    // nl_organisationStylesURL: "http://localhost:8081/respec/style/",
  
    // nl_organisationPublishURL points to organisation specifica publication page, used in header
    // defaults to  https://docs.geostandaarden.nl/"
    nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",
  
    // nl_logo refers to company logo
    // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
    nl_logo: {
      src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
      alt: "Logius",
      id: "Logius",
      height: 77,
      width: 44,
      url: "https://www.logius.nl/standaarden",
    },
  
    // If you need to include a one-off reference that isn't in the SpecRef database or 
    // if you need to override an existing reference with specific content, then you can use this configuration option.
    localBiblio: {
      NEN3610: {
        href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
        title:
          "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
        authors: [""],
        date: "Maart 2011",
        publisher: "Nederlands Normalisatie-instituut",
      },
      "Digikoppeling Architectuur": {
        href: "https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/static.html",
        title:
          "Digikoppeling Architectuur",
        authors: ["Logius Centrum voor standaarden"],
        date: "december 2020",
        publisher: "Logius",
      },
      "Digikoppeling Beveiligingsdocument": {
        href: "https://www.logius.nl/sites/default/files/bestanden/website/Digikoppeling_Beveiligingsstandaarden_en_voorschriften_v1.4.pdf",
        title: "Digikoppeling Beveiligingsstandaarden en voorschriften",
        date: "2020",
        publisher: "Logius",
      },
      "Digikoppeling Identificatie-Authenticatie":{
        href: "http://www.logius.nl/digikoppeling",
        title: "Digikoppeling Identificatie en Authenticatie",
        publisher: "Logius",
      },
      "Digikoppeling-Cert": {
        href: "http://www.logius.nl/digikoppeling",
        title: "Gebruik en achtergrond van Digikoppeling certificaten",
        publisher: "Logius",
      },
      "PKIoverheid": {
        href: "https://www.logius.nl/diensten/pkioverheid",
        title: "PKIoverheid",
        publisher: "Logius",
      },
      "PKI Policy": {
        href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
        title: "Programma van Eisen (PKIoverheid)",
        publisher: "Logius",
      },
      "PKI CA": {
        href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
        title: "Toegetreden vertrouwensdienstverleners",
        publisher: "Logius",
      },
      "PKIoverheid Certificaten": {
        href: "https://cert.pkioverheid.nl/",
        title: "Pkioverheid certificaten",
        publisher: "Logius"
      },
      "Logius website": {
        href: "https://logius.nl/digikoppeling",
        title: "Logius Digikoppeling",
        publisher: "Logius",
      },
      "Digikoppeling Compliance Voorziening": {
        href: "https://portaal.digikoppeling.nl",
        title: "Digikoppeling Compliance Voorziening",
        publisher: "Logius",
      },
      "NCSC 2019": {
        href: "https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls",
        title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS) v2.0",
        date: "April 2019",
        publisher: "NCSC",
      },
      "NCSC 2021": {
        href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
        title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS) v2.1",
        date: "Jan 2021",
        publisher: "NCSC",
      },
      "HTTPS-factsheet NCSC": {
        href:"https://www.ncsc.nl/documenten/factsheets/2019/juni/01/factsheet-https-kan-een-stuk-veiliger",
        title: "Factsheet HTTPS kan een stuk veiliger",
        date: "Nov 2014",
        publisher: "NCSC",
      }
    },
  };
  
  
