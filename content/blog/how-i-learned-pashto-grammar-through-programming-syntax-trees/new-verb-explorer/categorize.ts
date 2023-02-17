import {
  typePredicates,
  // super weird, need to es-lint disable this this
  // eslint-disable-next-line
  Types as T,
} from "@lingdocs/ps-react";
const {
  isPattern1Entry,
  isPattern2Entry,
  isPattern3Entry,
  isPattern4Entry,
  isPattern5Entry,
} = typePredicates;

/**
 * sorts a given array of on type into a typed object of arrays of subtypes, based on predicates
 * each item will only fall into one category (the first predicate it matches).
 * 
 * Items that don't match any predicate are discarded
 * 
 * types inforced, but it is UP TO THE USER to inforce that the type predicates do indeed determine
 * that a given item belongs in the typed arrays in X
 * 
 * for example:
 * 
 * ```ts
 * categorize<number, {
 *   small: number[], // these could also be subtypes of number
 *   big: number[],
 * }>(
 *   [2,3,11],
 *   {
 *     small: (x: number) => x < 10,
 *     big: (x: nuber) => x >= 10,
 *   },
 * );
 * ```
 * 
 * yields
 * 
 * ```ts
 * { small: [2, 3], big: [11] }
 * ```
 * 
 * @param arr 
 * @param preds 
 * @returns 
 */
export function categorize<I, X extends Record<string, I[]>>(
  arr: I[],
  preds: Record<keyof X, ((item: I) => boolean) | "leftovers">
): X {
  // 1. make the object to be returned;
  const o: X = Object.keys(preds).reduce((all, curr) => ({
    ...all,
    [curr]: [],
  }), {}) as X;

  const lk = Object.entries(preds).find(([key, entry]) => entry === "leftovers");
  const leftoverKey = lk && lk[0];
  // 2. Fill the object with the items that fit
  // go through each item in the array and add it to the category based on
  // the first predicate it matches
  arr.forEach((item) => {
    let placed: boolean = false;
    for (const p of Object.keys(preds)) {
      // @ts-ignore
      if ((preds[p] !== "leftovers") && preds[p](item)) {
        o[p].push(item);
        placed = true;
      }
    }
    // doesn't fit a predicate, add it to the leftovers
    if (!placed && leftoverKey) {
      o[leftoverKey].push(item);
    }
  });

  // 3. return the object of categorized items
  return o;
}

// TODO: uncategorizable words like ایرې - n. f. pl. -- could be pattern 1 or 2 🤷‍♂️

export function intoPatterns<T extends (T.NounEntry | T.AdjectiveEntry)>(words: T[]): {
  "pattern1": T.Pattern1Entry<T>[],
  "pattern2": T.Pattern2Entry<T>[],
  "pattern3": T.Pattern3Entry<T>[],
  "pattern4": T.Pattern4Entry<T>[],
  "pattern5": T.Pattern5Entry<T>[],
  "other": T.NonInflecting<T>[],
//   "pattern6fem": Pattern6FemNoun<T>[],
} {
  return categorize<(T.NounEntry | T.AdjectiveEntry), {
    "pattern1": T.Pattern1Entry<T>[],
    "pattern2": T.Pattern2Entry<T>[],
    "pattern3": T.Pattern3Entry<T>[],
    "pattern4": T.Pattern4Entry<T>[],
    "pattern5": T.Pattern5Entry<T>[],
    "other": T.NonInflecting<T>[],
  //  "pattern6fem": Pattern6FemNoun<T>[],
  }>(
    words,
    {
      "pattern1": isPattern1Entry,
      "pattern2": isPattern2Entry,
      "pattern3": isPattern3Entry,
      "pattern4": isPattern4Entry,
      "pattern5": isPattern5Entry,
    //  "pattern6fem": (n) => (isNoun(n) && isPattern6FemNoun(n)),
      "other": "leftovers",
    },
  );
}