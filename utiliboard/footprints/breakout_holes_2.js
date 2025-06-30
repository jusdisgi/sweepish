// Breakout holes
// ain't nothin fancy going on here figure it out

module.exports = {
  params: {
    designator: 'XX',
    orientation: 'down',
    P1: { type: 'net', value: 'A1' },
    P2: { type: 'net', value: 'A2' }
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
        (fp_text user A1 (at 0 ${def_pos}-2 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P2 (at 0 ${def_pos}2 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        
        ${''/* and now the actual pins */}
        (pad 1 thru_hole circle (at 0 ${def_pos}-4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 2 thru_hole circle (at 0 ${def_pos}4 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
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