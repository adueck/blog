import {
    Types as T,
    randFromArray,
    randomPerson,
    makeNounSelection,
} from "@lingdocs/ps-react";
import entryFeeder from "./entry-feeder";

export function generateRandomNP(): T.NPSelection {
    if (!Array.isArray(entryFeeder.nouns)) {
        throw new Error("need to use array type entry feeder for random phrase generation");
    }
    const types: ("noun" | "participle" | "pronoun")[] = ["noun", "participle", "pronoun", "noun", "pronoun", "noun", "pronoun"]
    const type = randFromArray(types);
    return {
        type: "NP",
        selection: type === "noun"
            ? generateRandomNoun()
            : type === "pronoun"
            ? generateRandomPronoun()
            : generateRandomParticiple(),
    };
}

function generateRandomNoun(): T.NounSelection {
    if (!Array.isArray(entryFeeder.nouns)) {
        throw new Error("need to use array type entry feeder for random phrase generation");
    }
    const noun = randFromArray(entryFeeder.nouns);
    const np = makeNounSelection(noun, undefined);
    const doPossesor = randFromArray([true, false]);
    const adjectives = randFromArray([[], [], [], [1], [1], [], [], [], [1], [1], [1, 1]]);
    return {
        ...np,
        gender: np.genderCanChange
            ? randFromArray(["masc", "fem"])
            : np.gender,
        number: np.numberCanChange
            ? randFromArray(["singular", "plural"])
            : np.number,
        adjectives: adjectives.map(generateRandomAdj),
        possesor: doPossesor ? {
            shrunken: false,
            np: generateRandomNP(),
        } : undefined,
    };
}

function generateRandomAdj(): T.AdjectiveSelection {
    if (!Array.isArray(entryFeeder.adjectives)) {
        throw new Error("need to use array type entry feeder for random phrase generation");
    }
    return {
        type: "adjective",
        entry: randFromArray(entryFeeder.adjectives),
        sandwich: undefined,
    };
}

function generateRandomPronoun(): T.PronounSelection {
    return {
        type: "pronoun",
        person: randomPerson(),
        distance: randFromArray(["near", "far"]),
    };
}

function generateRandomParticiple(): T.ParticipleSelection {
    if (!Array.isArray(entryFeeder.verbs)) {
        throw new Error("need to use array type entry feeder for random phrase generation");
    }
    // const doPossesor = randFromArray([true, false]);
    return {
        type: "participle",
        verb: randFromArray(entryFeeder.verbs),
        possesor: undefined,
        // possesor: doPossesor ? {
        //     shrunken: false,
        //     np: generateRandomNP(),
        // } : undefined,
    }
}
 