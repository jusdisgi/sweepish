// Adafruit ANO Multibutton Rotary Encoder
//
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// made with kicad2ergogen https://kicad2ergogen.genteure.com/
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/rotary_encoder_ano.js
//
//
// This little doohicky from Adafruit is remeniscent of the original iPod control. It has 4 directional buttons, a center button, and a rotating ring between the center and the directionals.
//
// The Adafruit guide is here: https://learn.adafruit.com/ano-rotary-encoder/
// Their github which includes a breakout PCB (source of the KiCad footprint this is based on) is here: https://github.com/adafruit/Adafruit-ANO-Rotary-Navigation-Encoder-Breakout-PCB
// To get the KiCad footprint you need to import the EAGLECad .brd file into KiCad.
//
// Parameters:
// side: F (default) for front or B for back
//  A: Encoder A
//  B: Encoder B
//  COM_A: Common for SW1, ENCA, ENCB (i.e. for the center button and the rotation)
//  COM_B: Common for SW2, SW3, SW4, SW5 (i.e. for the directional buttons)
//         Both commons can be set to VCC or GND, but usually the latter.
//  S1: Center button
//  S2: Down
//  S3: Right
//  S4: Up 
//  S5: Left

module.exports = {
  params: {
    designator: 'RE',
    side: 'F',
    A: { type: 'net', value: undefined },
    B: { type: 'net', value: undefined },
    COM_A: { type: 'net', value: undefined },
    COM_B: { type: 'net', value: undefined },
    S1: { type: 'net', value: undefined },
    S2: { type: 'net', value: undefined },
    S3: { type: 'net', value: undefined },
    S4: { type: 'net', value: undefined },
    S5: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "ENCODER_ANO"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 15 : -15)} 0 ${p.r}) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 -15 ${p.r}) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 -4.5 ${p.r}) (size 1.6 1.6) (drill 1.6) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 4.5 ${p.r}) (size 1.6 1.6) (drill 1.6) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 15 ${p.r}) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? -15 : 15)} 0 ${p.r}) (size 4 4) (drill 4) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "A" thru_hole circle (at 0 9.26 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.A})`);
fp.push(`(pad "B" thru_hole circle (at ${(flip ? -9.26 : 9.26)} 0 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.B})`);
fp.push(`(pad "COM_A" thru_hole circle (at 0 -9.26 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.COM_A})`);
fp.push(`(pad "COM_B" thru_hole circle (at ${(flip ? 13.67 : -13.67)} 9.07 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.COM_B})`);
fp.push(`(pad "S1" thru_hole circle (at ${(flip ? 1.57 : -1.57)} 0 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.S1})`);
fp.push(`(pad "S2" thru_hole circle (at ${(flip ? 5.2 : -5.2)} 16.16 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.S2})`);
fp.push(`(pad "S3" thru_hole circle (at ${(flip ? -13.97 : 13.97)} 8.87 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.S3})`);
fp.push(`(pad "S4" thru_hole circle (at ${(flip ? -5.2 : 5.2)} -16.16 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.S4})`);
fp.push(`(pad "S5" thru_hole circle (at ${(flip ? 13.97 : -13.97)} -8.87 ${p.r}) (size 2.54 2.54) (drill 1.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (solder_mask_margin 0.0508) (thermal_bridge_angle 0)  ${p.S5})`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 10.4 : -10.4)} -10.4) (end ${(flip ? 10.4 : -10.4)} -8) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 10.4 : -10.4)} -8) (end ${(flip ? 8 : -8)} -10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 10.4 : -10.4)} 8) (end ${(flip ? 10.4 : -10.4)} 10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 10.4 : -10.4)} 10.4) (end ${(flip ? 8 : -8)} 10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 8 : -8)} -10.4) (end ${(flip ? 10.4 : -10.4)} -10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 8 : -8)} 10.4) (end ${(flip ? 10.4 : -10.4)} 8) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -8 : 8)} -10.4) (end ${(flip ? -10.4 : 10.4)} -8) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -8 : 8)} 10.4) (end ${(flip ? -10.4 : 10.4)} 10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.4 : 10.4)} -10.4) (end ${(flip ? -8 : 8)} -10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.4 : 10.4)} -8) (end ${(flip ? -10.4 : 10.4)} -10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.4 : 10.4)} 8) (end ${(flip ? -8 : 8)} 10.4) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.4 : 10.4)} 10.4) (end ${(flip ? -10.4 : 10.4)} 8) (stroke (width 0.25) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 0) (end ${(flip ? -4.05 : 4.05)} 0) (stroke (width 0.25) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 0) (end ${(flip ? -11.45 : 11.45)} 0) (stroke (width 0.25) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 0) (end ${(flip ? -16 : 16)} 0) (stroke (width 0.25) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 0) (end ${(flip ? -17.2 : 17.2)} 0) (stroke (width 0.25) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${flip ? (p.r - 0) % 360 : (p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

