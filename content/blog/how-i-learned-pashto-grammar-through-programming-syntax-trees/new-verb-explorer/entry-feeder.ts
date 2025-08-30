import { Types as T } from "@lingdocs/pashto-inflector";
import { nouns, verbs, adjectives, locativeAdverbs, adverbs } from "./words";

const entryFeeder: T.EntryFeeder = {
  nouns,
  verbs,
  adjectives,
  locativeAdverbs,
  adverbs,
};

export default entryFeeder;

