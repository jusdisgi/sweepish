# sweepish
Basically a Ferris Sweep with a Seeed XIAO nrf52840 and Choc switches. My first ever attempt at PCB design.

I watched Joe Scotto's YouTube video on KiCad and figured I would try to replicate my own keyboard (a Sweep Bling LP from Keebmaker) without looking at any existing board designs. Well, except the 3x3 macropad in the video of course.
I also wanted to use the XIAO BLE because I just ordered some.
I feel like it came out pretty well for a first attempt. I hope to have some more knowledgeable people take a look and tell me how I can do better.

Now updated on day 2...learned that a)the battery connects underneath the XIAO, which my design did not allow for, and b)the footprints from Seeed's librery are junk and don't even have those pins. So I got a better footprint from https://github.com/ebastler/marbastlib and added that, a JST connector for the battery, a power switch and a reset button. 

All of that is in the sweepish_v2 directory. Have a look!

![image](https://github.com/user-attachments/assets/a0f0c393-c236-41c6-97ad-f522d339f42f)
![image](https://github.com/user-attachments/assets/c1b394f5-3028-4172-b1dd-eb291bbb5c16)
![image](https://github.com/user-attachments/assets/2f4e2257-cb6d-4be3-af4b-78a596ad2211)
![image](https://github.com/user-attachments/assets/a36c12a6-6cb5-4566-912a-c3847cd12e30)
