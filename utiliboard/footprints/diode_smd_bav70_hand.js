// BAV70 SOT-23 ergogen footprint
// author: @hand_le https://github.com/dohn-joh
//
// 
// based on nexperia datasheet: https://assets.nexperia.com/documents/data-sheet/BAV70.pdf
//
// Params/nets:
//
// A1: Anode, pad 1, default undefined.
// A2: Anode, pad 2, default undefined.
// C: Cathode, pad 3, default undefined.
//
// side: F (Default) for front, B for back.
// pad_width: X size of all pads; default is 0.7 as per datasheet
// pad_height: Y size of all pads; default is 0.6 as per datasheet 
//
//
//
module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    pad_width: 0.7,
    pad_height: 0.6,
    A1: { type: 'net', value: undefined },
    A2: { type: 'net', value: undefined },
    C: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT-23"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(tags "SOT TO_SOT_SMD")`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 0.95 : -0.95)} 1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? -0.95 : 0.95)} 1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.A2})`);
fp.push(`(pad "3" smd roundrect (at 0 -1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.C})`);

// F.SilkS
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} -0.65) (end ${(flip ? 0.36 : -0.36)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} 0.65) (end ${(flip ? 1.56 : -1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} 0.65) (end ${(flip ? 1.31 : -1.31)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -0.36 : 0.36)} -0.65) (end ${(flip ? -1.56 : 1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -0.59 : 0.59)} 0.65) (end ${(flip ? 0.59 : -0.59)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -1.56 : 1.56)} 0.65) (end ${(flip ? -1.31 : 1.31)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -1.56 : 1.56)} 0.65) (end ${(flip ? -1.56 : 1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);

// F.CrtYd
fp.push(`(fp_rect (start ${(flip ? 1.65 : -1.65)} -1.5) (end ${(flip ? -1.65 : 1.65)} 1.5) (stroke (width 0.1) (type solid)) (fill no) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-23.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 ${(flip ? 90 : -90)})))`);

fp.push(`)`);

    return fp.join('\n');
  }
}

