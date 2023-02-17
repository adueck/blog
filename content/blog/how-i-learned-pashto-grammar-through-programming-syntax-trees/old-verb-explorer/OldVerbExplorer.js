import regularTransitiveVerbs from "./data/verbs/regular-transitive-verbs.js";
import semiRegularTransitiveVerbs from "./data/verbs/semi-regular-transitive-verbs.js";
import verbEndings from "./data/verbs/verb-endings.js";
import pronouns from "./data/pronouns/pronouns.js";
import capitalize from "./lib/capitalize.js";
// import shuffleArray from "./lib/shuffle-array.js";
import { engPresentEquative } from "./data/equatives/present-equative.js";
import Table from "./table";
import React from "react";

function OldVerbExplorer() {
    return <Table 
        size="medium"
        rows={pronouns.map((row, i) => (
            row.map((p, j) => (
                {
                    p: `${p.p} $OBJ $POSNEG $VERB${verbEndings[i][j].p}`,
                    f: `${p.f} $OBJ $POSNEG $VERB${verbEndings[i][j].f}`,
                    e: `${capitalize(p.e)} $EQ $POSNEG $VERB $OBJ`,
                }
            ))
        ))}
        subs={[
            {
                name: "VERB",
                label: "Verb",
                giveRandom: true,
                labelled: true,
                content: [...semiRegularTransitiveVerbs, ...regularTransitiveVerbs].map(v => {
                    const inf = {
                        p: `${v.stem.p}ل`,
                        f: `${v.stem.f}ul`,
                        e: `to ${v.eng.pres[0]}`,
                    };
                    const obj = v.os[Math.floor(Math.random()*v.os.length)];
                    return (
                        {
                            option: `${v.eng.pres[0]} - ${v.stem.p}ل`,
                            otherChanges: [{ name: "OBJ", content: obj }],
                            p: v.stem.p,
                            f: v.stem.f,
                            e: v.eng.part,
                            label: `${inf.p} - ${inf.f} (${inf.e})`,
                        }
                    );
                })
            },
            {
                name: "POSNEG",
                label: "Pos/Neg",
                content: [
                    {
                        option: "Pos.",
                        p: "",
                        f: "",
                        e: "",
                        otherChanges: [{ name:"EQ", content: {e: engPresentEquative}}],
                    },
                    {
                        option: "Neg.",
                        p: "نه",
                        f: "nu",
                        e: "not",
                        otherChanges: [{ name:"EQ", content: {e: engPresentEquative}}],
                    }
                ]
            }
        ]}
    /> 
}

export default OldVerbExplorer;