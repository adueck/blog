export const laaR = {
    e: "gone",
    masc: [
        {p:"لاړ", f:"laaR"},
        {p:"لاړ", f:"laaR"},
        {p:"لاړو", f:"laaR"},
    ],
    fem: [
        {p:"لاړه", f:"laaRa"},
        {p:"لاړې", f:"laaRe"},
        {p:"لاړو", f:"laaRo"},
    ],
}

// Types of adjectives
// 1. Ending in ی
// 2. Ending in ی with stress on the end
// 3. Irregular
// 4. Ending in a consonant
// 5. Unchangeable

const adjectives = [
    // Ending in ی
    {
        e: "tired",
        type: 1,
        p: "ستړی",
        f: "stuRey",
    },
    {
        e: "new",
        type: 1,
        p: "نوی",
        f: "nuwey",
    },
    {
        e: "beautiful",
        type: 1,
        p: "ښکلی",
        f: "xkuley",
    },
    {
        e: "hungry",
        type: 1,
        p: "وږی",
        f: "wuGey",
    },
    {
        e: "thirsty",
        type: 1,
        p: "تږی",
        f: "tuGey",
    },
    // Ending in ی with stress on the end
    {
        e: "small",
        type: 2,
        p: "کوچنی",
        f: "koochnéy",
    },
    {
        e: "last",
        type: 2,
        p: "وروستی",
        f: "wroostéy",
    },
    {
        e: "little",
        type: 2,
        p: "تنکی",
        f: "tankéy",
    },
    {
        e: "crazy",
        type: 2,
        p: "لېونی",
        f: "lewanéy",
    },
    // Irregular
    {
        e: "heavy",
        type: 3,
        p: "دروند",
        f: "droond",
        masc: [
            {p:"دروند", f:"droond"},
            {p:"درانه", f:"draanu"},
            {p:"درنو", f:"drano"},
        ],
        fem: [
            {p:"درنه", f:"drana"},
            {p:"درنې", f:"drane"},
            {p:"درنو", f:"drano"},
        ],
    },
    {
        e: "old",
        type: 3,
        p: "زوړ",
        f: "zoR",
        masc: [
            {p:"زوړ", f:"zoR"},
            {p:"زاړه", f:"zaaRu"},
            {p:"زړو", f:"zaRo"},
        ],
        fem: [
            {p:"زړه", f:"zaRa"},
            {p:"زړې", f:"zaRe"},
            {p:"زړو", f:"zaRo"},
        ],
    },
    {
        e: "good",
        type: 3,
        p: "ښه",
        f: "xu",
        masc: [
            {p:"ښه", f:"xu"},
            {p:"ښه", f:"xu"},
            {p:"ښو", f:"xo"},
        ],
        fem: [
            {p:"ښه", f:"xa"},
            {p:"ښې", f:"xe"},
            {p:"ښو", f:"xo"},
        ],
    },
    {
        e: "full (satiated)",
        type: 3,
        p: "موړ",
        f: "moR",
        masc: [
            {p:"موړ", f:"moR"},
            {p:"ماړه", f:"maaRu"},
            {p:"مړو", f:"maRo"},
        ],
        fem: [
            {p:"مړه", f:"maRa"},
            {p:"مړې", f:"maRe"},
            {p:"مړو", f:"maRo"},
        ],
    },
    {
        e: "hot",
        type: 3,
        p: "تود",
        f: "tod",
        masc: [
            {p:"تود", f:"tod"},
            {p:"تاوده", f:"taawdu"},
            {p:"تودو", f:"tawdo"},
        ],
        fem: [
            {p:"توده", f:"tawda"},
            {p:"تودې", f:"tawde"},
            {p:"تودو", f:"tawdo"},
        ],
    },
    {
        e: "sweet",
        type: 3,
        p: "خوږ",
        f: "khoG",
        masc: [
            {p:"خوږ", f:"khoG"},
            {p:"خواږه", f:"khwaaGu"},
            {p:"خوږو", f:"khwuGo"},
        ],
        fem: [
            {p:"خوږه", f:"khwuGa"},
            {p:"خوږې", f:"khwuGe"},
            {p:"خوږو", f:"khwuGo"},
        ],
    },
    {
        e: "bitter",
        type: 3,
        p: "تریخ",
        f: "treekh",
        masc: [
            {p: "تریخ", f:"treekh"},
            {p: "تراخه", f: "traakhu"},
            {p: "ترخو", f: "turkho"},
        ],
        fem: [
            {p: "ترخه", f: "turkha"},
            {p: "ترخې", f: "turkhe"},
            {p: "ترخو", f: "turkho"},
        ],
    },
    {
        e: "mature/ripe",
        type: 3,
        p: "پوخ",
        f: "pokh",
        masc: [
            {p:"پوخ", f:"pokh"},
            {p:"پاخه", f:"paakhu"},
            {p:"پخو", f:"pakho"},
        ],
        fem: [
            {p:"پخه", f:"pakha"},
            {p:"پخې", f:"pakhe"},
            {p:"پخو", f:"pakho"},
        ],
    },
    {
        e: "cold",
        type: 3,
        p: "سوړ",
        f: "soR",
        masc: [
            {p:"سوړ", f:"soR"},
            {p:"ساړه", f:"saaRu"},
            {p:"سړو", f:"saRo"},
        ],
        fem: [
            {p:"سړه", f:"saRa"},
            {p:"سړې", f:"saRe"},
            {p:"سړو", f:"saRo"},
        ],
    },
    {
        e: "lying",
        type: 3,
        p: "پروت",
        f: "پراته",
        masc: [
            {p:"پروت", f:"prot"},
            {p:"پراته", f:"praatu"},
            {p:"پرتو", f:"prato"},
        ],
        fem: [
            {p:"پرته", f:"prata"},
            {p:"پرتې", f:"prate"},
            {p:"پرتو", f:"prato"},
        ]
    },
    // Ending with a consonant
    {
        e: "light",
        type: 4,
        p: "سپک",
        f: "spuk",
    },
    {
        e: "big",
        type: 4,
        p: "غټ",
        f: "ghuT",
    },
    {
        e: "bad",
        type: 4,
        p: "بد",
        f: "bud",
    },
    {
        e: "well",
        type: 4,
        p: "جوړ",
        f: "joR",
    },
    {
        e: "tall",
        type: 4,
        p: "جګ",
        f: "jig",
    },
    // Unchanging
    {
        type: 5,
        e: "upset/sad",
        p: "خفه",
        f: "khufa",
    },
    {
        type: 5,
        e: "happy",
        p: "خوشاله",
        f: "khoshaala"
    },
    {
        type: 5,
        e: "clear/apparent",
        p: "ښکاره",
        f: "xkaara",
    },
];

export default adjectives;