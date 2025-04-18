module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    from1: { type: 'net', value: undefined },
    from2: { type: 'net', value: undefined },
    from3: { type: 'net', value: undefined },
    from4: { type: 'net', value: undefined },
    from5: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined }
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "D_MMBD4148PLM"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(descr "SMD Diode Array - 5 Diodes Common Cathode")`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 0.5 : -0.5)} -0.6875 ${p.r + 180}) (size 0.3 0.525) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from1})`);
fp.push(`(pad "2" smd roundrect (at 0 -0.6875 ${p.r + 180}) (size 0.3 0.525) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? -0.5 : 0.5)} -0.6875 ${p.r + 180}) (size 0.3 0.525) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from3})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? 0.5 : -0.5)} 0.6875 ${p.r + 180}) (size 0.3 0.525) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? -0.5 : 0.5)} 0.6875 ${p.r + 180}) (size 0.3 0.525) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.from5})`);
fp.push(`(pad "6" smd roundrect (at 0 0 ${p.r + 180}) (size 1.3 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45) ${p.to})`);

// F.SilkS
fp.push(`(fp_rect (start ${(flip ? 0.85 : -0.85)} -0.85) (end ${(flip ? -0.85 : 0.85)} 0.85) (stroke (width 0.1) (type default)) (fill no) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);

// F.CrtYd
fp.push(`(fp_rect (start ${(flip ? 1 : -1)} -1.15) (end ${(flip ? -1 : 1)} 1.15) (stroke (width 0.1) (type solid)) (fill no) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(zone (net 0) (net_name "") (layer "F.SilkS") (hatch edge 0.5) (connect_pads (clearance 0)) (min_thickness 0.25) (filled_areas_thickness no) (keepout (tracks allowed) (vias allowed) (pads not_allowed) (copperpour allowed) (footprints not_allowed)) (placement (enabled no) (sheetname "")) (fill (thermal_gap 0.5) (thermal_bridge_width 0.5)) (polygon (pts (xy -1 -1.15) (xy 1 -1.15) (xy 1 1.15) (xy -1 1.15))))`);
fp.push(`(embedded_fonts no)`);

fp.push(`)`);

    return fp.join('\n');
  }
}
