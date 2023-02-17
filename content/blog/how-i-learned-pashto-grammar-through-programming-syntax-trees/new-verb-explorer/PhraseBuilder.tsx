import { useStickyState } from "@lingdocs/ps-react";
import {
    Types as T,
    defaultTextOptions as opts,
    EntrySelect,
    VPExplorer,
} from "@lingdocs/ps-react";
import entryFeeder from "./entry-feeder";

function PhraseBuilder() {
    const [entry, setEntry] = useStickyState<T.VerbEntry | undefined>(
        undefined,
        "vEntrySelect",
    );
    return <div className="ps-react" style={{ maxWidth: "1250px", margin: "0 auto 200px auto" }}>
        <div>
            <h3 className="mb-4">Phrase Building Playground</h3>
            <div style={{ maxWidth: "300px" }}>
                <div className="h5">Verb:</div>
                <EntrySelect
                    value={entry}
                    onChange={setEntry}
                    entryFeeder={entryFeeder.verbs}
                    opts={opts}
                    isVerbSelect
                    name="Verb"
                />
            </div>
            <div style={{ margin: "0 auto" }}>
                {entry
                    ? <VPExplorer
                        verb={entry}
                        opts={opts}
                        entryFeeder={entryFeeder}
                        handleLinkClick="none"
                        onlyPhrases
                    />
                    : <div className="lead">
                        Choose a verb to start building
                    </div>}
            </div>
        </div>
    </div>
}

export default PhraseBuilder;