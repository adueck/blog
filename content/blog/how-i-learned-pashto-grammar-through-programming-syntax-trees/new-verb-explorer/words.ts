import rawWords from "./raw-words";
import { typePredicates as tp, Types as T } from "@lingdocs/pashto-inflector";
import { categorize } from "./categorize";

// TODO: BIG ISSUE WITH THE LOC ADVERBS BEING LUMPED INTO THE ADVERBS!
const words = categorize<
  T.Entry,
  {
    nouns: T.NounEntry[];
    adjectives: T.AdjectiveEntry[];
    verbs: T.VerbEntry[];
    adverbs: T.AdverbEntry[];
    locativeAdverbs: T.LocativeAdverbEntry[];
  }
>(rawWords, {
  nouns: tp.isNounEntry,
  adjectives: tp.isAdjectiveEntry,
  verbs: tp.isVerbEntry,
  adverbs: tp.isAdverbEntry,
  locativeAdverbs: tp.isLocativeAdverbEntry,
});

export default words;

export const { nouns, adjectives, verbs, adverbs, locativeAdverbs } = words;

