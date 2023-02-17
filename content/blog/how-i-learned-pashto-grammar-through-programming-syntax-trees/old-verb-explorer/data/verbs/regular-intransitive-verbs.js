const regularIntransitiveVerbs = [
    {
        eng: {
            part: "speaking",
            pres: ["speak", "speaks"],
        },
        stem: {
            p: "غږ",
            f: "ghuG",
        },
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"په پښتو", f:"pu puxto", e:"in Pashto"},
            {p:"ور سره", f:"wăr sara", e:"with her"},
        ],
    },
    {
        eng: {
            part: "arriving",
            pres: ["arrive", "arrives"],
        },
        stem: {
            p: "رس",
            f: "ras",
        },
        prefix: {p:"و", f:"oo"},
        os: [
            {},
            {p:"کور ته", f:"kor ta", e:"home"},
        ],
    },
    {
        eng: {
            part: "understanding",
            pres: ["understand", "understands"],
        },
        stem: {
            p: "پوه",
            f: "poh",
        },
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"په پښتو", f:"pu puxto", e:"Pashto"},
            {},
        ],
    },
    {
        eng: {
            part: "falling",
            pres: ["fall", "falls"],
        },
        stem: {p: "غوړځ", f: "ghwurdz"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"د چوکۍ نه", f:"du chokuy na", e:"from the chair"},
            {},
        ],
    },
];

export default regularIntransitiveVerbs;
