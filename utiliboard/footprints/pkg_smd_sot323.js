module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT-323_SC-70"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SOT-323, SC-70")`);
fp.push(`(tags "SOT-323 SC-70")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 1 : -1)} -0.65 ${flip ? (p.r - 270) % 360 : (p.r + 270) % 360}) (size 0.45 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 1 : -1)} 0.65 ${flip ? (p.r - 270) % 360 : (p.r + 270) % 360}) (size 0.45 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? -1 : 1)} 0 ${flip ? (p.r - 270) % 360 : (p.r + 270) % 360}) (size 0.45 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P3})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 1.7 : -1.7)} -1.3) (end ${(flip ? -1.7 : 1.7)} -1.3) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.7 : -1.7)} 1.3) (end ${(flip ? 1.7 : -1.7)} -1.3) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.7 : 1.7)} -1.3) (end ${(flip ? -1.7 : 1.7)} 1.3) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.7 : 1.7)} 1.3) (end ${(flip ? 1.7 : -1.7)} 1.3) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 0.68 : -0.68)} -0.6) (end ${(flip ? 0.68 : -0.68)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? 0.18 : -0.18)} -1.1) (end ${(flip ? 0.68 : -0.68)} -0.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.67 : 0.67)} -1.1) (end ${(flip ? 0.18 : -0.18)} -1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.67 : 0.67)} -1.1) (end ${(flip ? -0.67 : 0.67)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.67 : 0.67)} 1.1) (end ${(flip ? 0.68 : -0.68)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 0 ${flip ? (p.r - 90) % 360 : (p.r + 90) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.5 0.5) (thickness 0.075)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 0.68 : -0.68)} -1.16) (end ${(flip ? -0.73 : 0.73)} -1.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 0.68 : -0.68)} 1.16) (end ${(flip ? -0.73 : 0.73)} 1.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.73 : 0.73)} -1.16) (end ${(flip ? -0.73 : 0.73)} -0.5) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.73 : 0.73)} 0.5) (end ${(flip ? -0.73 : 0.73)} 1.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_poly (pts (xy ${(flip ? 1.05 : -1.05)} -1.14) (xy ${(flip ? 1.29 : -1.29)} -1.47) (xy ${(flip ? 0.81 : -0.81)} -1.47) (xy ${(flip ? 1.05 : -1.05)} -1.14)) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-323_SC-70.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at ${(flip ? 0.05 : -0.05)} -2.25 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SOT-323_SC-70" (at ${(flip ? 0.05 : -0.05)} 2.05 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

