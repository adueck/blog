import { CSSProperties } from "react";
import Select, { StylesConfig } from "react-select";
import {
  equals,
} from "rambda";
import {
  Types as T,
} from "@lingdocs/pashto-inflector";

export const customStyles: StylesConfig = {
  menuPortal: (base: any) => ({
    ...base,
    zIndex: 99999,
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 999999,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "10px 5px",
    color: "#121418",
  }),
  input: (base: any) => ({
    ...base,
    padding: 0,
  }),
}

function BasicSelect<E extends T.VPSelectionState | T.NPSelection>(props: {
  options: { label: string, value: E }[],
  value: E | undefined,
  onChange: (value: { label: string, value: E } | undefined) => void,
  name: string | undefined,
  style?: CSSProperties,
  placeholder?: string,
}) {
  const divStyle = props.style || { width: "13rem" };
  const placeholder = "placeholder" in props
    ? props.placeholder
    : "Select…";
  const value = props.value
    ? props.options.find(o => equals(o.value, props.value))
    : null;
  const options = props.options;
  const onChange = (v: { label: string, value: string } | null) => {
    if (!v) {
      props.onChange(undefined);
      return;
    }
    // @ts-ignore
    const s = options.find(o => equals(o.value, v.value));
    if (!s) return;
    props.onChange(s);
  }
  return <div style={divStyle}>
    <Select
      styles={customStyles}
      isSearchable={true}
      value={value || null}
      // @ts-ignore
      onChange={onChange}
      className="mb-2"
      options={options}
      placeholder={placeholder}
      isClearable
    />
  </div>
}

export default BasicSelect;
