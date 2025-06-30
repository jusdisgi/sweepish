// 1SS309 Multi-Diode Package: 4 Diodes, Common Cathode
// Package: SC-74A-5
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/diode_smd_1ss309.js
//
// created with kicad2ergogen: https://kicad2ergogen.genteure.com/
//
// Component datasheet: https://toshiba.semicon-storage.com/info/1SS309_datasheet_en_20210625.pdf?did=3305&prodName=1SS309
//
// Nets/Parameters
//
// side: F (default) for Front, B for Back
//
// A1: First anode, Pad 1
// A2: Second anode, Pad 3
// A3: Third anode, Pad 4
// A4: Fourth anode, Pad 5
// C: Cathode, Pad 2


module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    A1: { type: 'net', value: undefined },
    A2: { type: 'net', value: undefined },
    A3: { type: 'net', value: undefined },
    A4: { type: 'net', value: undefined },
    C: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SC-74A-5_1.55x2.9mm_P0.95mm"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SC-74A, 5 Pin (https://www.jeita.or.jp/japanese/standard/book/ED-7500B/#target/page_no=41), generated with kicad-footprint-generator ipc_gullwing_generator.py")`);
fp.push(`(tags "SC-74A TO_SOT_SMD")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 1.15 : -1.15)} -0.95 ${p.r}) (size 1.6 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 1.15 : -1.15)} 0 ${p.r}) (size 1.6 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.C})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 1.15 : -1.15)} 0.95 ${p.r}) (size 1.6 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A2})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? -1.15 : 1.15)} 0.95 ${p.r}) (size 1.6 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A3})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? -1.15 : 1.15)} -0.95 ${p.r}) (size 1.6 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A4})`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start ${(flip ? 2.2 : -2.2)} -1.7) (end ${(flip ? -2.2 : 2.2)} 1.7) (stroke (width 0.05) (type solid)) (fill no) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 0.775 : -0.775)} -1.0625) (end ${(flip ? 0.3875 : -0.3875)} -1.45) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 0.775 : -0.775)} 1.45) (end ${(flip ? 0.775 : -0.775)} -1.0625) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 0.3875 : -0.3875)} -1.45) (end ${(flip ? -0.775 : 0.775)} -1.45) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -0.775 : 0.775)} -1.45) (end ${(flip ? -0.775 : 0.775)} 1.45) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -0.775 : 0.775)} 1.45) (end ${(flip ? 0.775 : -0.775)} 1.45) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 0.39 0.39) (thickness 0.06)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? -0 : 0)} -1.56) (end ${(flip ? 0.775 : -0.775)} -1.56) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} -1.56) (end ${(flip ? -0.775 : 0.775)} -1.56) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} 1.56) (end ${(flip ? 0.775 : -0.775)} 1.56) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} 1.56) (end ${(flip ? -0.775 : 0.775)} 1.56) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_poly (pts (xy ${(flip ? 1.3625 : -1.3625)} -1.51) (xy ${(flip ? 1.6025 : -1.6025)} -1.84) (xy ${(flip ? 1.1225 : -1.1225)} -1.84)) (stroke (width 0.12) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SC-74A-5_1.55x2.9mm_P0.95mm.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -2.4 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SC-74A-5_1.55x2.9mm_P0.95mm" (at 0 2.4 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

