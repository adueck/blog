const regularTransitiveVerbs = [
    {
        eng: {
            part: "hitting",
            pres: ["hit", "hits"],
        },
        stem: {p: "وه", f: "wah"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p: "توپ", f: "top", e: "the ball" },
            {p:"هلک", f:"halik", e:"the boy"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "writing",
            pres: ["write", "writes"],
        },
        stem: {p: "لیک", f: "leek"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"یوه کیسه", f:"yowa keesa", e:"a story"},
            {p:"یو خط", f:"yo khat", e:"a letter"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "putting",
            pres: ["put", "puts"],
        },
        stem: {p: "اچو", f: "achaw"},
        prefix: {p:"و", f:"wa"},
        os: [
            {p:"کتاب په کځوړه کې", f:"kitaab pu katsoRa ke", e:"the book in the bag"},
            {p:"پېسې په بټوه کې", f:"pese pu baTwa ke", e:"money in the wallet"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "sewing",
            pres: ["sew", "sews"],
        },
        stem: {p: "ګنډ", f: "ganD"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"یو بنیان", f:"yo banyaan", e:"a sweater"},
            {p:"یو کمیس", f:"yo kamees", e:"a shirt"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "drinking",
            pres: ["drink", "drinks"],
        },
        stem: {p: "سک", f: "sk"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"چای", f:"chaay", e:"tea"},
            {p:"اوبه", f:"ooba", e:"water"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "planting/sowing",
            pres: ["plant/sow", "plants/sows"],
        },
        stem: {p: "کر", f: "kar"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"غنم", f:"ghanum", e:"wheat"},
            {p:"ګلان", f:"gUlaan", e:"flowers"},
        ],
        transitive: true,
    },
];

export default regularTransitiveVerbs;
