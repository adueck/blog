const pronouns = [
    [
        {p:"زه", f:"zu", e:"I", engEquative: "am"}, {p:"مونږ", f:"moonG", e:"we", engEquative: "are"},
    ],
    [
        {p:"ته", f:"tu", e:"you", engEquative: "are"}, {p:"تاسو", f:"taaso", e:"you (pl.)", engEquative: "are"},
    ],
    [
        {p:"هغه", f:"hagha", e:"he/she/it", engEquative: "has"}, {p:"هغوي", f:"haghwee", e:"they", engEquative: "are"},
    ],
]

export const allGenderedPronouns = [
    [
        {p:"زه", f:"zu", e:"I", gender: "m"}, {p:"مونږ", f:"moonG", e:"we", gender: "m"},
    ],
    [
        {p:"زه", f:"zu", e:"I(fem)", gender: "f"}, {p:"مونږ", f:"moonG", e:"we", gender: "f"},
    ],
    [
        {p:"ته", f:"tu", e:"you", gender: "m"}, {p:"تاسو", f:"taaso", e:"you(pl)", gender: "m"},
    ],
    [
        {p:"ته", f:"tu", e:"you(fem)", gender: "f"}, {p:"تاسو", f:"taaso", e:"you(fem pl)", gender: "f"},
    ],
    [
        {p:"هغه", f:"hagha", e:"he/it", gender: "m"}, {p:"هغوي", f:"haghwee", e:"they", gender: "m"},
    ],
    [
        {p:"هغه", f:"hagha", e:"she/it", gender: "f"}, {p:"هغوي", f:"haghwee", e:"they(fem)", gender: "f"},
    ],
]

export const sixPersonsEnglish = [
    ["I", "we"],
    ["I (fem).", "we (fem.)"],
    ["You", "You (pl.)"],
    ["You (fem.)", "You (fem. pl.)"],
    ["He", "They"],
    ["She", "they (fem.)"],
]

export const pronounsWithInflections = [
    {p:"زه", f:"zu", e:"I", inflection: {p:"ما", f:"maa"}}, 
    {p:"مونږ", f:"moonG", e:"we"},
    {p:"ته", f:"tu", e:"you", inflection: {p:"تا", f:"taa"}}, 
    {p:"تاسو", f:"taaso", e:"you (pl.)"},
    {p:"هغه", f:"hagha", e:"she/it", inflection: {p:"هغې", f:"haghe"}},
    {p:"دا", f:"daa", e:"she/it", inflection: {p:"دې", f:"de"}},
    {p:"هغه", f:"hagha", e:"he/it", inflection: {p:"هغه", f:"haghu"}},
    {p:"دی", f:"dey", e:"he/it", inflection: {p:"ده", f:"du"}},
    {p:"هغوي", f:"haghwee", e:"they"},
]

export default pronouns;