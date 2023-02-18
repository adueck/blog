import { useStickyState } from "@lingdocs/ps-react";
import {
    Types as T,
    defaultTextOptions as opts,
    EntrySelect,
    VPExplorer,
} from "@lingdocs/ps-react";
import { useState } from "react";
import BasicSelect from "./BasicSelect";
import entryFeeder from "./entry-feeder";
import { examplesVPs } from "./example-phrases";

const exampleOptions = examplesVPs.map((e) => ({
    label: e.e,
    value: e.vp,
}));

function PhraseBuilder() {
    const [entry, setEntry] = useStickyState<T.VerbEntry | undefined>(
        undefined,
        "vEntrySelect",
    );
    const [exampleVPSelected, setExampleVPSeleceted] = useState<{ label: string, value: T.VPSelectionState} | undefined>(undefined);
    function handleVPSExampleSet(e: { label: string, value: T.VPSelectionState } | undefined) {
        if (!e) {
            setExampleVPSeleceted(e);
            return;
        }
        const exampleVerb = e.value.verb.verb;
        setEntry(exampleVerb);
        setExampleVPSeleceted(e);
    }
    return <div className="ps-react" style={{ maxWidth: "1250px", margin: "0 auto 200px auto" }}>
        <div>
            <h3 className="mb-4">Phrase Building Playground</h3>
            <div className="d-flex flex-row justify-content-between flex-wrap">
                <div style={{ maxWidth: "300px" }}>
                    <div className="h5">Verb:</div>
                    <EntrySelect
                        value={entry}
                        onChange={(e) => setEntry(e)}
                        entryFeeder={entryFeeder.verbs}
                        opts={opts}
                        isVerbSelect
                        name="Verb"
                    />
                </div>
                <div style={{ maxWidth: "600px" }}>
                    <div className="h5">Example Phrases:</div>
                    <BasicSelect
                        style={{ minWidth: "300px" }}
                        value={exampleVPSelected?.value}
                        options={exampleOptions}
                        onChange={handleVPSExampleSet}
                        placeholder="Select example phrase..."
                        name="vps example selection"
                    />
                </div>
            </div>
            <div style={{ margin: "0 auto" }}>
                {entry
                    ? <VPExplorer
                        verb={entry}
                        opts={opts}
                        entryFeeder={entryFeeder}
                        handleLinkClick="none"
                        onlyPhrases
                        loaded={exampleVPSelected ? exampleVPSelected.value : undefined}
                    />
                    : <div className="lead">
                        Choose a verb to start building
                    </div>}
            </div>
        </div>
    </div>
}

export default PhraseBuilder;