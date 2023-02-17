import React from "react";
import PropTypes from 'prop-types';

class Table extends React.Component {
    constructor(props) {
        super(props);
        // set up state info
        const state = { scrolled: false }
        if (this.props.subs) {
            this.props.subs.forEach(el => {
                state[el.name] = 0;
            });
        }
        this.state = state;
        this.handleChange = this.handleChange.bind(this);
        this.handleRandomSelect = this.handleRandomSelect.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    scrollAmount = 0;

    handleScroll() {
        this.scrollAmount++
        if (!this.state.scrolled && (this.scrollAmount > 5)) {
            this.setState({ scrolled: true });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    replace(content, field, col, row) {
        let workingText = content;
        // Replace each the the $LABELS in the subs
        this.props.subs.forEach(el => {
            const sub = el.content[this.state[el.name]]
            // Check if replacement is legal 
            // If not return a blank value so it doesn't show up on the table
            if (sub.illeagal) {
                const { illeagal } = sub;
                for (let i = 0; i < illeagal.length; i++) {
                    if (illeagal[i].col === col && illeagal[i].row === row) {
                        workingText = "";
                        break;
                    }
                }
            } 
            const re = new RegExp("\\$" + el.name, "g");
            let replacement = sub[field] || "";
            // If the substitution depends on another option
            // Get that option from state and take the right substitutio
            if (replacement.basedOn) {
                const otherName = replacement.basedOn;
                replacement = replacement.options[this.state[otherName]];
            }
            if (typeof replacement === "object") {
                replacement = replacement[row][col] || "";
            }
            if (workingText) {
                workingText = workingText.replace(re, replacement);
            }
            // See if there are extra things that need to be replaced dependant on the replacement
            if (sub.otherChanges) {
                sub.otherChanges.forEach(otherChange => {
                    const re = new RegExp("\\$" + otherChange.name, "g");
                    let replacement = otherChange.content[field] || "";
                    if (typeof replacement === "object") {
                        replacement = replacement[row][col] || "";
                    }
                    if (workingText) {
                        workingText = workingText.replace(re, replacement);
                    }
                });    
            }
        });
        return workingText;
    }

    minTableWidth = this.props.size === "wide" ? "600px" : this.props.size === "medium" ? "400px" : this.props.size === "skinny" ? "300px" : undefined;

    handleRandomSelect(name) {
        const subsGroup = this.props.subs.find(subsGroup => subsGroup.name === name);
        const optionsLength = subsGroup.content.length;

        // If it's only 2 options, just select the other one
        if (optionsLength === 2) {
            this.setState(prevState => ({ [name]: prevState[name] === 0 ? 1 : 0 }));
            return;
        }

        // Otherwise, give the user a random item from the subs options select
        let randomIndex = null;
        const currentIndex = this.state[name];
        // Make sure it picks something other than the current selection
        while (randomIndex === null || randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * Math.floor(optionsLength));
        }
        this.setState({ [name]: randomIndex });
    }

    render() {
        return (
            <div style={{marginTop: "1em", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" }}>
                {this.props.subs && 
                    <>
                        {/* Selectors for substitutions at top op chart */}
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", paddingTop: "0.5rem", background: "white" }}>
                            {this.props.subs.map((subsGroup, index) => {
                                let showing = true;
                                if (subsGroup.conditionalShowing) {
                                    const opts = subsGroup.conditionalShowing.options;
                                    const basedOnState = this.state[subsGroup.conditionalShowing.basedOn];
                                    showing = opts[basedOnState];
                                }
                                return (
                                    <label style={{ display: showing ? "block" : "none", marginRight: "1rem", marginBottom: "0.2rem" }} key={index}>
                                        <div style={{fontWeight: subsGroup.bold ? "bold" : "regular"}}>{subsGroup.label}</div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <select name={subsGroup.name} value={this.state[subsGroup.name]} onChange={this.handleChange}>
                                                {subsGroup.content.map((sub, i) => (
                                                    <option key={i} value={i}>{sub.option}</option>
                                                ))}
                                            </select>
                                            {/* {subsGroup.giveRandom && (
                                                <div className="clickable" onClick={() => this.handleRandomSelect(subsGroup.name)} style={{ marginLeft: "0.25rem", display: "flex", alignItems: "center" }}>
                                                    <i className="fas fas-shuffle" />
                                                </div>
                                            )} */}
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                        {/* Labels for more details from selectors */}
                        {this.props.subs.map((subsGroup, index) => (
                            <div key={index} style={{ textAlign: "center", marginTop: "1rem" }}>
                                {subsGroup.labelled && subsGroup.content[this.state[subsGroup.name]].label}
                            </div>
                        ))}
                    </>
                }
                {/* {(this.props.size === "wide" || this.props.size === "medium") && <div className="scroll-notification">{!this.state.scrolled ? "more →" : "" }&nbsp;</div>} */}
                <div style={{ overflowX: "auto", marginBottom: "1em" }} onScroll={this.handleScroll}>
                    <table style={{ minWidth: this.minTableWidth, width: "100%" }}>
                        <tbody>
                            {this.props.titleRow && (
                                <tr>
                                    {this.props.titleRow.map((col, i) => (
                                        <td key={i} col={col.colSpan ? col.colSpan : 1}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                                <div style={{ display: "flex" }}>
                                                    {col.sideImg && <img style={{ maxHeight: "2rem", margin: "0 0" }} src={col.sideImg.src} alt={col.sideImg.alt || ""} />}
                                                    <div style={{ fontWeight: "bolder" }}>{col.e}</div>
                                                </div>
                                                {col.img && <div>
                                                    {col.img && <img style={{ maxWidth: "80px", margin: "0 0" }} src={col.img.src} alt={col.img.alt || ""} />}
                                                </div>}
                                                {col.sub && (
                                                    <div style={{ color: "gray", fontSize: "smaller"}}>
                                                        <em>{col.sub}</em>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            )}
                            {this.props.rows.map((row, i) => (
                                <tr key={i} style={{ borderBottom: "1px grey solid" }}>
                                    {row.map((col, j) => {
                                        let backgroundColor = '';
                                        if (col.gender === "m") backgroundColor = "rgba(50, 115, 220, 0.3)";
                                        else if (col.gender === "f") backgroundColor = "rgba(255, 192, 203, 0.3)";
                                        else backgroundColor = col.backgroundColor;
                                        return (
                                            <td key={j} style={{backgroundColor}} colSpan={col.colSpan ? col.colSpan : 1}>
                                                {col.sideImg && <div>
                                                    <img style={{ maxHeight: "2rem", margin: "0 0", float: "right" }} src={col.sideImg.src} alt={col.sideImg.alt || ""} />
                                                </div>}
                                                {col.a ? 
                                                    <div>
                                                        <div>{col.a}</div>
                                                        {col.example && <div><span style={{ color: "grey", fontSize: "smaller", marginLeft: "0.5rem" }}>e.g.</span> {col.example}</div>}
                                                    </div>
                                                :
                                                    <>
                                                        <div dir="rtl" style={{ textAlign: "left", marginTop: "0.25rem" }}>
                                                            {!this.props.subs ?
                                                                col.p
                                                            :
                                                                this.replace(col.p, "p",j,i)
                                                            }
                                                        </div>
                                                        <div>
                                                            {!this.props.subs ?
                                                                col.f
                                                            :
                                                                this.replace(col.f, "f",j,i)
                                                            }
                                                        </div>
                                                        <div style={{ color: "grey", marginBottom: "0.25rem" }}>
                                                            {!this.props.subs ?
                                                                col.e
                                                            :
                                                                this.replace(col.e, "e",j,i)
                                                            }
                                                        </div>
                                                    {col.sub && <div style={{ color: "gray", fontSize: "smaller"}}><em>{col.sub}</em></div>}
                                                    </>
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Table.propTypes = {
    subs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            labelled: PropTypes.bool,
            content: PropTypes.array.isRequired,
        }),
    ),
}

export default Table;
