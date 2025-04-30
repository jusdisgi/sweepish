// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'XX',
    orientation: 'down',
    P1: { type: 'net', value: 'A1' },
    P2: { type: 'net', value: 'A2' },
    P3: { type: 'net', value: 'C1'}
  },
  body: p => {
    const standard = `
      (module 5diode_Breakout_Holes (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      `
    function pins(def_neg, def_pos) {
      return `
        
        ${''/* pin names */}
        (fp_text user A1 (at 1.25 ${def_pos}-2.4 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.5 0.5) (thickness 0.15))))
        (fp_text user A2 (at -1.25 ${def_pos}-2.4 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.5 0.5) (thickness 0.15))))
        (fp_text user C1 (at 0 ${def_pos}2.4 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.5 0.5) (thickness 0.15))))
        
        ${''/* and now the actual pins */}
        (pad 1 thru_hole circle (at 1.25 ${def_pos}-4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 2 thru_hole circle (at -1.25 ${def_pos}-4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
        (pad 3 thru_hole circle (at 0 ${def_pos}4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3})
        `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}