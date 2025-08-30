import {
  Types as T,
  NPPicker,
  NPDisplay,
  ButtonSelect,
} from "@lingdocs/pashto-inflector";
import { useState } from "react";
import entryFeeder from "./entry-feeder";
import BasicSelect from "./BasicSelect";
import { exampleNPs } from "./example-phrases";
import { generateRandomNP } from "./random-phrase-generation";

const npOpts = exampleNPs.map(np => ({
  label: `"${np.e}"`,
  value: np.np,
}));

function NPBuilder({ opts }: { opts: T.TextOptions }) {
  const [np, setNp] = useState<T.NPSelection | undefined>(undefined);
  const [inflected, setInflected] = useState<boolean>(false);
  function handleRandom() {
    setNp(generateRandomNP());
  }
  return <div className="ps-react" style={{ marginBottom: "4rem" }}>
    <div className="d-flex flex-row justify-content-around flex-wrap">
      <div className="mb-3">
        <div style={{ maxWidth: "300px" }}>
          <div className="h5">Example NPs:</div>
          <BasicSelect
            style={{ minWidth: "200px" }}
            value={np}
            options={npOpts}
            onChange={o => setNp(o ? o.value : undefined)}
            placeholder="Select example NP..."
            name="NP example selection"
          />
        </div>
        <button className="btn btn-light mt-3" onClick={handleRandom}>
          <i className="fas fa-vial" /> Generate Random NP
        </button>
      </div>
      <div className="ps-react d-flex flex-column align-items-center">
        <div style={{ maxWidth: "300px", marginTop: "0.5rem" }}>
          <ButtonSelect
            options={[
              { label: "plain", value: "false" },
              { label: "inflected", value: "true" },
            ]}
            handleChange={o => setInflected(o === "true")}
            value={inflected.toString()}
            small
          />
        </div>
        <div style={{ maxWidth: "225px", marginBottom: "2rem", marginTop: "1rem" }}>
          <NPPicker
            opts={opts}
            np={np}
            onChange={e => setNp(e)}
            entryFeeder={entryFeeder}
            role="subject"
            counterPart={undefined}
            phraseIsComplete={false}
            negative={false}
          />
        </div>
      </div>
    </div>
    {np && <NPDisplay NP={np} opts={opts} inflected={inflected} />}
  </div>;
}

export default NPBuilder;


