
// SOT-363 / SC-70-6 SMD Ergogen Footprint
//
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/pkg_smd_sot363.js
//
// created with kicad2ergogen: https://kicad2ergogen.genteure.com/
//
// Kicad footprint included with KiCad9 in: ${KICAD9_FOOTPRINT_DIR}/Package_TO_SOT_SMD.pretty/SOT-363_SC70-6.kicad.mod
//
//
// Nets/Parameters
//
// side: F (default) for Front, B for Back
//
// P1-P6: Pads. Nets undefined by default.

module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: undefined },
    P6: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT-363_SC-70-6"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SOT-363, SC-70-6, SC-88")`);
fp.push(`(tags "SOT-363 SC-70-6 SC-88")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 0.95 : -0.95)} -0.65 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 0.95 : -0.95)} 0 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 0.95 : -0.95)} 0.65 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? -0.95 : 0.95)} 0.65 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? -0.95 : 0.95)} 0 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? -0.95 : 0.95)} -0.65 ${p.r}) (size 0.65 0.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.P6})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 1.6 : -1.6)} -1.4) (end ${(flip ? 1.6 : -1.6)} 1.4) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.6 : -1.6)} -1.4) (end ${(flip ? -1.6 : 1.6)} -1.4) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.6 : -1.6)} 1.4) (end ${(flip ? -1.6 : 1.6)} 1.4) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.6 : 1.6)} 1.4) (end ${(flip ? -1.6 : 1.6)} -1.4) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 0.675 : -0.675)} -0.6) (end ${(flip ? 0.675 : -0.675)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? 0.175 : -0.175)} -1.1) (end ${(flip ? 0.675 : -0.675)} -0.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.675 : 0.675)} -1.1) (end ${(flip ? 0.175 : -0.175)} -1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.675 : 0.675)} -1.1) (end ${(flip ? -0.675 : 0.675)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -0.675 : 0.675)} 1.1) (end ${(flip ? 0.675 : -0.675)} 1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 0 ${flip ? (p.r - 90) % 360 : (p.r + 90) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.5 0.5) (thickness 0.075)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 0.71 : -0.71)} -1.16) (end ${(flip ? -0.7 : 0.7)} -1.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 0.7 : -0.7)} 1.16) (end ${(flip ? -0.7 : 0.7)} 1.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_poly (pts (xy ${(flip ? 1.08 : -1.08)} -1.11) (xy ${(flip ? 1.32 : -1.32)} -1.44) (xy ${(flip ? 0.84 : -0.84)} -1.44) (xy ${(flip ? 1.08 : -1.08)} -1.11)) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-363_SC-70-6.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -2.25 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SOT-363_SC-70-6" (at 0 2 ${flip ? (p.r - 180) % 360 : (p.r + 180) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

