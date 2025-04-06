# sweepish
Basically a Ferris Sweep with a Seeed XIAO nrf52840 and Choc switches. My first ever attempt at PCB design.

I watched Joe Scotto's YouTube video on KiCad and figured I would try to replicate my own keyboard (a Sweep Bling LP) without looking at anybody's existing board design.
I also wanted to use the XIAO BLE because I just ordered some.
I swapped put the pins out of order so I could route column 3 between the last two keys of column 4 and then route key 17 separately. I felt clever doing it, but I wonder whether it's a bad idea from a build perspective or a firmware perspective.
I also felt a bit clever routing the controller connections for layers 0,1,2 on the back side so they didn't have to cross the columns themselves. In rebrospect I probably could have done that with they other two and not had to swap pins or come at it from a different angle.
Dang. Yeah OK I'm gonna do that.
