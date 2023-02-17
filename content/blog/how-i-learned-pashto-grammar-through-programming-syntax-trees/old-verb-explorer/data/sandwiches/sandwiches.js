const sandwiches = [
    {
        pre: {p: "په", f: "pu"},
        post: {p: "کې", f: "ke"},
        e: "in/at",
        examples: [
            {
                p: {
                    before: {p:"زه", f:"zu"},
                    mid: {p:"کور", f:"kor"},
                    after: {p:"یم", f:"yum"},
                },
                e: {
                    before: "I'm ",
                    pre: "at",
                    mid: " home",
                },
            },
            {
                p: {
                    before: {p:"هغه", f:"hagha"},
                    mid: {p:"افغانستان", f:"afghaanistaan"},
                    after: {p:"وسېږي", f:"oseGee"},
                },
                e: {
                    before: "He lives ",
                    pre: "in",
                    mid: " Afganistan",
                },
            }
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "", f: ""},
        e: "of/'s",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"یوسف", f:"yoosuf"},
                    after: {p:"کور هلته دی", f:"kor halta dey"},
                },
                e: {
                    mid: "Yousuf",
                    post: "'s",
                    after: " house is there",
                },
            },
            {
                p: {
                    before: {p:"مونږ", f:"moonG"},
                    mid: {p:"پېښور", f:"pexawar"},
                    after: {p:"یو", f:"yoo"},
                },
                e: {
                    before: "We are ",
                    pre: "from ",
                    mid: "Peshawer",
                    after: ". (We are of Peshawer)",
                },
            },
        ],
    },
    {
        pre: {p: "", f: ""},
        post: {p: "ته", f: "ta"},
        e: "to/towards",
        examples: [
            {
                p: {
                    before: {p:"زه", f:"zu"},
                    mid: {p:"ښار", f:"xaar"},
                    after: {p:"ځم", f:"dzum"},
                },
                e: {
                    before: "I'm going ",
                    pre: "to ",
                    mid: "the city",
                },
            },
        ]
    },
    {
        pre: {p: "", f: ""},
        post: {p: "له", f: "la"},
        e: "to/towards",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"امران", f:"imraan"},
                    after: {p:"ورکه", f:"wărka"},
                },
                e: {
                    before: "Give it ",
                    pre: "to ",
                    mid: "Imran",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "سره", f: "sara"},
        e: "with",
        examples: [
            {
                p: {
                    before: {p:"هغه", f:"hagha"},
                    mid: {p:"احمد", f:"ahmad"},
                    after: {p:"دی", f:"dey"},
                },
                e: {
                    before: "He's ",
                    pre: "with ",
                    mid: "Ahmed",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "په", f: "pu"},
        post: {p: "سره", f: "sara"},
        e: "with (in the adverbial sense)",
        examples: [
            {
                p: {
                    before: {p:"هغه", f:"hagha"},
                    mid: {p:"احطیات", f:"ihtiyaat"},
                    after: {p:"کار کوي", f:"kaar kawee"},
                },
                e: {
                    before: "He works ",
                    pre: "with ",
                    mid: "caution ",
                    post: "",
                    after: "(ie. carefully)",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "نه", f: "na"},
        e: "from / than",
        examples: [
            {
                p: {
                    before: {p:"اروسه", f:"aroosa"},
                    mid: {p:"بازار", f:"baazaar"},
                    after: {p:"راځي", f:"raadzee"},
                },
                e: {
                    before: "Aroosa is coming ",
                    pre: "from",
                    mid: " the bazaar",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "پرته", f: "prata"},
        e: "without",
        examples: [
            {
                p: {
                    before: {p:"دا وړاندېز", f:"daa wRaandez"},
                    mid: {p:"شرط", f:"shart"},
                    after: {p:"کړی دی", f:"kuRey dey"},
                },
                e: {
                    before: "He's made that offer ",
                    pre: "without",
                    mid: " condition",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "څخه", f: "tsukha"},
        e: "from / than",
        examples: [
            {
                p: {
                    before: {p:"اروسه", f:"aroosa"},
                    mid: {p:"بازار", f:"baazaar"},
                    after: {p:"راځي", f:"raadzee"},
                },
                e: {
                    before: "Aroosa is coming ",
                    pre: "from",
                    mid: " the bazaar",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "راهیسې", f: "raaheese"},
        e: "since, for",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"درېو کالو", f:"dreyo kaalo"},
                    after: {p:"کار کوم", f:"kaar kawum"},
                },
                e: {
                    before: "I've been working ",
                    pre: "for ",
                    mid: "three years",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "په", f: "pu"},
        post: {p: "باندې", f: "baande"},
        e: "on / on top of",
        examples: [
            {
                p: {
                    before: {p:"کتاب", f:"kitaab"},
                    mid: {p:"مېز", f:"mez"},
                    after: {p:"دی", f:"dey"},
                },
                e: {
                    before: "The book is ",
                    pre: "on",
                    mid: " the table",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "لاندې", f: "laande"},
        e: "under",
        examples: [
            {
                p: {
                    before: {p:"کتاب", f:"kitaab"},
                    mid: {p:"مېز", f:"mez"},
                    after: {p:"دی", f:"dey"},
                },
                e: {
                    before: "The book is ",
                    pre: "under",
                    mid: " the table",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "تر", f: "tur"},
        post: {p: "پورې", f: "pore"},
        e: "until/up to",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"اوسه", f:"oosa"},
                    after: {p:"کار کوم", f:"kaar kawum"},
                },
                e: {
                    before: "I've been working ",
                    pre: "up until",
                    mid: " now",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "دپاره", f: "dupara"},
        e: "for",
        examples: [
            {
                p: {
                    before: {p:"دا پیاله", f:"daa piyaala"},
                    mid: {p:"امداد", f:"imdaad"},
                    after: {p:"ده", f:"da"},
                },
                e: {
                    before: "This cup is ",
                    pre: "for",
                    mid: " Imdad",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "له مخې", f: "la mukhe"},
        e: "according to",
        examples: [
            {
                p: {
                    before: {p:"هغه", f:"hagha"},
                    mid: {p:"یو پلان", f:"yo plaan"},
                    after: {p:"کار کوي", f:"kaar kawee"},
                },
                e: {
                    before: "He works ",
                    pre: "according to",
                    mid: " a plan",
                    post: "",
                    after: "",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "مخکې", f: "mukhke"},
        e: "before",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"جنګ", f:"jang"},
                    after: {p:"خلک خوساله وو", f:"khalk khoshaala woo"},
                },
                e: {
                    before: "",
                    pre: "Before",
                    mid: " the war",
                    post: "",
                    after: " people were happy",
                },
            },
        ]
    },
    {
        pre: {p: "له", f: "la"},
        post: {p: "وروسته", f: "wroosta"},
        e: "after",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"جنګ", f:"jang"},
                    after: {p:"کاروبار خراب شو", f:"kaarobaar kharaab sho"},
                },
                e: {
                    before: "",
                    pre: "After",
                    mid: " the war",
                    post: "",
                    after: " business became bad",
                },
            },
        ]
    },
    {
        pre: {p: "د", f: "du"},
        post: {p: "نه بعد", f: "na ba'd"},
        e: "after",
        examples: [
            {
                p: {
                    before: {p:"", f:""},
                    mid: {p:"ډېر وخت", f:"Der wakht"},
                    after: {p:"خپل کلي ته راغلم", f:"khpul kulee ta raaghlum"},
                },
                e: {
                    before: "",
                    pre: "After",
                    mid: " a long time",
                    post: "",
                    after: " I've come to my own village",
                },
            },
        ]
    },
    {
        pre: {p:"بې له", f:"be la"},
        post: {p:"ه", f:"a"},
        e: "without",
        examples: [
            {
                p: {
                    before: {p:"داسې کلمې", f:"daase kalime"},
                    mid: {p:"کوم تغیر", f:"kUm tagheer"},
                    after: {p:"پښتو ته راننوتې دي", f:"puxto ta raanunawute dee"},
                },
                e: {
                    before: "Words like this came into Pashto",
                    pre: "without",
                    mid: "any change",
                    post: "",
                },
            },
        ],
    },
];

export default sandwiches;
