import {
    Types as T,
} from "@lingdocs/ps-react";

export const examplesVPs: {
    e: string,
    vp: T.VPSelectionState,
}[] = [
    {
        e: "The old woman saw me",
        vp: {"blocks":[{"key":0.6268927060029541,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"noun","entry":{"ts":1527812797,"i":8883,"p":"ښځه","f":"xúdza","g":"xudza","e":"woman, wife","r":4,"c":"n. f.","ec":"woman","ep":"women"},"gender":"fem","genderCanChange":false,"number":"singular","numberCanChange":true,"adjectives":[]}}}},{"key":0.37194612848188546,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":0,"distance":"far"}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527812275,"i":11967,"p":"لیدل","f":"leedul","g":"leedul","e":"to see","r":4,"c":"v. trans./gramm. trans.","psp":"وین","psf":"ween","tppp":"لید","tppf":"leed","ec":"see,sees,seeing,saw,seen"}},"verbTense":"perfectivePast","perfectTense":"wouldHaveBeenPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"basic","transitivity":"transitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":true,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
    {
        e: "You see me",
        vp: {"blocks":[{"key":0.6268927060029541,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":2,"distance":"far"}}}},{"key":0.37194612848188546,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":0,"distance":"far"}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527812275,"i":11967,"p":"لیدل","f":"leedul","g":"leedul","e":"to see","r":4,"c":"v. trans./gramm. trans.","psp":"وین","psf":"ween","tppp":"لید","tppf":"leed","ec":"see,sees,seeing,saw,seen"}},"verbTense":"presentVerb","perfectTense":"wouldHaveBeenPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"basic","transitivity":"transitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":true,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
    {
        e: "The (female) child was hitting me",
        vp: {"blocks":[{"key":0.2081321811256851,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"noun","entry":{"ts":1527812881,"i":12071,"p":"ماشوم","f":"maashoom","g":"maashoom","e":"child, kid","r":4,"c":"n. m. anim. unisex","ec":"child","ep":"children"},"gender":"fem","genderCanChange":true,"number":"singular","numberCanChange":true,"adjectives":[]}}}},{"key":0.7664662671253917,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":0,"distance":"far"}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527815399,"i":14943,"p":"وهل","f":"wahul","g":"wahul","e":"to hit","r":4,"c":"v. trans.","tppp":"واهه","tppf":"waahu","ec":"hit,hits,hitting,hit,hit"}},"verbTense":"imperfectivePast","perfectTense":"wouldHaveBeenPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"basic","transitivity":"transitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":false,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
    {
        e: "I have eaten potatoes",
        vp: {"blocks":[{"key":0.14308049731439665,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":1,"distance":"far"}}}},{"key":0.14094061502332544,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"noun","entry":{"ts":1527820648,"i":807,"p":"الو","f":"aloo","g":"aloo","e":"potato","r":4,"c":"n. m.","ppp":"الوګان","ppf":"aloogáan"},"gender":"masc","genderCanChange":false,"number":"plural","numberCanChange":true,"adjectives":[]}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527812790,"i":5960,"p":"خوړل","f":"khoRul","g":"khoRul","e":"to eat, to bite","r":4,"c":"v. trans.","psp":"خور","psf":"khor","tppp":"خوړ","tppf":"khoR","ec":"eat,eats,eating,ate,eaten"}},"verbTense":"imperfectivePast","perfectTense":"presentPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"perfect","transitivity":"transitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":false,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
    {
        e: "He had seen you",
        vp: {"blocks":[{"key":0.11976135392699705,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":4,"distance":"far"}}}},{"key":0.391909682531026,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":2,"distance":"far"}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527812275,"i":11967,"p":"لیدل","f":"leedul","g":"leedul","e":"to see","r":4,"c":"v. trans./gramm. trans.","psp":"وین","psf":"ween","tppp":"لید","tppf":"leed","ec":"see,sees,seeing,saw,seen"}},"verbTense":"imperfectivePast","perfectTense":"pastPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"perfect","transitivity":"transitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":true,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
    {
        e: "I went to her house",
        vp: {"blocks":[{"key":0.0653474074121907,"block":{"type":"AP","selection":{"type":"sandwich","after":{"p":"ته","f":"ta"},"e":"to","inside":{"type":"NP","selection":{"type":"noun","entry":{"ts":1527812828,"i":10868,"p":"کور","f":"kor","g":"kor","e":"house, home","r":4,"c":"n. m."},"gender":"masc","genderCanChange":false,"number":"singular","numberCanChange":true,"adjectives":[],"possesor":{"np":{"type":"NP","selection":{"type":"pronoun","person":5,"distance":"far"}},"shrunken":false}}}}}},{"key":0.24056375014635223,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":1,"distance":"far"}}}},{"key":0.019589500810104132,"block":{"type":"objectSelection","selection":"none"}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527815348,"i":3768,"p":"تلل","f":"tlul","g":"tlul","e":"to go","r":4,"c":"v. intrans.","psp":"ځ","psf":"dz","ssp":"لاړ ش","ssf":"láaR sh","prp":"لاړ","prf":"láaR","ec":"go,goes,going,went,gone"}},"verbTense":"perfectivePast","perfectTense":"pastPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"basic","transitivity":"intransitive","isCompound":false,"voice":"active","negative":false,"canChangeTransitivity":false,"canChangeVoice":false,"canChangeStatDyn":false},"form":{"removeKing":true,"shrinkServant":false}},
    },
    {
        e: "I'm learning Pashto",
        vp: {"blocks":[{"key":0.9346471543028234,"block":{"type":"subjectSelection","selection":{"type":"NP","selection":{"type":"pronoun","person":0,"distance":"far"}}}},{"key":0.9845575699028086,"block":{"type":"objectSelection","selection":{"type":"NP","selection":{"type":"noun","entry":{"ts":1527816016,"i":2582,"p":"پښتو","f":"puxto","g":"puxto","e":"Pashto, Pashtunwali","r":4,"c":"n. f.","ec":"Pashto"},"gender":"fem","genderCanChange":false,"number":"singular","numberCanChange":true,"adjectives":[]}}}}],"verb":{"type":"verb","verb":{"entry":{"ts":1527815444,"i":7289,"p":"زده کول","f":"zda kawul","g":"zdakawul","e":"to learn, to teach","r":4,"c":"v. stat. comp. trans.","l":1527818939,"ec":"learn"},"complement":{"ts":1527818939,"i":7285,"p":"زده","f":"zda","g":"zda","e":"learned, mastered, grasped, learned by heart","r":4,"c":"adj."}},"verbTense":"presentVerb","perfectTense":"pastPerfect","imperativeTense":"perfectiveImperative","tenseCategory":"basic","transitivity":"transitive","isCompound":"stative","voice":"active","negative":false,"canChangeTransitivity":false,"canChangeVoice":true,"canChangeStatDyn":false},"form":{"removeKing":false,"shrinkServant":false}},
    },
];

export const exampleNPs: {
    e: string,
    np: T.NPSelection,
}[] = [
    {
        e: "old book",
        np: {
            type: "NP",
            selection: {
                type: "noun",
                entry: {"ts":1527812817,"i":9999,"p":"کتاب","f":"kitáab","g":"kitaab","e":"book","c":"n. m."} as T.NounEntry,
                gender: "masc",
                genderCanChange: false,
                number: "singular",
                numberCanChange: true,
                adjectives: [{
                    type: "adjective",
                    entry: {"ts":1527815451,"i":7245,"p":"زوړ","f":"zoR","g":"zoR","e":"old","c":"adj. irreg.","infap":"زاړه","infaf":"zaaRu","infbp":"زړ","infbf":"zaR"} as T.AdjectiveEntry,
                    sandwich: undefined,
                }],
                possesor: undefined,
                demonstrative: undefined,
            }
        },
    },
    {
        e: "Your friend's father",
        np: {
            "type": "NP",
            "selection": {
                "type": "noun",
                "entry": {
                    "ts": 1527815177,
                    "i": 2612,
                    "p": "پلار",
                    "f": "plaar",
                    "g": "plaar",
                    "e": "father",
                    "r": 4,
                    "c": "n. m. anim.",
                    "ppp": "پلرونه",
                    "ppf": "plaróona"
                },
                "gender": "masc",
                "genderCanChange": false,
                "number": "singular",
                "numberCanChange": true,
                "adjectives": [],
                "possesor": {
                    "np": {
                        "type": "NP",
                        "selection": {
                            "type": "noun",
                            "entry": {
                                "ts": 1527814159,
                                "i": 13131,
                                "p": "ملګری",
                                "f": "malgúrey",
                                "g": "malgurey",
                                "e": "friend, companion",
                                "r": 4,
                                "c": "n. m. anim. unisex"
                            },
                            "gender": "masc",
                            "genderCanChange": true,
                            "number": "singular",
                            "numberCanChange": true,
                            "adjectives": [],
                            "possesor": {
                                "np": {
                                    "type": "NP",
                                    "selection": {
                                        "type": "pronoun",
                                        "person": 2,
                                        "distance": "far"
                                    }
                                },
                                "shrunken": false
                            }
                        }
                    },
                    "shrunken": false
                }
            },
        },
    },
    {
        e: "the sweet children (f.)",
        np: {
            "type": "NP",
            "selection": {
                "type": "noun",
                "entry": {
                    "ts": 1527812881,
                    "i": 12071,
                    "p": "ماشوم",
                    "f": "maashoom",
                    "g": "maashoom",
                    "e": "child, kid",
                    "r": 4,
                    "c": "n. m. anim. unisex",
                    "ec": "child",
                    "ep": "children"
                },
                "gender": "fem",
                "genderCanChange": true,
                "number": "plural",
                "numberCanChange": true,
                "adjectives": [
                    {
                        "type": "adjective",
                        "entry": {
                            "ts": 1574865652928,
                            "i": 5967,
                            "p": "خوږ",
                            "f": "khoG",
                            "g": "khog",
                            "e": "sweet, nice",
                            "r": 4,
                            "c": "adj.",
                            "infap": "خواږه",
                            "infaf": "khwaaGu",
                            "infbp": "خوږ",
                            "infbf": "khwaG"
                        }
                    }
                ]
            }
        },
    },
    {
        e: "the sweet children (m.)",
        np: {
            "type": "NP",
            "selection": {
                "type": "noun",
                "entry": {
                    "ts": 1527812881,
                    "i": 12071,
                    "p": "ماشوم",
                    "f": "maashoom",
                    "g": "maashoom",
                    "e": "child, kid",
                    "r": 4,
                    "c": "n. m. anim. unisex",
                    "ec": "child",
                    "ep": "children"
                },
                "gender": "masc",
                "genderCanChange": true,
                "number": "plural",
                "numberCanChange": true,
                "adjectives": [
                    {
                        "type": "adjective",
                        "entry": {
                            "ts": 1574865652928,
                            "i": 5967,
                            "p": "خوږ",
                            "f": "khoG",
                            "g": "khog",
                            "e": "sweet, nice",
                            "r": 4,
                            "c": "adj.",
                            "infap": "خواږه",
                            "infaf": "khwaaGu",
                            "infbp": "خوږ",
                            "infbf": "khwaG"
                        }
                    }
                ]
            }
        },
    },
    {
        e: "the tired man's guests",
        np: {
            "type": "NP",
            "selection": {
                "type": "noun",
                "entry": {
                    "ts": 1527812908,
                    "i": 13527,
                    "p": "مېلمه",
                    "f": "melma",
                    "g": "melma",
                    "e": "guest",
                    "r": 4,
                    "c": "n. m.  unisex",
                    "infap": "مېلمانه",
                    "infaf": "melmaanu",
                    "infbp": "مېلمن",
                    "infbf": "melman"
                },
                "gender": "masc",
                "genderCanChange": true,
                "number": "plural",
                "numberCanChange": true,
                "adjectives": [],
                "possesor": {
                    "np": {
                        "type": "NP",
                        "selection": {
                            "type": "noun",
                            "entry": {
                                "ts": 1527815251,
                                "i": 8039,
                                "p": "سړی",
                                "f": "saRéy",
                                "g": "saRey",
                                "e": "man",
                                "r": 4,
                                "c": "n. m.",
                                "ec": "man",
                                "ep": "men"
                            },
                            "gender": "masc",
                            "genderCanChange": false,
                            "number": "singular",
                            "numberCanChange": true,
                            "adjectives": [
                                {
                                    "type": "adjective",
                                    "entry": {
                                        "ts": 1527815306,
                                        "i": 7815,
                                        "p": "ستړی",
                                        "f": "stúRey",
                                        "g": "stuRey",
                                        "e": "tired",
                                        "r": 4,
                                        "c": "adj. / adv."
                                    }
                                }
                            ]
                        }
                    },
                    "shrunken": false
                }
            }
        },
    }
];
