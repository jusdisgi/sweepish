// SOD-323F SMD Diode footprint for Ergogen
//
// Author: @huntercook https://github.com/jusdisgi
// Based on KiCad module D_SOD-323F from the included KiCad footprints library
// stored in ${KICAD9_FOOTPRINT_DIR}/Diode_SMD.pretty/D_SOD-323F.kicad_mod
//
// The only parameters are "from" and "to" and there is no further configuration available.
// It goes on the front side.
//
// I made this one by hand, but now I have a better one made using https://kicad2ergogen.genteure.com/
// it should be in this same directory named diode_smd_sod323f.js
// it is from the same kicad footprint and generally works the same, but it allows
// for placement on either side.
//
module.exports = {
  params: {
      designator: 'D',
      from: undefined,
      to: undefined
  },
  body: p => `

  (module diode_smd_sod323f (layer F.Cu) (tedit 67FEEE99)

      ${p.at /* parametric position */}
      (attr smd)
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
    (fp_line
		(start -1.61 -0.85)
		(end -1.61 0.85)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "5d99c893-f364-4047-8735-6f43476f5279")
	)
	(fp_line
		(start -1.61 -0.85)
		(end 1.05 -0.85)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "6a56d483-1e18-433c-bb75-6e7b60196075")
	)
	(fp_line
		(start -1.61 0.85)
		(end 1.05 0.85)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "43019d07-7e6c-46d6-9279-9bf345d7e159")
	)
	(fp_line
		(start -1.6 -0.95)
		(end -1.6 0.95)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "fc0c9565-657a-4a7d-af10-df87305cf94d")
	)
	(fp_line
		(start -1.6 -0.95)
		(end 1.6 -0.95)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "ae202736-09c5-43cb-b8e0-12a6fd5b177d")
	)
	(fp_line
		(start -1.6 0.95)
		(end 1.6 0.95)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "3febb428-3e00-4887-a7c5-8206bcae0744")
	)
	(fp_line
		(start 1.6 -0.95)
		(end 1.6 0.95)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "3e0a6426-19a3-46dc-b47a-48803cb31677")
	)
	(fp_line
		(start -0.9 -0.7)
		(end 0.9 -0.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "e3a9630d-34b8-4b06-a3ca-6b6a37a43ad0")
	)
	(fp_line
		(start -0.9 0.7)
		(end -0.9 -0.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "7edb8ae7-9ad2-4f72-bebe-e77b713708e0")
	)
	(fp_line
		(start -0.3 -0.35)
		(end -0.3 0.35)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "ef1f2617-b543-4bf3-ba20-cfff6e681f81")
	)
	(fp_line
		(start -0.3 0)
		(end -0.5 0)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "dc68aa36-cf68-4abb-8048-b53252a88107")
	)
	(fp_line
		(start -0.3 0)
		(end 0.2 -0.35)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "c34d0ce6-d7c6-437c-9734-fb35bdffdcdb")
	)
	(fp_line
		(start 0.2 -0.35)
		(end 0.2 0.35)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "ed1abca1-e607-4966-9bc8-c76ce408773e")
	)
	(fp_line
		(start 0.2 0)
		(end 0.45 0)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "db052ac7-b570-4b89-b6ea-5ae12133eb2b")
	)
	(fp_line
		(start 0.2 0.35)
		(end -0.3 0)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "73477d91-de2b-495d-a7e9-74ade379a021")
	)
	(fp_line
		(start 0.9 -0.7)
		(end 0.9 0.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "fcd0faf8-f580-42b4-bf88-404b1e100a43")
	)
	(fp_line
		(start 0.9 0.7)
		(end -0.9 0.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "1da73c9e-629e-4e6f-a701-d83771523a8e")
	)
	(pad "1" smd roundrect
		(at -1.1 0 ${p.rot})
		(size 0.5 0.5)
		(layers "F.Cu" "F.Mask" "F.Paste")
        ${p.to}
		(roundrect_rratio 0.25)
		(uuid "2a3140ca-4f92-42fc-89e1-c9f000d5a89e")
	)
	(pad "2" smd roundrect
		(at 1.1 0 ${p.rot})
		(size 0.5 0.5)
		(layers "F.Cu" "F.Mask" "F.Paste")
        ${p.from}
		(roundrect_rratio 0.25)
		(uuid "bd835929-215d-4cfc-bdc7-79f61d064b04")
	)
  )
  `
}