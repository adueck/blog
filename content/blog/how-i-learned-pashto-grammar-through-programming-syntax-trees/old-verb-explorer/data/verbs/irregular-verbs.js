const irregularVerbs = [
    {
        eng: {
            part: "going",
            pres: ["go", "goes"],
        },
        stem: {p: "تل", f: "tl"},
        presStem: {p: "ځ", f: "dz"},
        nounSub: {p: "لاړ", f: "laaR"},
        prefix: {p:"", f:""},
        os: [
            {p:"کابل ته", f:"kaabul ta", e: "to Kabul"},
            {p:"کور ته", f:"kor ta", e:"home"},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "reading",
            pres: ["read", "reads"],
        },
        stem: {p:"لوست", f:"lwust"},
        presStem: {p:"لول", f:"lwul"},
        prefix: {p:"و", f:"oo"},
        os: [
            {p:"کتاب", f:"kitaab", e: "a book"},
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "opening",
            pres: ["open", "opens"],
        },
        stem: {p:"پرانیست", f:"praaneest"},
        presStem: {p:"پرانیز", f:"praaneez"},
        prefix: {p:"", f:""},
        os: [
            {p:"ور", f:"war", e: "the door"},
            {p:"دوکان", f:"dookaan", e:"the shop"},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "coming",
            pres: ["come", "comes"],
        },
        stem: {p: "راتل", f: "raatl"},
        presStem: {p: "راځ", f: "raadz"},
        subjStem: {p: "راش", f: "raash"},
        prefix: {p:"", f:""},
        os: [
            {p:"کابل ته", f:"kaabul ta", e: "to Kabul"},
            {p:"کور ته", f:"kor ta", e:"home"},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "looking",
            pres: ["look", "looks"],
        },
        stem: {p: "کت", f: "kat"},
        presStem: {p: "ګور", f: "gor"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "seeing",
            pres: ["see", "sees"],
        },
        stem: {p: "لید", f: "leed"},
        presStem: {p:"وین", f:"ween"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "taking",
            pres: ["take", "takes"],
        },
        stem: {p: "اخیست", f: "akheest"},
        presStem: {p: "اخل", f: "akhl"},
        prefix: {p:"و", f:"wa"},
        os: [
          {},
          {},  
        ],
        transitive: true,
    },
    {
        eng: {
            part: "putting",
            pres: ["put", "puts"],
        },
        stem: {p: "کېښود", f: "kexod"},
        presStem: {p:"کېږد", f:"keGd"},
        prefix: {p:"", f:""},
        os: [
           {}, 
        ],
        transitive: true,
    },
    {
        eng: {
            part: "sitting",
            pres: ["sit", "sits"],
        },
        stem: {p: "کېناست", f: "kenaast"},
        presStem: {p:"کېن", f:"ken"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "wanting",
            pres: ["want", "wants"],
        },
        stem: {p: "غوښت", f: "ghwuxt"},
        presStem: {p:"غواړ", f:"ghwaaR"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "eating",
            pres: ["eat", "eats"],
        },
        stem: {p: "خوړ", f: "khoR"},
        presStem: {p:"خور", f:"khor"},
        prefix: {p:"و", f:"oo"},
        os: [
            {}
        ],
        transitive: true,
    },
    {
        eng: {
            part: "climbing",
            pres: ["climb", "climbs"],
        },
        stem: {p: "خت", f: "khat"},
        presStem: {p:"خېژ", f:"khejz"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "wearing",
            pres: ["wear", "wears"],
        },
        stem: {p: "اغوست", f: "aghost"},
        presStem: {p: "اغوند", f: "aghoond"},
        prefix: {p:"و", f:"wa"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "shooting",
            pres: ["shoot", "shoots"],
        },
        stem: {p:"ویست", f:"weest"},
        presStem: {p:"ول", f:"wal"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "crying",
            pres: ["cry", "cries"],
        },
        stem: {p: "ژړ", f: "jzaR"},
        presStem: {p:"ژاړ", f:"jzaaR"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},  
        ],
        transitive: true,
    },
    {
        eng: {
            part: "laughing",
            pres: ["laugh", "laughs"],
        },
        stem: {p: "خند", f: "khand"},
        presStem: {p:"خاند", f:"khaand"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "sending",
            pres: ["send", "sends"],
        },
        stem: {p: "بوتل", f: "botl"},
        presStem: {p:"بوځ", f:"bodz"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "calling/deeming",
            pres: ["call/deem", "calls/deems"],
        },
        stem: {p: "بل", f: "bal"},
        presStem: {p:"بول", f:"bol"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "bringing",
            pres: ["bring", "brings"],
        },
        stem: {p: "وړ", f: "waR"},
        presStem: {p:"یوس", f:"yos"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "brining",
            pres: ["bring", "brings"],
        },
        stem: {p: "راوست", f: "raawust"},
        presStem: {p:"راول", f:"raawul"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "passing over",
            pres: ["pass over", "passes over"],
        },
        stem: {p: "اوښت", f: "awUxt"},
        presStem: {p:"اوړ", f:"awR"},
        prefix: {p:"و", f:"wa"},
        os: [
            {},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "finding",
            pres: ["find", "finds"],
        },
        stem: {p: "موند", f: "moond"},
        presStem: {p:"موم", f:"moom"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "killing",
            pres: ["kill", "kills"],
        },
        stem: {p: "وژ", f: "wajz"},
        presStem: {p:"وژن", f:"wajzn"},
        prefix: {p:"و", f:"oo"},
        os: [
            {},
        ],
        transitive: true,
    },
    {
        eng: {
            part: "coming out",
            pres: ["come out", "comes out"],
        },
        stem: {p: "وت", f: "wat"},
        presStem: {p:"وځ", f:"oodz"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: false,
    },
    {
        eng: {
            part: "leaving/quitting",
            pres: ["leave/quit", "leaves/quits"],
        },
        stem: {p: "پرېښود", f: "prexod"},
        presStem: {p:"پرېږد", f:"preGd"},
        prefix: {p:"", f:""},
        os: [
            {},
        ],
        transitive: true,
    },
];

export default irregularVerbs;
