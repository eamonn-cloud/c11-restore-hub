// AUTO-COMPILED knowledge base for the Ask C11 assistant.
// Sources: C11 site content (aftercare hub, FAQ, engineering reference) plus text extracted
// from the uploaded Avantopool PDF manuals. Server-side only - never imported by client code.

export const C11_KNOWLEDGE = `===== C11 RECOVERY - SITE & SUPPORT FACTS =====

C11 Recovery is a premium sports recovery brand (c11recovery.com). Tagline: engineered to restore.
Models sold: Kinos, Kinos Plus, Hanki, Kuura (Avantopool ice baths with Cooling & Heating Unit chillers).

CONTACT
- WhatsApp (live): +353 85 142 6203 -> https://wa.me/353851426203
- Phone: +353 85 142 6203
- Email: service@c11recovery.com
- Hours: Mon-Fri 9:00-17:30 GMT. Replies within 1 working day.
- Service request / warranty claim / product registration / returns: all by email to service@c11recovery.com

SITE PAGES AND LINKS (use relative paths when pointing the user somewhere)
- / (Aftercare hub): model selector with manuals, product cards, videos.
- /videos : installation and maintenance video library, filterable by model (Kinos, Kinos Plus, Hanki, Kuura).
- /manual : engineering reference. Jump anchors:
  /manual#specs (comparative specifications), /manual#chemistry (water chemistry, no salts or oils),
  /manual#ice (never add ice manually), /manual#electrical, /manual#ventilation (clearances),
  /manual#outdoor (winter and outdoor use, IPX4), /manual#sleep (sleep mode warning in freezing temps),
  /manual#controller (controller guide, lock, modes, ozonator, timers), /manual#errors (E-code and P-code matrix),
  /manual#p01 (P01 flow fault deep dive), /manual#maintenance (pipe flushing, condenser cleaning), /manual#talk (support).
- Replacement filters and parts: https://c11recovery.com/avantopool-ice-baths/?ts=1784206761
- Google review: https://g.page/r/CQUuYSv-ChSqEBM/review
- Privacy: https://c11recovery.com/privacy-policy/  Terms: https://c11recovery.com/terms-conditions/
- Documents: CHU manual (all models), CHU Wi-Fi controller manual (Hanki, Kinos Plus, Kuura),
  Kinos manual, Kinos Plus manual, Kuura manual, Kinos and Kinos Plus one-pagers, Kinos Problems & Solutions.
  Tell the user which document to open on the homepage model card rather than pasting a raw file URL.

FAQ (authoritative site answers)
Q: What warranty comes with my C11 ice bath?
A: 2-year manufacturer warranty on the chiller and controller, 5-year structural warranty on the pool shell. Wear items (filters, UV lamps, seals) are consumables and not covered. Register within 30 days of delivery to activate cover.
Q: How do I register my product?
A: Email service@c11recovery.com with name, delivery address, model and serial number (silver plate on the chiller housing).
Q: Where do I find my serial number?
A: On the silver rating plate on the side or rear of the chiller unit. Starts with a model code (KIN-, KP-, HAN-, KUU-) then batch and unit number.
Q: What water chemistry should I run?
A: Ozone is the primary sanitiser with light chlorine or bromine backup. pH 7.2 to 7.6. Test twice weekly, full water change every 4-6 weeks depending on use. Never use salt or oils.
Q: How often should I change the filter?
A: Rinse the cartridge weekly, replace every 4-8 weeks depending on bather load. Replace the UV lamp every 12 months. Order genuine filters via the Replacement Filters link.
Q: What are the electrical and plumbing requirements?
A: Kinos and Kinos Plus run on a standard 13A / 230V socket. Hanki and Kuura need a dedicated 16A supply. All models need a level base, a nearby drain, and a covered position for the chiller.
Q: Can I leave the ice bath outside in winter?
A: Yes, year-round outdoor use down to -20C provided the unit is powered and circulating. If left unpowered more than 48 hours in sub-zero conditions, drain the system fully.
Q: Do you offer installation?
A: White-glove installation across Ireland and the UK for Hanki and Kuura. Kinos and Kinos Plus are owner setup with the installation video and manual. Contact us for an install quote.
Q: How do I return my order?
A: Unused, undamaged units within 14 days of delivery. Email service@c11recovery.com with the order number.
Q: What if I need spare parts other than filters?
A: For pumps, seals, controllers, hoses, covers or steps, contact support with model and serial number for a genuine-parts quote.

COMMON FIX - CHILLER NOT PUMPING WATER AFTER A FILTER CHANGE OR INITIAL SETUP (airlock)
1. Reconnect all hoses securely and open every valve.
2. Power up the chiller. The pump runs but no water circulates if there is an airlock.
3. Slowly loosen the main filter housing (or hair filter housing) until water fills the housing and air escapes.
4. Once water enters the housing the pump is priming. Seal the housing and let the system run.
This is the usual cause of a P01 no-flow error after maintenance.


===== DOCUMENT: AVANTOPOOL COOLING & HEATING UNIT (CHU) - INSTALLATION & MANUAL (applies to Hanki, and general chiller unit) =====
| July 2025

COOLING & HEATING
 | UNIT (CHU)
 INSTALLATION AND USER MANUAL
 | July 2025

Table of contents
Warning 
Installation distance 
Installation of Drain Hose (optional) 
Attaching Water Hoses to the unit 
Layout of water circulation between the unit and the pool 
Hanki pool + cooling and Heating Unit - implementation steps 
Kide Pool + CHU - implementation steps 
Filling the Pool and letting air out of the unit 
Operation 
 | Controller Interface 
 | Operation Instruction of Controller 
 | Power and Screen Lock
 | Modes (Cooling / Heating / Auto) 
 | Temperature Settings 
 | Time Setting 
 | Power ON/OFF Timer Setting ("Auto Mode") 
Error messages on Display 
 | Error Code List 
General maintenance and quality of water 
Maintenance tips 
Troubleshooting
Warranty 
EU DECLARATION OF CONFORMITY 
 | July 2025

Warning

 | • | For repairs, please contact service. The repair process must be done in strict
 | accordance with this manual. All maintenance operaBons by non-professional
 | personnel are prohibited and will void warranty.
 | • | MisoperaBon may result in injury to personnel or damage to equipment.
 | • | Please make sure that the pool is filled up and air is removed from the unit piping
 | before starBng the unit. It is forbidden to start this equipment before a certain water
 | level has been established. Otherwise, there is a risk of damage to this equipment and
 | void of warranty.
 | • | In winter or when the ambient temperature drops below 0°C, be sure to empty the
 | water from the cooling unit if it is not in use. Otherwise, the unit will be damaged by
 | freezing, in which case your warranty will be voided. The unit should not be used
 | outdoors in ambient temperatures below -7°C.
 | • | When there is a need to cut the power for repair, wait for 1 minute aSer power is off,
 | before touching the circuit board, to avoid capacitor discharge resulBng in electric
 | shock.
 | • | The cooling unit must be stored and transported verBcally in its original packaging. If
 | not, wait at least 24 hours before being powering the unit.
 | • | The correct power supply, voltage, and frequency must be confirmed before
 | installaBon.
 | • | Improper installaBon may result in fire, electric shock, equipment falling, or water
 | leakage.
 | • | Make sure no water penetrates the electrical components.
 | • | The unit may be damaged by severely overheaBng the product due to negligence, such
 | as covering the cooling unit's venBlaBon grills with towels, clothing, or other objects,
 | or operaBng the cooling unit too close to a wall or in a room/place with insufficient
 | venBlaBon.
 | • | Do not use salt or other minerals in the water.
 | • | This equipment is not intended for use by children. Children must be supervised by an
 | adult while using it to ensure their safety.
• | Persons with a history of heart disease, low or high blood pressure, circulatory system
 | problems, diabetes, or any condiBon requiring medical treatment should consult a
 | physician or a doctor before using the pool.
 | • | Persons using medicaBon should consult a physician or a doctor before using the pool
 | since some medicaBon may induce drowsiness while other medicaBon may affect
 | heart rate, blood pressure and circulaBon.
 | • | Pregnant women should consult a physician or a doctor before using the pool.
 | • | The unit should not be used in direct sunlight, due to the overheaBng of the device.
 | July 2025

Installa2on distance
 | The cooling unit should be installed in a well-venBlated area. It should be installed in the
 | place greater than the following distances:
 | • Min. distance between unit front and wall = 1500mm (150 cm)
 | • Min. distance between unit back and wall = 300mm (30 cm)
 | • Min. distance between unit sides and wall = 200mm (20 cm)

Installa2on of Drain Hose (op2onal)
 | The drain hose needs to be installed in the
 | following manner to the locaBon of the
 | corresponding drainage outlet at the
 | bo]om of the cooling unit. In most cases
 | the drain hose for condensed water is not
 | needed.

A:aching Water Hoses to the unit
 | Use the hoses included in the delivery package.
 | Connectors are pre-a]ached in the hoses.
 | Please make sure that the sealing O-rings are
 | correctly in place before a]aching the
 | connector.
 | July 2025

Layout of water circula2on between the unit and the pool
 | If the operaBng ambient temperature is below 0°C, please keep the unit running and at
 | "auto mode" (circle icon on the units display) and do not use the "acBve mode" Bmer.
 | Otherwise, the system will freeze.

 | The filter must be rouBnely cleaned to keep the water in the system clean and to avoid
 | filter clogging. Replace the cartridge filter when needed, usually every 2-4 months
 | depending on volume of use.

 | Hose installa+on:
 | July 2025

Hanki pool + cooling and Hea2ng Unit - implementa2on steps
 | 1. A]ach the step
 | • Turn the step into place as shown in the picture.

 | 2. A]aching the hoses to the pool (with Camlock connectors)
 | • Push the hose into the connector as shown in the picture.

 | 3. Lock the connector as shown in the picture.
 | • Note: you can secure the Camlock connectors with the safety pins.
 | July 2025

 | 4. A]ach the connectors to the unit
 | • Remember to put the o-ring inside the connector and turn clockwise unBl Bght.

5. A]ach the small mesh filters
 | • CHU always comes with a filter, either with small mesh filter or opBonally with a
 | cartridge filter. Should you have the mesh filter, install it to the lower connectors of
 | both pool and the CHU, so that the arrow on top of the filter points towards CHU.

6. A]ach the opBonal cartridge filter (instead of small mesh filter).
 | a. Use scissors to cut off the cable Be.
 | b. Install the gasket on the valve and turn the valve clockwise to Bghten.
 | c. Valves with seals and hoses installed.
 | d. A]ach the cartridge filter to the lower connectors of both pool and the CHU, so that the
 | arrow on top of the filter points towards CHU.

 | a) | b) | c)
 | July 2025

 | d)

7. Ensure that your setup resembles this: the upper hose from the unit should connect to the
 | upper hole in the pool, and the lower hose should connect to the lower hole in the pool.

 | Setup with small mesh filter | Set up with cartridge filter
 | July 2025

Kide Pool + CHU - implementa2on steps
 | 1. A]ach the air pump hose to the pool, as shown in the picture, and apply approximately
 | 0.3-0.5 bar of pressure into the pool.

 | 2. A>ach the connectors: unit/pool.
 | • Place the o-ring inside the connector and turn clockwise un+l +ght.

 | 3. A]ach the small filter
 | • | CHU always comes with a filter. A]ach the filter to the lower connectors of both pool
 | and the CHU, so that the arrow on top of the filter points towards CHU.
 | July 2025

 | 4. Ensure that your setup resembles this with a small mesh filter.

Filling the Pool and leIng air out of the unit
 | 1. Fill the pool slightly below the upper nozzle.

 | 2. Should you have the opBonal cartridge filter installed, then take the air out by
 | unscrewing the screw and then closing it.
 | July 2025

3. Plug it in and push the power bu>on.

4. Turn on the unit by pressing the start bu>on on the unit.

 | NOTE!
 | If the air does not come out of the unit and no flow (error P01) appears aSer 1 minute,
 | unplug the unit and restart it. When you see the water flowing, fill the pool to desired
 | level.
 | July 2025

Opera2on
Controller Interface

Opera/on Instruc/on of Controller

 | Power and Screen Lock
 | To unlock, long press " | " 3 seconds unBl you hear a "beep" sound. The lock icon " | "
 | disappears. Short press the " | " key to turn the unit on or off. ASer 60 seconds without
 | pressing any bu]on, the controller will be locked automaBcally. When locked, the lock

 | icon " | " is displayed.

 | Modes (Cooling / Hea7ng / Auto)
 | When the unit is on, short press " | " key to select the operaBng modes. The circular
 | selecBng sequence is Cooling → HeaBng → Auto → Cooling (conBnual loop).

 | NOTE: Auto mode → there is a delay in changing the cooling / heaBng direcBon.

 | The heaBng icon " | " will display when HeaBng mode is on.

 | The cooling icon " | " will display when Cooling mode is on.

 | When running in Auto mode, loop to icon " | ". It is recommended to always use Auto mode.
 | July 2025

Temperature Se?ngs
When the cooling unit is on, unlock the screen (see "Power and Screen Lock"). Press up "
" or down " | " to adjust the temperature. No acBons for 3 seconds will exit the display
showing the current water temperature.

Time Se?ng
1. Enter Time Selng: Long press the " | " key for 5 seconds unBl the digit in both
 | "hour" and "minute" parts flash.

2. Time Selng Method: On the Bme selng interface, short press " | ". Then the hour

 | digit in area will blink. Press " | " or " | " to adjust hour. Press " | " to switch to

 | minute part and repeat above acBons. When selng is done, press " | " to save the
 | selng and to exit to main interface.

 Power ON/OFF Timer Se7ng ("Auto Mode")
1. User can set up two IN/OFF "acBvate mode" Bmer periods. The set periods may not
 | overlap.
2. Power ON/OFF Timer Selng Method

On main interface, short press " | " to enter power on/off Bmer selng. When "1" is
blinking, press " | " to enter the power ON hour part selng of "acBve mode" period 1.

When the hour part is blinking, press" | " or " | " to adjust the hour. Press " | " to
confirm and to enter the minute part.

When selng is done, long press " | " to confirm and save the current power ON/OFF
Bmer selng. Press " | " or " | " to enter selng of "AcBve Mode" period 2 and
repeat above acBons. Valid Bmer group will be shown on the main interface with a
corresponding number. Short press " | " to go to main menu.
 | July 2025

Error messages on Display
 | When the fault occurs, the corresponding error code will appear. ASer the error is
 | eliminated, the error code will disappear. To reset the error code, restart the unit.

Error Code List

 | Fault code | Descrip:on

 | E01 | Gas exhaust temperature fault

 | E05 | Coil temperature fault

 | E09 | Gas suc:on temperature fault

 | E17 | Inlet water temperature fault

 | E18 | Outlet water temperature fault

 | E22 | Ambient temperature fault

 | P01 | Water flow fault

 | P02 | High pressure protec:on

 | P06 | Low pressure protec:on

 | P11 | Gas exhaust temperature over high protec:on

 | P15 | Inlet/outlet water excessive temperature protec:on

 | P16 | Overcooling protec:on

 | P17 | Standby an:-freeze protec:on

 | P25 | Ambient temperature protec:on

 | P26 | Outlet water high temperature protec:on under hea:ng mode

 | P27 | Outside coil over high temperature protec:on under cooling mode
 | July 2025

General maintenance and quality of water
 | Avantopool CHU is equipped with an UV-disinfector. It kills the bacteria and viruses and
 | keeps the water pure and clear - with the washable cartridge filter. Depending on the
 | uBlizaBon frequency, occasional use of chlorine might be needed to disinfect the water
 | (especially in heavy public use).

 | On daily basis:

 | • | Check the water level

 | On weekly basis:

 | • Clean the possibly stained water line and the washable filter.
 | • Flush the filter thoroughly under warm running water or shower (do not
 | use pressure washer as it may damage the filter material).
 | • Check the water pH level which should be maintained on normaBve level
 | (7,2 - 7,6). If needed, you can finetune the pH level by using pH+ or pH-
 | chemicals.

 | When in heavy use:
 | • | Should the pool be in heavy daily use (more than 10 users/day), it is
 | recommended to add chlorine (natriumdiklorisocyanurat, dihydrat) to the
 | water to reach and maintain 0,3 - 1,2 ppm free chlorine level. Individual
 | dosage may be only half of a teaspoon.

Maintenance 2ps
 | 1. Check the power and cable connecBons regularly. If any problems found,
 | contact your local dealer.

 | 2. Vacuum the cooling unit regularly (at least 2 Bmes per year) to ensure proper
 | venBlaBon. Vacuum the enBre unit, paying special a]enBon to the grid elements.
 | Use the most powerful vacuum cleaner available for best results.

 | 3. When the cooling unit is not in use, unplug it.

 | 4. If the cooling unit will not be used for an extended period, drain all water from
 | the unit. Detach the hoses and Blt the unit to allow water to flow out from the
 | lower outlet. AlternaBvely, you can use a wet vacuum to remove the remaining
 | water.
 | July 2025

Troubleshoo2ng
 | 1. If the control panel is blank and the cooling unit is not running, check the power
 | supply and/or if the residual-current device has acBvated. If the power supply is
 | ok but the residual-current device has turned off the power, push the reset
 | bu]on to re-start the unit. Should the problem remain, unplug the device and
 | contact the retailer or manufacturer.
 | 2. If there is no water circulaBon aSer switching the unit on, switch off the unit for
 | a while and on again. This may happen due to air locks in the pipes. Repeat, if
 | needed, unBl the water starts circulaBng.
 | 3. If the water is not circulaBng properly, check the water level and condiBon of
 | the filter (cartridge, if used). Add more water if needed. Clean the filter or
 | replace cartridge, if needed. Should problem remain, please contact the retailer
 | or manufacturer.
 | 4. Should the cartridge filter's housing be Bght and difficult to open, use the
 | opening key that is included in the filter package.
 | July 2025

Warranty

 | Model: Avantopool Hanki Pool

 | 3 years:
 | • Hanki pool and step (model APH001)
 | • These materials have a 3-year warranty, which applies to fractures and breaking
 | without external influence on other misuse of the device (see limitaBons below)
 | Model: Avantopool Kide

 | 1 year:

 | • | Kide pool (inflatable) and cover (model APK001)

 | Model: Cooling & HeaFng Unit APCU032

 | Private use 2 years / commercial use 1 year warranty:

 | • | Cooling unit (aggregate) as a whole (model APCU032)
 | o Mechanical and electrical parts: pump, heat exchanger, condenser,
 | heater
 | o Control panel and control system
 | • | Hoses, connectors
 | • | Lid
 | • | Filter housing (opBonal)
 | These parts and combinaBons (aggregate) have a limited 2-year warranty (private use) /
 | limited 1-year warranty (commercial use) which applies to breaking without misuse of the
 | device (see limitaBons below).

 | WARRANTY DOES NOT COVER:

 | • | Damage or defect caused by misuse of the device, wrong or inadequate
 | electrical current or connecBon, negligence, inappropriate on-site operaBng
 | condiBons, repairs by non-Avantopool designated personnel, tampering,
 | alteraBons or accidents in later transportaBons.
 | • | Flood or rainwater, insect infestaBon or unreasonable outdoor exposure
 | • | Damage caused due to the product not being reasonably installed, operated,
 | maintained or used in accordance with Avantopool's instrucBons and
 | specificaBons (User Manual)
 | • | PotenBal damage caused to APCU032 from using with other than Avantopool
 | cold pool models (Hanki and Kide) or with other applicaBons technically not
 | known to Avantopool.
 | July 2025

 | • | Damage caused by unauthorized alteraBons, accident, misuse, abuse, use of
 | incorrect voltage, power surges, thunderstorm acBvity, tampering and
 | unauthorized repairs, or exposure to abnormally corrosive condiBons
 | • | Damage caused by the use of chemicals or minerals in the pool water.
 | • | Damage caused by water or other liquids entering the electrical or electronics of
 | the device through negligence.
 | • | Damage caused by severely overheaBng the product due to negligence, such as
 | covering the cooling unit's venBlaBons grills with towels, clothing, or other
 | objects, or operaBng the cooling unit too close to a wall or in a room/place with
 | insufficient venBlaBon.

Following instrucBons stated in the User Manual is imperaBve. Follow the maintenance
rouBnes is utmost important. Damage cause by neglecBng the maintenance rouBnes may
void the warranty.

ORIGINAL OWNER & COUNTRY OF SALE

Warranty is available only to the original purchaser / owner purchased from Avantopool
directly or from an approved Avantopool reselling partner. This warranty is not transferable
except with the wri]en consent of Avantopool. The warranty applies only in the country
where the Kinos pool was purchased or delivered to the original owner.

PROOF

Proof of the purchase date, cooling unit serial number and that the claimant is the original
purchaser may be required. AddiBonally, Avantopool reserves the right to request the return
to Avantopool of any component replaced under warranty, or alternaBvely, proof that the
faulty component was actually disposed of or destroyed.

RIGHT TO REPAIR OR REPLACE THE PRODUCT

Avantopool reserves the right to replace the product or relevant part of the product with
the same or equivalent product or part rather than repair it.

SEPERATE WARRANTY ON REPLACED COMPONENTS

Where defecBve parts are replaced with new parts, the new part will carry a separate
warranty from the date of replacement, however this does not restart the original standard
warranty.
 | July 2025

RESPONSE TIME & PLACE OF REPAIR WORK
Avantopool undertakes to approve and provide repair work promptly, however we will not
accept responsibility for any costs whatsoever in regard to any repair work or transport costs
that were not specifically approved by Avantopool prior to any such work or transport taking
place. At its discreBon, Avantopool may either repair the product at the premises of the
owner of the product, or if the repair is beyond the scope of a local repair agent, Avantopool
may request that the product be shipped back to it's factory for a more thorough and
comprehensive examinaBon and repair. Where Avantopool determines that the repair needs
to be carried out at it's factory, Avantopool will be responsible for the cost of land transport
so long as that transport is arranged by or approved by Avantopool. Avantopool will not be
responsible for freight services arranged without its consent.

This limited warranty gives you specific legal rights in addiBon to remedies provided by local
laws and regulaBons, which may vary from country to country.
EU DECLARATION OF CONFORMITY

 | Manufacturer:
 | Avantopool Oy
 | Finnoonlaakson:e 7
 | 02270 Espoo
 | FINLAND

 | Declares that this appliance set to the market:

 | Avantopool-model: APCU032 | Serialnumber: | ____________

 | complies with the requirements of Low Voltage Direc:ve 2014/35/EU:
 | - | Household and similar electrical appliances -Safety- General requirements
 | EN 60335-1:2012+A15:2021
 | EN 60335-2-40:2003+A13:2012
 | - | Measurement methods for electromagne:c fields of household appliances and similar apparatus
 | with regard to human exposure
 | EN 62233:2008

 | and EMC 2014/30/EU requirements:
 | EN IEC 55014-1:2021
 | EN IEC 55014-2:2021
 | EN IEC 61000-3-2:2019+A1:2021
 | EN 61000-3-3:2013+A1:2019+A2:2021
 | EN IEC 61000-3-11:2019
 | EN 61000-3-12:2011

 | Espoo 15 / 5 2023

 | ___________________

 | Pekka Nurmi
 | COO
===== DOCUMENT: CHU WI-FI CONTROLLER MANUAL (Hanki, Kinos Plus, Kuura) =====
Operation Instruction of Wi-Fi Function
APP Download
Search "Smart Life" to download the app. The Wi-Fi router of the place must be at least 10m
inside to establish a connection.
 | APPLE system download | ANDRIOD system
 | from: | download from:

 | Smart Life

Note: For Android mobiles, "Download apps from external sources" should be activated, as below
shows:

 | Open the APP and enable
 | the authorization of its
 | positioning.

User Registration

 (1). New users need to register at the first | (2). Finish your registration according to the
 time use. | instruction.

 | (Regular user) To log in
 | with existed account
 | name & PIN.
 | Complete the registration
 | as it instructs.
 | (New user) To register
 | a new account

User Login
Select your location, enter the account name and PIN, and need to agree the Privacy Policy.

Connect your smartphone to the available Wi-Fi (the same Wi-Fi source as the cooling unit device
connects). And also keep your smartphone Bluetooth open in the meanwhile.

Ensure your smartphone Location Services remain "On" and also turn on "Allow Apps to Request
to Track" :

Add Device

Tap "+"at the right upper corner, or tap "Add device" button to add the smart devices you want to
connect.

 | Tap here to add the smart
 | devices you want to
 | connect.

Select "Others" to enter the "Add Manually" interface. And then select "Others (Wi-Fi)".

Once above steps finished, it enters device adding interface. Internet distribution methods are
"Default mode (Wi-Fi fast connection)" and "Compatibility mode (Wi-Fi distributed)".

(1) For default mode (Wi-Fi fast connection. The icon of Wi-Fi blinking fast on cooling unit
 | controller. Most users select this mode.)

Then enter this below interface and need to input Wi-Fi account & Wi-Fi password (the same Wi-Fi
source as the cooling unit device connects):

After inputting above information , tap the "Next" button.

When you enter below interface , please tap the little circle first.

Then, operate the controller of cooling unit like this below :

Using your fingers to press on these two buttons at the same time until the " | " icon start
blinking. If locked, icon of lock " | " is displayed; For unlock, press any key to light up the screen
and long press " | " 5 seconds until a "beep" sound to unlock. Then the icon " | " disappears.

When the "SET" icon displays and starts blinking , click the "Next" button on your smartphone to
enter into this searching interface. The searching status may last for several seconds to two
minutes.

When below page comes up, it means your smartphone has been connected successfully.

Device name changing and solution of fail connection:

 | * Name of device can be
 | amended here *.

 | (1 ). Click "Done" to complete the | (2 ). If connection fails, users can try again or
 | connection and start to control your | check the proposed solution here.
 | cooling unit device.

(2) For the compatibility mode (Distributed Wi-Fi, the icon of Wi-Fi blinks slowly on cooling unit
 | controller)

 | (1) Select "Other Mode". | (3) Long press together " | "+" | "+"

 | " for 3 seconds at cooling unit's
 | controller, to enter "compatibility mode"
 | internet distribution.

 | (2) Select "AP Mode".

 | (4) Select the available Wi-Fi and | (5) Select the Wi-Fi "SmartLife-XXXX" | (6) Once connected, it may
 | enter PIN, then confirm. | and connect. | return to APP main interface.

Wi-Fi Control Interface

 | (1) Tap the connected device
 | to enter control interface.

 | (3) Other smart devices
 | can be added
 | (2) The main controlling interface | (4) User information settings.

 | (5) Device details

 | (6) Desired water
 | temperature and
 | current inlet water
 | temperature

 | (7) Temperature
 | adjustment (for inlet
 | water)

 | (8) Power ON/OFF | (9) Mode option | (10) Timer settings

Share Device to Your Family Members
After connection, if you want to share the device with your family, please follow below steps:

 | (1) Tap this button

 | (2) Tap "Share Device"

 | (4 ). You can share a link to
 | others through various kinds of
 | APP (such as Wechat,
 | Whatsapp, Message,Email or
 | other methods.

 | (3) Tap Add Sharing

 | (6). Other users can click
 | the shared link to
 | download the Smart Life
 | (5). Take Wechat as | APP and get connected to
 | example: Other | your cooling unit.
 | users will receive a
 | link to download the
 | Smart Life APP
 | through the link
 | shared by Wechat.

Remark: The app is subject to updates without notice.

 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

===== DOCUMENT: KINOS MANUAL (English, ozone) =====
Installation, Operating and
Maintenance Manual

The serial number of your Kinos pool is
Table of Content
Installation, Operating and Maintenance Manual
Congratulations for your purchase of Kinos cold pool! 
IMPORTANT BASICS 
General safety instructions
Main external parts of Kinos pool 
Technical information
Transportation, installation, electrical connection
Detaching and attaching the panels 
 | Detaching the panels 
 | Attaching the panels 
Installing the stairs 
Start-up instructions 
Operating instructions 
 | Setting the water temperature 
 | Timer 
 | Entering and exiting the pool 
Display options 
 | Stop/start 
 | Temperature mode 
 | Set temperature 
 | Lock temp setting 
 | Sleep mode 
 | Time of day
General maintenance and quality of water 
Replacing the water 
Problems and solutions 
 | No flow-error 
 | Temp measure err (Hi) 
 | Blank screen 
Warranty 
 | 3 years 
 | Private use 2 years / commercial use 1 year 
 | Warranty does not cover: 
 | Original owner & country of sale 
 | Proof 
 | Right to repair or replace the product 
 | Seperate warranty on replaced components 
 | Response time & place of repair work 
EU DECLARATION OF CONFORMITY 
Congratulations for your purchase of Kinos cold pool!
Avant°pool Kinos is an easy-to-use and compact indoor cold pool, which gives you the benefits of winter
swimming all year round. It enables optimal and high- quality cold recovery, eases muscle pain and
inflammations, helps sleep and improves immune system. Avant°pool Kinos is made in Finland.
IMPORTANT BASICS
 • | NEVER LET KINOS TO RUN WITHOUT THE FILTER

 • | MAKE SURE THE ELECTRICITY SOCKET IS GROUNDED (230V / 50Hz/60Hz)

 • | LEAVE 10-15cm SPACE BETWEEN THE LONG SIDES OF THE POOL AND THE WALL TO ENSURE
 | SUFFICIENT VENTILATION

 • | DO NOT COVER THE VENTILATION GRILLS

 • | MAKE SURE THE WATER LEVEL IN THE POOL IS SUFFICIENT BEFORE TURNING ON THE POWER

 • | DO NOT USE SALT OR OTHER MINERALS IN THE POOL

 • | DO NOT USE SALT WATER IN THE POOL, ONLY FRESH TAP WATER

 • | CLEAN / FLUSH THE FILTER AT LEAST ONCE A WEEK

 • | CHANGE THE FILTER EVERY 2-6 MONTHS DEPENDING ON USE OF THE POOL

 • | CHANGE THE WATER EVERY 3-8 WEEKS DEPENDING ON THE USE OF THE POOL

 • | DO NOT OPEN THE ELECTRIC CABINET

 • | DO NOT USE THE KINOS POOL OUTDOORS WITHOUT A PROPER COVER, IT SHOULD BE
 | PROTECTED FROM RAIN AND SNOW AT ALL TIMES

 • | DO NOT USE SLEEP MODE, IF AMBIENT TEMPERATURE IS BELOW 4 o
General safety instructions
 | • | Before you start using the pool, read all instructions and follow them carefully.

 | • | Do not let children use the pool unless they are always closely supervised by adults. Do not leave the
 | pool without the cover if children have access to the room where it is stationed. Make sure the cover
 | is always on when the pool is not in use.

 | • | Persons with reduced physical or kinematic capabilities should not use the pool without sufficient
 | instructions and/or supervision.

 | • | Do not use the pool if the plug or supply cord is damaged. Order a new one from your dealer and
 | make sure it is properly installed before re-starting to use the pool.

 | • | Do not use the pool if the cover of the skimmer is damaged or not properly in place. If the cover of the
 | skimmer is damaged, order a new one from your dealer and make sure it is properly in place before re-
 | starting to use the pool.

 | • | Do not use any electrical devices while in the pool or while at immediate distance of the pool.

 | • | Check the water temperature always before entering the pool. The water temperature may not exceed
 | +40 °C or be less than +4 °C.

 | • | Persons with a history of heart disease, low or high blood pressure, circulatory system problems,
 | diabetes, or any condition requiring medical treatment should consult a physician or a doctor before
 | using the pool.

 | • | Persons using medication should consult a physician or a doctor before using the pool since some
 | medication may induce drowsiness while other medication may affect heart rate, blood pressure and
 | circulation.

 | • | Pregnant women should consult a physician or a doctor before using the pool.
 | Main external parts of Kinos pool
 | Cover
 | Touch screen

 | Rails

Stairs | Sidepanel

 | Corner plates

 | End panel

 | Technical information
 | • | Measurements, without stairs: Length 1200 mm, width 790 mm, height 1050 mm

 | • | Measurements, including stairs: Length 1200/1540 mm, width 790/1130 mm, height 1220 mm

 | • | Capacity: 300 l

 | • | Weight when filled: 450 kg

 | • | Weight when empty: 147 kgs, with the rails and the stairs

 | • | Water temperature range: Continuous variation between +4 °C - +38 °C

 | • | Cooling power: 0,7 kW

 | • | Heating power: 1,5 kW

 | • | Average energy consumption: When reached target water temperature approx. 5 kWh/day

 | • | Refrigerant: r134a

 | • | Control panel: Digital touch control panel with water temperature guided timer for cold recovery

 | • | Electric coupling: 230V/50Hz/60Hz, 1-phase. Plug equipped with residual-current device

 | • | Sound pressure level: 54 dB (A)

 | • | Degree of protection: IPX5
Transportation, installation, electrical connection
Kinos pool is packed in covering, durable and easily transportable carton container. It can be easily moved
with a pallet jack. There are inset handles at both ends of the pool to help manual moving. The package
container can be stored or re-used when needed.

The pool should be placed on even ground supportive to the legs in each four corners. We recommend the
pool to be placed in premises suitable for handling water, ideally with a tiled floor, floor drain and sufficient
ventilation. Adjustable feet enable placing the pool to premises with an inclined floor. When placed beside a
wall, make sure to leave at least a 10-15 cm gap between the wall and the pool to ensure sufficient ventilation.

There should be a grounded and preferably wall mounted power socket (240V/50Hz/60Hz) within

5 m range of the pool. Do not connect the plug to the power socket until the pool is filled completely with
water (15 cm below the edge of the pool).

Do not use the pool if the plug or supply cord is damaged. Order a new one from your dealer and make sure it
is properly installed before re-starting to use the pool.

Detaching and attaching the panels
The side and end panels may need to be detached before installing the rails and the stairs, and during
transportation, service and repair work. No tools are needed to detach or attach the panels. The panels are
locked in with the aluminum corner plates, which are attached to the pool body with their inner shape.

Detaching the panels
 | 1. | Take a grip from the low section of the corner plate and raise it up appr. 3 cm and then pull it towards
 | yourself (Fig. 1a, 1b and 1c).

 | 2. | Slide the corner plate downward and the upper part of it will be released from under the bowl´s collar.
 | Now you have detached the corner parts.

 | 3. | Repeat the same procedure for all four corner parts.

 | 4. | Now the panels can be easily detached by pulling them out slightly and sliding them down from under
 | the bowl´s collar.

Fig. 1a | Fig. 1b | Fig. 1c
Attaching the panels
 | 1. | Attach the panels back to fasteners (grooved side out). NOTE that the side panels have openings to
 | be placed in front of the machinery to ensure proper air circulation and avoid overheating of the
 | machinery.

 | 2. | Push the top of the corner plate approx. 4 cm under the basin collar.

 | 3. | Push then the low section of the corner plate towards the pool and push down until it stops.

 | 4. | Repeat the same for all corner plates.

Installing the stairs
Attach the stairs to the pool as follows:

 | 1. | The stairs can be placed to either of the long sides or to the front end of the pool. One of the rails can
 | be placed to the front end as well, should the stairs be placed on the long side.

 | 2. | Place the pins of the stairs (or rail) through the holes. If needed, fasten to the frame using the pipe
 | bushings and nuts.

 | 3. | Adjust the height of the stairs to correct level by screwing the pads.

Start-up instructions
 | • | Clean the pool from possible dirt and stains.

 | • | Fill the pool with water from the nearest faucet using a hose.

Note! Do not use salt or any other ingredients in the water which may harm the materials or cause blockage to
the machinery.

 | • | Water level should reach the horizontal joint of the pool basin (approx. 15 cm below the basin top), and
 | never be under the opening of the cover of the skimmer (Fig. 2a and 2b).
Fig. 2a | Fig. 2b

 | • | Do not connect the plug to the power socket until the pool is filled with water! Then connect the plug
 | to the power socket and push the green residual-current device button.

 | • | Set the existing time of the day with the arrows on the screen and press Save - or bypass time setting
 | by pressing Save

Fig. 3a | Fig. 3b

 | • | The touch screen and the water circulating turn on and the water starts circulating in the pool. You
 | should see bubbles coming out of the jet in the bottom of the pool. If this does not happen, stop and
 | restart the device. This may happen due to air locks in the pipes. Repeat if needed until the water
 | starts circulating and you can see the bubbles.

 | • | Stopping the device can be done by pressing shortly the upper left corner cogwheel and then Stop
 | (Fig. 4a and 4b). To restart, press Start.
Fig. 4a | Fig. 4b

 | • | In upper left corner of the touch screen, you can see the current temperature of the water and on the
 | right corner the target temperature. The default target is set to 10 °C. (Fig. 5)

Fig. 5

 | • | Now the Kinos cold pool is successfully turned on!

 | • | Note! There is approx. 7 min delay before the cooling starts.

Operating instructions
Setting the water temperature
On the left part of the touch screen you can see current water temperature.

You can portably set the water temperature between +4 °C - +38 °C. The desired target water temperature
can be seen on the right part of the touch screen. Set the target temperature by using the + and - buttons.

The water cools down and warms up approx. 3-4 °C per hour. It is recommended to keep the pool cover on
when the pool is not in use to save energy and to maintain the desired water temperature.

Timer
In bottom of the touch screen there is a bath timer for setting the immersion time and following the time spent
in the pool. Once the target water temperature is set, a recommended cold recovery time is proposed. The
white triangle shaped area suggests the minimum and maximum time for cold recovery time in that water
temperature. The suggested cold recovery times are directional only and are based on general
recommendations made by University of Jyväskylä faculty of Sports and Exercise Medicine. Set the timer by
using the + and - buttons.

The timer starts by pushing the Start button (triangle) and can be stopped and cleared by using Stop button
(square).

Entering and exiting the pool
In Kinos pool you can immerse partly or fully to the neck level. During entering and exiting the pool pay close
attention as the surfaces might be slippery from water. Use the stairs and lean on the rails while entering and
exiting the pool. Notice that you might feel temporary stiffness in limbs caused by the cold water, especially
after a longer immersion time.
Display options
Stop/start
In the upper left corner of the display, there is an Options button (cogwheel). By pressing it shortly, you can
stop and restart the unit.

Fig. 6a | Fig. 6b

Temperature mode
By pressing the cogwheel icon long, "Temperature mode" -menu will appear (Fig. 7). Options are: show only
Celsius or only Fahrenheit, or both. Desired choice is made by pressing the corresponded icon and then Save..

Fig 7
Set temperature
By pressing the cogwheel icon long and then < or > buttons, you can change the menu to

"Set temperature"-mode (Fig. 8), where you can set the desired target temperature after restart (e.g. after
power cut). System will propose the existing target temperature, but it can be changed by - and + buttons.
Save button will confirm the choice.

Fig. 8

Lock temp setting
By pressing the cogwheel icon long and then < or > buttons, you can change the menu to "Lock temp
setting"-mode (Fig. 9a), where you can hide temperature setting in the touch screen. Desired choice is made
by pressing the corresponded icon and then Save.

Fig. 9a
If you choose Lock and Save, then the + and - buttons in touch screen will disappear (Fig.9b). They can be
returned by choosing Unlock and Save.

Fig. 9b

Sleep mode
By pressing the cogwheel icon long and then < or > buttons, you can change the menu to "Sleep mode" (Fig.
10a). In sleep mode, device will automatically shut down and restart in set time. Start time = shutting down,
Stop time = restarting. Set the desired time, change Off-mode to On-mode by pressing it and then Save (Fig.
10b). Sleep mode time is restored in the memory of the device and will be repeated every day, until On/Off-
mode is changed to Off.

Note! Do not use sleep mode, if ambient temperature is below 4oC.

Fig. 10a | Fig. 10b
When device is in sleep mode, touch screen will show the remaining time (Fig. 11). Sleep mode can be
interrupted (that time) by pressing Cncl.

Fig. 11

Time of day
Precondition for Sleep mode to work properly is, that Time of the day is set. By pressing the cogwheel icon
long and then < or > buttons, you can change the menu to "Set time of day"-mode (Fig. 12). If necessary, set
the time and press Save.

Fig. 12
General maintenance and quality of water
Kinos- Maintenance of Kinos pool is easy. Automated and constant filtering accompanied with ozone cleaning
make sure the water stays clean and clear. Depending on the utilization frequency, occasional use of chlorine
might be needed to disinfect the water (especially in heavy public use). Should Kinos pool be in public use,
the requirements set by local authorities for the water quality must be obeyed.

On daily basis: Check the water level. It should ideally be approx. 15 cm from the basin top but not more than 8
cm below that. Too low water level may allow air in the pipes and cause breaking of the water pump. Also
check the approximate water quality on daily basis as well the water circulation (lots of bubbles out of the jet).

On weekly basis: Clean the possibly stained water line and the filter. The filter cartridge can be easily accessed
behind the cover of the skimmer. The cover is released by simply lifting it directly up (Fig. 13a). The cartridge is
released by turning it counterclockwise (to the left, Fig. 14a). Note that the power must be turned off (see
instructions on page 9, Stop/start) before releasing the filter cartridge! Make sure no objects enter the
skimmer. Flush the filter cartridge thoroughly under warm running water or shower (Fig. 15) (do not use
pressure washers as it may damage the filter material).

The filter cartridge should be replaced always, if after cleaning the filter, the water circulation is not at normal
level. Depending on the rate of usage, filter should be replaced every 2 to 6 months.

Check the water pH level which should be maintained on normative level (7,2 - 7,6). When needed you can
finetune the pH level by using pH+ or pH- chemicals. Should the pool be in heavy daily use it is recommended
to add half teaspoon of chlorine (natriumdiklorisocyanurat, dihydrat) to the water to reach the 0,3 - 1,2 ppm
free chlorine level.

If the number of the users exceeds 10 users/day, or if the water temperature exceed 15oC, it is recommended
to add chlorine (natriumdiklorisocyanurat, dihydrat) frequently to the water in order to maintain 0,3 - 1,2 ppm
free chlorine level.
.

Fig. 13a | Fig. 13b

Fig. 14a | Fig. 14b

Fig. 15

Replacing the water
Altaan The frequency for changing the water depends on various factors, e.g. use rate, water temperature,
maintenance etc., so there is no general rule for it. The water should latest be changed when the water is
visually unclear. If the pool is in heavy daily use, filtering and ozone cleaning or even the added chlorin might
not keep the water clean for a long period of time. The frequency for changing the water may vary from couple
of days to several months. However, we recommend changing the water at least every two months.

Before emptying the pool turn the power (see instructions on page 9, Stop/start). Empty the pool with a
submersible pump to the nearest floor drain or sink. You can alternatively use simple siphon method. Should
you not be able to fully empty the pool, use for example a wet vacuum cleaner or simply a bucket and cloth.
Clean the pool with mild washing agent and rinse properly. Do not use a pressure washer for cleaning the
pool!

The pool may be filled again after it has been emptied.

Note! Do not use salt or any other ingredients in the water which may harm the materials or cause blockage to
the machinery.

Problems and solutions
No flow-error
If the water is not circulating properly, the device will stop itself and an error message will appear (Fig. 16).
Check the water level and condition of the filter cartridge. Add more water if needed. Clean the filter cartridge
or replace it if needed. Should problem remain, please contact the retailer or manufacturer.

Fig. 16
Tip

If for any reason, dirt has entered the piping system, it may disrupt the water flow and cause No flow -error.
Take off the filter and flush piping system counterclockwise with fresh water through the pool´s inlet nozzle
(Fig. 17a and 17b).

Fig. 17a | Fig. 17b

Temp measure err (Hi)
Should the water temperature exceed 40 °C, the device will stop itself and an error message will appear. Add
cooler water to the pool to lower the temperature.
Blank screen
If the touch screen is blank and the pool machinery is not running, check the power supply and/or if the
residual-current device has activated. If the power supply is ok but the residual-current device has turned off
the power, push the green button to de-activate. Should the problem remain, unplug the device and contact
the retailer or manufacture
Warranty
3 years
These materials have a 3-year warranty, which applies to fractures and breaking without external influence or
other misuse of the device (see below limitations):

 | • | pool (basin), steel frame, rails, side panels

 | • | piping

Private use 2 years / commercial use 1 year
These parts and combinations (aggregate) have a limited 2-year warranty (private use) / limited 1-year
warranty (commercial use), which applies to breaking without misuse of the device (see limitations below).

 | • | Mechanical and electrical parts and components

 | o | cooling unit (aggregate) as a whole

 | • | components: pump, heat exchanger, condenser, compressor, heater, ozonator

 | • | touch screen control panel and control system

 | • | lid and stairs

Warranty does not cover:
 | • | Damage or defect caused by misuse of the device, wrong or inadequate electrical current or
 | connection, negligence, inappropriate on-site operating conditions, repairs by non-Avantopool
 | designated personnel, tampering, alterations or accidents in later transportations.

 | • | Flood or rainwater, insect infestation or unreasonable outdoor exposure

 | • | Damage caused due to the product not being reasonably installed, operated, maintained or used in
 | accordance with Avantopool's instructions and specifications (User Manual)

 | • | Damage caused by unauthorized alterations, accident, misuse, abuse, use of an incorrect voltage,
 | power surges, thunderstorm activity, tampering and unauthorized repairs, or exposure to abnormally
 | corrosive conditions

 | • | Damage caused by the use of chemicals or minerals in the pool water.

 | • | Damage caused by water or other liquids entering the electrical or electronics of the device through
 | negligence.

 | • | Damage caused by severely overheating the product due to negligence, such as covering the
 | product's ventilations grills with towels, clothing, or other objects, or operating the pool too close to a
 | wall or in a room/place with insufficient ventilation.

Following instructions stated in the User Manual is imperative. Follow the maintenance routines is utmost
important. Damage cause by neglecting the maintenance routines may void the warranty.

Original owner & country of sale
Warranty is available only to the original purchaser / owner purchased from Avantopool directly or from an
approved Avantopool reselling partner. This warranty is not transferable except with the written consent of
Avantopool. The warranty applies only in the country where the Kinos pool was purchased or delivered to the
original owner.
Proof
Proof of the purchase date, serial number and that the claimant is the original purchaser may be required.
Additionally, Avantopool reserves the right to request the return to Avantopool of any component replaced
under warranty, or alternatively, proof that the faulty component was actually disposed of or destroyed.

Right to repair or replace the product
Avantopool reserves the right to replace the product or relevant part of the product with the same or
equivalent product or part rather than repair it.

Seperate warranty on replaced components
Where defective parts are replaced with new parts, the new part will carry a separate warranty from the date
of replacement, however this does not restart the original standard warranty.

Response time & place of repair work
Avantopool undertakes to approve and provide repair work promptly, however we will not accept
responsibility for any costs whatsoever in regard to any repair work or transport costs that were not specifically
approved by Avantopool prior to any such work or transport taking place. At its discretion, Avantopool may
either repair the product at the premises of the owner of the product, or if the repair is beyond the scope of a
local distributor or repair agent, Avantopool may request that the product be shipped back to it's factory for a
more thorough and comprehensive examination and repair. Where Avantopool determines that the repair
needs to be carried out at it's factory, Avantopool will be responsible for the cost of land transport so long as
that transport is arranged by or approved by Avantopool. Avantopool will not be responsible for freight
services arranged without its consent.

This limited warranty gives you specific legal rights in addition to remedies provided by local laws and
regulations, which may vary from country to country.
EU DECLARATION OF CONFORMITY

Manufacturer:

Avantopool Oy

Finnoonlaaksontie 7

02270 Espoo

FINLAND

Declaires that this appliance set to the market:

Avantopool model: Kinos

compies with the requirements of Low Voltage Directive 2014/35/EU:

Household and similar electrical appliances - Safety - General requirements IEC 60335-1

Particular requirements for whirpool baths and whirpool spas IEC 60335-2-60

and EMC 2004/108/EY ewquirements:

EMC IEC 61000-3-3

EMC IEC 61000-3-2

Espoo 6 / 12 / 2022

___________________

Pekka Nurmi

COO
===== DOCUMENT: KINOS ONE-PAGER / PRODUCT CARD =====
Kinos - Implementation steps

The pool should be placed on even ground supportive to | Fill the water by using a hose. Optimal water level is
the legs in each four corners. Make sure to leave at least a | between the seamline and 5 cm below it.
10 cm gap (about the size of a fist) between the pool and
wall to ensure sufficient ventilation.

Once the pool is filled, plug it in and | Set the existing time of the day. | Set the target temperature (by using
turn on the power by pushing the | the + and - keys in the upper right
green button in the plug. | corner). In upper left corner of the
 | touch screen, you can see the current
 | temperature of the water and on the
 | right corner the target temperature.

Never let Kinos run without the filter.
Note that the power must be turned off before releasing the filter cartridge. Stopping the device can be done by pressing
shortly the upper left corner cogwheel and then Stop. To restart, press Start.

Implementation steps
 1. The pool should be placed on even ground supportive to the legs in each four
 | corners. Make sure to leave at least a 10 cm gap (about the size of a fist)
 | between the pool and wall to ensure sufficient ventilation.
 2. Fill the water by using a hose. Optimal water level is between the seamline
 | and 5 cm below it.
 3. Once the pool is filled, plug it in and turn on the power by pushing the green
 | button in the plug.
 4. Set the existing time of the day.
 5. Set the target temperature. In upper left corner of the touch screen, you can
 | see the current temperature of the water and on the right corner the target
 | temperature.
 6. Never let Kinos run without filter. Note that the power must be turned off
 | before releasing the filter cartridge.

Important
 | If the pool is placed outdoors it must be fully protected from weather (for
 | example on a glazed or covered terrace).
 | Never let Kinos to run without the filter.
 | Always take a shower before entering the pool.
 | Change the water every 1-3 months depending on the use of the pool.
 | Change the filter every 2-6 months depending on the use of the pool.
 | If the pool is in heavy daily use, it is necessary to add weekly a half teaspoon of
 | chlorine, see manual.
 | Every six months, remove the side panels and vacuum the condenser's metal
 | grate with a powerful vacuum cleaner, even if it looks clean.

===== DOCUMENT: KINOS PLUS MANUAL =====
| Installation, Operating and
 | Maintenance Manual

 | The serial number of your Kinos Plus
 | pool is
Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | Congratulations for your purchase of Kinos Plus
 | cold pool!

Avantopool Kinos Plus is an easy-to-use and compact indoor cold pool, which gives
 you the benefits of winter swimming all year round. It enables optimal and high-
 | quality cold recovery, eases muscle pain and inflammations, helps sleep and
 | improves immune system. Avantopool Kinos Plus is made in Finland.
Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

IMPORTANT BASICS:

 | • | NEVER RUN KINOS PLUS WITHOUT THE FILTER

 | • | MAKE SURE THE ELECTRICITY SOCKET IS GROUNDED (230V / 50Hz, in KSA 230V / 60Hz)

 | • | LEAVE 10-15cm SPACE BETWEEN THE LONG SIDES OF THE POOL AND THE WALL TO
 | ENSURE SUFFICIENT VENTILATION

 | • | DO NOT COVER THE VENTILATION GRILLS

 | • | MAKE SURE THE WATER LEVEL IN THE POOL IS SUFFICIENT BEFORE TURNING ON THE
 | POWER

 | • | DO NOT USE SALT OR OTHER MINERALS IN THE POOL

 | • | DO NOT USE SALT WATER IN THE POOL, ONLY FRESH TAP WATER

 | • | CLEAN / FLUSH THE FILTER AT LEAST ONCE A WEEK

 | • | TURN THE POWER OFF BEFORE DETACHING THE FILTER

 | • | CHANGE THE FILTER EVERY 2-6 MONTHS DEPENDING ON USE OF THE POOL

 | • | CHANGE THE WATER EVERY 3-8 WEEKS DEPENDING ON THE USE OF THE POOL

 | • | DO NOT OPEN THE ELECTRIC CABINET

 | • | DO NOT USE THE KINOS PLUS POOL OUTDOORS WITHOUT A PROPER COVER, IT
 | SHOULD BE PROTECTED FROM RAIN AND SNOW AT ALL TIMES

 | • | DO NOT USE SLEEP MODE, IF AMBIENT TEMPERATURE IS BELOW 4oC
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Table of contents
General safety instructions 

Main external parts of Kinos Plus pool 
 | Technical information 

Transportation, installation, electrical connection 
 | Detaching and attaching the panels 
 | Installing the stairs 

Start-up instructions 

Entering and exiting the pool 

Operating instructions 
 | Controller Interface
 | Operation Instruction of Controller 
 | Power and Screen Lock 
 | Modes (Cooling / Heating / Auto) 
 | Temperature Settings 
 | Time Setting 
 | Power ON/OFF Timer Setting ("Auto Mode") 
 | Error messages on Display 
 | Error Code List 

General maintenance and quality of water 

Replacing the water 

Replacing the UV-lamp 

Problems and solutions
 | No flow-error P01 
 | Temp measure error (E17 / E18) 
 | Device does not cool to set temperature 

Warranty 

EU DECLARATION OF CONFORMITY 
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

General safety instructions

 | • | Before you start using the pool, read all instructions and follow them
 | carefully.
 | • | Do not let children use the pool unless they are always closely supervised by
 | adults. Do not leave the pool without the cover if children have access to the
 | room where it is stationed. Make sure the cover is always on when the pool is
 | not in use.
 | • | Persons with reduced physical or kinematic capabilities should not use the
 | pool without sufficient instructions and/or supervision.
 | • | Do not use the pool if the plug or supply cord is damaged. Order a new one
 | from your dealer and make sure it is properly installed before re-starting to
 | use the pool.
 | • | Do not use the pool if the cover of the skimmer is damaged or not properly in
 | place. If the cover of the skimmer is damaged, order a new one from your
 | dealer and make sure it is properly in place before re-starting to use the pool.
 | • | Do not use any electrical devices while in the pool or while at immediate
 | distance of the pool.
 | • | Check the water temperature always before entering the pool. The water
 | temperature may not exceed +40 °C or be less than +4 °C.
 | • | Persons with a history of heart disease, low or high blood pressure, circulatory
 | system problems, diabetes, or any condition requiring medical treatment
 | should consult a physician or a doctor before using the pool.
 | • | Persons using medication should consult a physician or a doctor before using
 | the pool since some medication may induce drowsiness while other
 | medication may affect heart rate, blood pressure and circulation.
 | • | Pregnant women should consult a physician or a doctor before using the pool.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Main external parts of Kinos Plus pool

Technical information

 | • | Measurements, without stairs: Length 1400 mm, width 790 mm, height 1050 mm
 | • | Measurements, including stairs: Length 1400/1740 mm, width 790/1130 mm, height 1050 mm
 | • | Capacity: 320 l
 | • | Weight when filled: 480 kg
 | • | Weight when empty: 160 kgs, with the rails and the stairs
 | • | Water temperature range: Continuous variation between +4oC - +38oC
 | • | Cooling power consumption: 0,7 kW
 | • | Heating power consumption: 1,5 kW
 | • | Average energy consumption: When reached target water temperature approx. 5 kWh/day
 | • | Refrigerant: R290
 | • | Control panel: Digital touch control panel
 | • | Electric coupling: 230V/50Hz (/60Hz), 1-phase. Plug equipped with residual-current device
 | • | Sound pressure level: 54 dB (A)
 | • | Degree of protection: IPX5
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Transportation, installation, electrical connection
 | Kinos Plus pool is packed in covering, durable and easily transportable carton container. It can be
 | easily moved with a pallet jack. There are inset handles at both ends of the pool to help manual
 | moving. The package container can be stored or re-used when needed.

 | The pool should be placed on even ground supportive to the legs in each four corners. We
 | recommend the pool to be placed in premises suitable for handling water, ideally with a tiled floor,
 | floor drain and sufficient ventilation. Adjustable feet enable placing the pool to premises with an
 | inclined floor. When placed beside a wall, make sure to leave at least a 10-15 cm gap between the
 | wall and the pool to ensure sufficient ventilation.

 | There should be a grounded and preferably wall mounted power socket (240V/50Hz/60Hz) within
 | 5 m range of the pool. Do not connect the plug to the power socket until the pool is filled at least to
 | the minimum water level (see page 9).

 | Do not use the pool if the plug or supply cord is damaged. Order a new one from your dealer and
 | make sure it is properly installed before re-starting to use the pool.

Detaching and attaching the panels
 | The side and end panels may need to be detached before installing the rails and the stairs, and
 | during transportation, service and repair work. No tools are needed to detach or attach the panels.
 | The panels are locked in with aluminum corner plates, which are attached to the pool body with
 | their inner shape.

 | Detaching the panels
 | 1. Take a grip from the low section of the corner plate and raise it up appr. 3 cm and then
 | pull it towards yourself (Fig. 1a, 1b and 1c).
 | 2. Slide the corner plate downward and the upper part of it will be released from under the
 | bowl´s collar. Now you have detached the corner parts.
 | 3. Repeat the same procedure for all four corner parts.
 | 4. Now the panels can be easily detached by pulling them out slightly and sliding them
 | down from under the bowl´s collar.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | Fig. 1a | Fig. 1b | Fig. 1c

Attaching the panels
 | 1. Attach the panels back to fasteners (grooved side out). NOTE that the side panels have
 | grilles to be positioned in front of the machinery to ensure proper air circulation and avoid
 | overheating of the machinery.
 | 2. Push the top of the corner plate approx. 4 cm under the basin collar.
 | 3. Push then the low section of the corner plate towards the pool and push down until it
 | stops.
 | 4. Repeat the same for all corner plates.

Installing the stairs
Attach the stairs to the pool as follows:
 | 1. The stairs can be placed to either of the long sides or to the front end of the pool. One of
 | the rails can be placed to the front end as well, should the stairs be placed on the long
 | side.
 | 2. Place the pins of the stairs (or rail) through the holes. If needed, fasten to the frame
 | using the pipe bushings and nuts.
 | 3. Adjust the height of the stairs to correct level by screwing the pads.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Start-up instructions

 | • | Clean the pool from possible dirt and stains.
 | • | Fill the pool with water from the nearest faucet using a hose.
 | Note! Do not use salt or any other ingredients in the water which may harm the materials or cause
 | blockage to the machinery.
 | • | "Minimum water level" in the pool is marked on the skimmer cover (see Fig.2). Water level should
 | never be below that. Maximum water level in the pool is about 13 cm below the horizontal basin
 | top (see Fig. 2).

 | Fig. 2

 | • | Do not connect the plug to the power socket until the pool is filled with water! Then connect the
 | plug to the power socket and push the Reset button.

Entering and exiting the pool
 | In Kinos Plus pool you can immerse partly or fully to the neck level. While entering and exiting
 | the pool, pay close attention as the surfaces might be slippery from water. Use the stairs and
 | lean on the rails while entering and exiting the pool. Notice that you might feel temporary
 | stiffness in limbs caused by the cold water, especially after a longer immersion time
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Operating instructions
 | Controller Interface

 | Operation Instruction of Controller

 | Power and Screen Lock
 | To unlock, long press " | " 3 seconds until you hear a "beep" sound. The lock icon " | "
 | disappears. Short press the " | " key to turn the unit on or off. After 60 seconds without pressing

 | any button, the controller will be locked automatically. When locked, the lock icon " | " is
 | displayed.

 | Modes (Cooling / Heating / Auto)
 | When the unit is on, short press " | " key to select the operating modes. The circular selecting
 | sequence is Cooling → Heating → Auto → Cooling (continual loop).

 | NOTE: Auto mode → there is a delay in changing the cooling / heating direction.
 | The heating icon " | " will display when Heating mode is on.
 | The cooling icon " | " will display when Cooling mode is on.
 | When running in Auto mode, loop to icon " | ". It is recommended to always use Auto mode.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Temperature Settings
When the cooling unit is on, unlock the screen (see "Power and Screen Lock"). Press up " | " or

down " | " to adjust the temperature. No actions for 3 seconds will exit the display showing the
current water temperature.

Time Setting
1. Enter Time Setting: Long press the " | " key for 5 seconds until the digit in both "hour" and
 | "minute" parts flash.

2. Time Setting Method: On the time setting interface, short press " | ". Then the hour digit in

 | area will blink. Press " | " or " | " to adjust hour. Press " | " to switch to minute part and

 | repeat above actions. When setting is done, press " | " to save the setting and to exit to main
 | interface.

Power ON/OFF Timer Setting ("Auto Mode")
1. User can set up two ON/OFF "activate mode" timer periods. The set periods may not overlap.
2. Power ON/OFF Timer Setting Method

On main interface, short press " | " to enter power on/off timer setting. When "1" is blinking,

press " | " to enter the power ON hour part setting of "active mode" period 1. When the hour

part is blinking, press" | " or " | " to adjust the hour. Press " | " to confirm and to enter to the
minute part. Repeat the same actions to set the time when Active Mode is OFF.

When setting is done, long press " | " to confirm and save the current power ON/OFF timer

setting. Press " | " or " | " to enter setting of "Active Mode" period 2 and repeat above
actions. Valid timer group will be shown on the main interface with a corresponding number.
Short press " | " to go to main menu.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Error messages on Display
 When the fault occurs, the corresponding error code will appear. After the error is eliminated, the
 error code will disappear. To reset the error code, restart the unit.

Error Code List

 | Fault code | Description

 | E17 | Inlet water temperature fault

 | E18 | Outlet water temperature fault

 | P01 | Water flow fault

 | P15 | Inlet/outlet water excessive temperature protection

 | P16 | Overcooling protection

 | P17 | Standby anti-freeze protection

 | P23 | Outlet water low temperature protection under cooling mode

 | P26 | Outlet water high temperature protection under heating mode

 | P27 | Outside coil over high temperature protection under cooling mode
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

General maintenance and quality of water
 | Maintenance of Kinos Plus pool is easy. Automated and constant filtering accompanied
 | with UV cleaning make sure the water stays clean and clear. Depending on the
 | utilization frequency, occasional use of chlorine might be needed to disinfect the water
 | (especially in heavy public use). Should Kinos Plus pool be in public use, the requirements
 | set by local authorities for the water quality must be obeyed.

 | On daily basis: Check the water level. It should never be below the "minimum water
 | level" (Fig. 13). Too low water level may allow air in the pipes and cause breaking of
 | the water pump. Also check visually the water quality on daily basis as well the water
 | circulation.

 | On weekly basis: Clean the possibly stained water line and flush the filter. The filter
 | cartridge can be easily accessed behind the skimmer cover. The cover is released by
 | simply lifting it directly up (Fig. 13). The cartridge is detached by turning it
 | counterclockwise (to the left, Fig. 14). Note: turn off the pump before detaching the
 | filter cartridge!
 | Make sure no objects enter the skimmer. Flush the filter cartridge thoroughly under
 | warm running water or shower (Fig. 15) (do not use pressure washers as it may damage
 | the filter material).

 | The filter cartridge should be replaced always, if after cleaning the filter, the water
 | circulation is not at normal level. Depending on the rate of usage, filter should be
 | replaced every 2 to 6 months.

 | Check the water pH level which should be maintained on normative level (7,2 - 7,6).
 | When needed you can finetune the pH level by using pH+ or pH- chemicals. Should the
 | pool be in heavy daily use it is recommended to add half teaspoon of chlorine
 | (natriumdiklorisocyanurat, dihydrat) to the water to reach the 0,3 - 1,2 ppm free
 | chlorine level.

 | If the number of the users exceeds 10 users/day, or if the water temperature exceeds
 | 15oC, it is recommended to add chlorine (natriumdiklorisocyanurat, dihydrat) frequently
 | to the water in order to maintain 0,3 - 1,2 ppm free chlorine level
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Fig. 13 | Fig. 14

Fig. 15
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Replacing the water
 | The frequency of changing the water depends on various factors, e.g. use rate, water
 | temperature, maintenance etc., so there is no general rule for it. The water should be changed at
 | the latest when the water is visually unclear. If the pool is in heavy daily use, filtering and UV
 | cleaning or even the added chlorine might not keep the water clean for a long period of time.
 | The frequency of changing the water may vary from couple of days to several months. However,
 | we recommend changing the water at least every two months.

 | Before emptying the pool turn off the power (see instructions on page 10, Stop/start). Empty the
 | pool with a submersible pump to the nearest floor drain or sink. You can alternatively use simple
 | siphon method. Should you not be able to fully empty the pool, use for example a wet vacuum
 | cleaner or simply a bucket and cloth. Clean the pool with mild washing agent and rinse properly.
 | Do not use a pressure washer for cleaning the pool!

 | The pool may be filled again after it has been emptied.

 | Note! Do not use salt or any other mineral ingredients in the water which may harm the
 | materials or cause blockage to the machinery.

Replacing the UV-lamp
 | The frequency for changing the UV-lamp is one year. Power must be turned off and the pool
 | emptied of water before changing the UV-lamp. Detach the panels (see page 7) from the screen
 | side (short side) and from the right side of the pool (Fig. 16). Disconnect the UV-disinfector's plug
 | (Fig. 17). Open the clips securing the UV disinfector and slightly pull it out of the clips. Unscrew
 | the cover of the UV-disinfector and gently pull out the UV-lamp (Fig. 18). Using the cotton gloves
 | (Fig. 19) change the UV-lamp and gently put back to UV-disinfector. Connect back the plug as well
 | as panels and corner plates.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Fig. 16

Fig. 17

Fig. 18

Fig. 19
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Problems and solutions
 | No flow-error P01
 | If the water is not circulating properly, the device will stop itself and P01 error message will
 | appear. Check the water level and condition of the filter cartridge. Add more water if needed.
 | Clean the filter cartridge or replace it if needed. Should problem remain, please contact the
 | retailer or manufacturer.

 | Fig. 20

 | Tip!

 | If for any reason, dirt has entered the piping system, it may disrupt the water flow and cause No
 | flow -error. Take off the filter and flush piping system counterclockwise with fresh water through
 | the pool´s inlet nozzle (Fig. 21). Preferred hose diameter 12mm or 18mm (fitting in the outlet).

 | Fig. 21

 | Temp measure error (P26 / P23)
 | Should the water temperature exceed 40oC or fall below 4oC, the device will stop itself and an
 | error message will appear. Add cooler or warmer water to the pool to adjust the temperature.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Device does not cool to set temperature

If the pool struggles to achieve the set temperature even though compressor is running, then
check the condition of the condenser. Remove the side panels and vacuum the condenser's metal
grate with a powerful vacuum cleaner, even if it looks clean (Fig. 22).

Fig. 22
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Warranty
 | 3 years

 | These materials have a 3-year warranty, which applies to fractures and breaking
 | without external influence or other misuse of the device (see below limitations):
 | • pool (basin), frame, rails
 | • | piping
 | Private use 2 years / commercial use 1 year

 | These parts and combinations (aggregate) have a limited 2-year warranty (private use) / limited
 | 1-year warranty (commercial use), which applies to breaking without misuse of the device (see
 | limitations below).

 | • | Mechanical and electrical parts and components

 | o | cooling unit (aggregate) as a whole

 | • | components: pump, heat exchanger, condenser, compressor

 | • | touch screen control panel and control system

 | • | lid, panels and stairs

 | • | NOTE: UV lamp warranty period is 6 months both in private and commercial use

 | Warranty does not cover:

 | • | Damage or defect caused by misuse of the device, wrong or inadequate electrical current or
 | connection, negligence, inappropriate on-site operating conditions, repairs by non-Avantopool
 | designated personnel, tampering, alterations or accidents in later transportations.

 | • | Flood or rainwater, insect infestation or unreasonable outdoor exposure

 | • | Damage caused due to the product not being reasonably installed, operated, maintained or
 | used in accordance with Avantopool's instructions and specifications (User Manual)

 | • | Damage caused by unauthorized alterations, accident, misuse, abuse, use of incorrect voltage,
 | power surges, thunderstorm activity, tampering and unauthorized repairs, or exposure to
 | abnormally corrosive conditions

 | • | Damage caused by the use of chemicals or minerals in the pool water.

 | • | Damage caused by water or other liquids entering the electrical or electronics of the device
 | through negligence.

 | • | Damage caused by severely overheating the product due to negligence, such as covering the
 | product's ventilations grills with towels, clothing, or other objects, or operating the pool too
 | close to a wall or in a room/place with insufficient ventilation.

 | Following instructions stated in the User Manual is imperative. Follow the maintenance routines is
 | utmost important. Damage cause by neglecting the maintenance routines may void the warranty.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Original owner & country of sale

Warranty is available only to the original purchaser / owner, purchased from Avantopool directly or from
an approved Avantopool reselling partner in corresponding market. This warranty is not transferable
except with the written consent of Avantopool. The warranty applies only in the country where the Kinos
Plus pool was purchased or delivered to the original owner. When pool is sold by the reseller outside its
home country, the reseller is solely responsible for all the warranty related issues.

Proof

Proof of the purchase date, serial number and that the claimant is the original purchaser may be
required. Additionally, Avantopool reserves the right to request the return to Avantopool of any
component replaced under warranty, or alternatively, proof that the faulty component was actually
disposed of or destroyed.

Right to repair or replace the product

Avantopool reserves the right to replace the product or relevant part of the product with the same or
equivalent product or part rather than repair it.

Separate warranty on replaced components

Where defective parts are replaced with new parts, the new part will carry a separate warranty from the
date of replacement, however this does not restart the original standard warranty.

Response time & place of repair work

Avantopool undertakes to approve and provide repair work promptly, however we will not accept
responsibility for any costs whatsoever in regard to any repair work or transport costs that were not
specifically approved by Avantopool prior to any such work or transport taking place. At its discretion,
Avantopool may either repair the product at the premises of the owner of the product, or if the repair is
beyond the scope of a local distributor or repair agent, Avantopool may request that the product be
shipped back to it's factory for a more thorough and comprehensive examination and repair. Where
Avantopool determines that the repair needs to be carried out at it's factory, Avantopool will be
responsible for the cost of land transport so long as that transport is arranged by or approved by
Avantopool. Avantopool will not be responsible for freight services arranged without its consent.

This limited warranty gives you specific legal rights in addition to remedies provided by local laws and
regulations, which may vary from country to country.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

EU DECLARATION OF CONFORMITY

Manufacturer:

Avantopool Oy

Finnoonlaaksontie 7

02270 Espoo

FINLAND

Declares that this appliance set to the market:

Avantopool model: Kinos Plus

compies with the requirements of Low Voltage Directive 2014/35/EU:

Household and similar electrical appliances - Safety - General requirements IEC 60335-1

Particular requirements for whirpool baths and whirpool spas IEC 60335-2-60

and EMC 2004/108/EY requirements:

EMC IEC 61000-3-3

EMC IEC 61000-3-2

Espoo 6 / 12 / 2022

___________________

Pekka Nurmi

COO
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

===== DOCUMENT: KINOS PLUS ONE-PAGER / PRODUCT CARD =====
Implementation steps

 | 13 cm

 | r level | Max
 | Max wate

 | l
 | ter leve
 | Min
 | Min wa

The pool should be placed on even ground supportive to | The minimum level of the water must be above the
the legs in each four corners. Make sure to leave at least a | minimum lever sticker of the filter cover. The maximum level
10 cm gap (about the size of a fist) between the pool and | is about 13 cm below pools top level.
wall to ensure sufficient ventilation.

Once the pool is filled, plug it in and | Set the existing time of the day. | Set the target temperature (by using
turn on the power by pushing the | the + and - keys in the upper right
green button in the plug. | corner). In upper left corner of the
 | touch screen, you can see the current
 | temperature of the water and on the
 | right corner the target temperature.

Never let Kinos Plus run without the filter.
Note that the power must be turned off before releasing the filter cartridge. Stopping the device can be done by pressing
shortly the upper left corner cogwheel and then Stop. To restart, press Start.

Implementation steps
 1. The pool should be placed on even ground supportive to the legs in each four
 | corners. Make sure to leave at least a 10 cm gap (about the size of a fist).
 | between the pool and wall to ensure sufficient ventilation.
 2. Fill the pool by using a hose. The minimum level of the water must be above
 | the minimum lever sticker of the filter cover. The maximum level is about 13 cm
 | below pools top level.
 3. Once the pool is filled, plug it in and turn on the power by pushing the green
 | button in the plug.
 4. Set the existing time of the day.
 5. Set the target temperature. In upper left corner of the touch screen, you can
 | see the current temperature of the water and on the right corner the target
 | temperature.
 6. Never let Kinos Plus run without filter. Note that the power must be turned off
 | before releasing the filter cartridge.

Important
 | If the pool is placed outdoors it must be fully protected from weather (for
 | example on a glazed or covered terrace).
 | Never let Kinos Plus to run without the filter.
 | Always take a shower before entering the pool.
 | Change the water every 1-3 months depending on the use of the pool.
 | Change the filter every 2-6 months depending on the use of the pool.
 | If the pool is in heavy daily use, it is necessary to add weekly a half teaspoon of
 | chlorine, see manual.
 | Every six months, remove the side panels and vacuum the condenser's metal
 | grate with a powerful vacuum cleaner, even if it looks clean.

===== DOCUMENT: KINOS PROBLEMS & SOLUTIONS =====
Kinos
Basic problems an solutions

To make things easier, check the below guidelines before
contacting Avantopool

A. Check below the most common solutions
B. If you need to contact us: please provide the serial number of the pool
C. Send picture/video of the problem

Screen

If the timer on the screen freezes or the screen does not work properly,
turn off the power for a while and try again.

Contact Avantopool in these cases:
 | If the screen is completely white
 | If the screen has white streaks or cracks
 | If the screen only works partially when touched

2. Cooling difficulties
If the device doesn't cool down and the temperature is stuck between
11-15 degrees and the compressor runs continuously, the most common
reason is the lack proper ventilation.

Follow these steps:
 | Move the pool 20cm away from the wall
 | Remove the side panels and vacuum the heat exchanger's metal
 | grate with a powerful vacuum cleaner, even if it looks clean
 | Check that there is sufficient ventilation in the room

3. "No bubbles"

Check first the position of the hose on the top of the ozonator. It is
located in the opposite corner of the screen. It should be bent as shown
below.

Correct | Not correct

If the hose is in correct position and there are still no bubbles, do the
following:

 | Empty the pool and remove the filter
 | Use the house water hose to pressure water from the lower nozzle in
 | the opposite direction (counter-clock wise)
 | Then the dirt starts coming out of the filter housing
 | Hold the hose in the nozzle for about 5-10 sec and remove it for a
 | while to get pumping effect. This is more comfortable to do with
 | warm water and more effective if the hose fits inside the nozzle
 | Repeat this until no more dirt comes out of the filter housing

4. No flow error

One reason for this to happen is that the filter is cleaned/changed while
pool is ON and dirt gets into the system. Always turn the power off before
removing the filter.

Do the same steps as in the "no bubbles" section.

5. The fuse is tripped

Make sure that the 16A power plug of the pool cable works correctly. If
the plug works correctly and the fuse still trips, try these measures:

 | When the pool starts up, adjust the temperature immediately to heat
 | the pool at least 3 degrees higher than the current water
 | temperature
 | If the pool stays on and the temperature starts to rise, then the fuse
 | is ok.
 | To continue testing, adjust the pool temperature at least 3 degrees
 | colder than the current water temperature. You can clearly hear
 | when the compressor starts up within 1-7 min from adjusting the
 | cooling.
 | If the fuse trips again after cooling starts, please contact Avantopool.

===== DOCUMENT: KUURA MANUAL =====
| Installation, Operating and
 | Maintenance Manual

 | The serial number of your Kuura pool
 | is:
Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | Congratulations for your purchase of Kuura
 | cold pool!

 | Avantopool Kuura is an easy-to-use and compact indoor cold pool, which gives
 | you the benefits of winter swimming all year round. It enables optimal and high-
 | quality cold recovery, eases muscle pain and inflammations, helps sleep and
 | improves immune system. Avantopool Kuura product is designed and
 | manufactured in Finland / European Union.
Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

IMPORTANT BASICS:

 | • | NEVER RUN KUURA WITHOUT THE FILTER

 | • | MAKE SURE THE ELECTRICITY SOCKET IS GROUNDED (230V / 50Hz)

 | • | LEAVE MIN 15cm SPACE BETWEEN EITHER OF THE LONG SIDES AND THE WALL AND
 | MIN 15CM BETWEEN THE FRONT OF THE POOL (headrest side) AND THE WALL TO
 | ENSURE SUFFICIENT VENTILATION

 | • | DO NOT COVER THE VENTILATION GRILLS

 | • | MAKE SURE THE WATER LEVEL IN THE POOL IS SUFFICIENT BEFORE TURNING ON THE
 | POWER

 | • | DO NOT USE SALT OR OTHER MINERALS IN THE POOL

 | • | DO NOT USE SALT WATER IN THE POOL, ONLY FRESH TAP WATER

 | • | CLEAN / FLUSH THE FILTER AT LEAST ONCE A WEEK

 | • | TURN THE POWER OFF BEFORE REMOVING THE FILTER

 | • | CHANGE THE FILTER EVERY 2-12 WEEKS DEPENDING ON THE USE OF THE POOL

 | • | CHANGE THE WATER EVERY 1-6 WEEKS DEPENDING ON THE USE OF THE POOL

 | • | DO NOT OPEN THE ELECTRIC CABINET

 | • | DO NOT USE THE KUURA POOL OUTDOORS WITHOUT A PROPER COVER, IT SHOULD BE
 | PROTECTED FROM RAIN AND SNOW AT ALL TIMES

 | • | DO NOT USE SLEEP MODE, IF AMBIENT TEMPERATURE IS BELOW 4oC.

 | IF POOL IS EMPTIED FROM WATER AND AMBIENT TEMPERATURE IS BELOW 0oC, REMEMBER TO
 | PROPERLY EMPTY THE PIPES AND MACHINE FROM WATER. ICING WILL DAMAGE THE DEVICE.

 | IMPORTANT: WHEN LIFTING/ CARRYING THE PRODUCT, REMOVE THE END PANELS AND TAKE
 | THE GRIP FROM THE PRODUCT WOODEN FRAME INSTEAD OF THE SIDES OF THE BASIN
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Table of contents
General safety instructions 

Main external parts of Kuura pool

Technical information 

Transportation, installation, electrical connection 
 | Detaching and attaching the panels 

Start-up instructions 

Entering and exiting the pool 

Operating instructions 
 | Controller Interface 
 | Operation Instruction of Controller 
 | Power and Screen Lock 
 | Modes (Cooling / Heating / Auto) 
 | Temperature Settings 
 | Time Setting 
 | Power ON/OFF Timer Setting ("Auto Mode") 
 | Error messages on Display 
 | Error Code List 

General maintenance 
 | Water level control
 | Checking and flushing of filters 
 | Changing filter cartridge 
 | Replacing the water 
 | Replacing the UV-lamp 

Problems and solutions 
 | No flow-error P01
 | Temp measure error (P26 / P23) 
 | Device does not cool to set temperature 

Warranty 

EU DECLARATION OF CONFORMITY 
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

General safety instructions

 | • | Before you start using the pool, read all instructions and follow them
 | carefully.
 | • | Do not let children use the pool unless they are always closely supervised by
 | adults. Do not leave the pool without the cover if children have access to the
 | room where it is stationed. Make sure the cover is always on when the pool is
 | not in use.
 | • | Do not use the pool if the plug or supply cord is damaged. Order a new one
 | from your dealer and make sure it is properly installed before re-starting to
 | use the pool.
 | • | Do not have the pool running if the filter is not properly attached
 | • | Do not use any electrical devices while in the pool or while at immediate
 | distance of the pool.
 | • | Check the water temperature always before entering the pool. The water
 | temperature may not exceed +40 °C or be less than +4 °C.
 | • | Persons with a history of heart disease, low or high blood pressure, circulatory
 | system problems, diabetes, or any condition requiring medical treatment
 | should consult a physician or a doctor before using the pool.
 | • | Persons with reduced physical or kinematic capabilities should not use the pool
 | without sufficient instructions and/or supervision.

 | • | Persons using medication should consult a physician or a doctor before using
 | the pool since some medication may induce drowsiness while other
 | medication may affect heart rate, blood pressure and circulation.
 | • | Pregnant women should consult a physician or a doctor before using the pool.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Main external parts of Kuura pool

 | Touch screen
 | Skimmer
 | Headrest

 | BACK panel
 | FRONT panel

 | Ventilation grill | SIDE panel

Technical information
 | • | Measurements: Length 1800 mm, width 790 mm, height 780 mm
 | • | Capacity (optimal water level): 320 L
 | • | Weight when filled: 430 kg
 | • | Weight when empty: 110 kg
 | • | Water temperature range: adjustable between +4oC - +40oC
 | • | Cooling / heating speed: 6-7˚C/hour
 | • | Average energy consumption: approx. 2- 5 kWh/day
 | • | Refrigerant: R32
 | • | Display: Digital touch screen with WIFI
 | • | Electric coupling: 230V/50Hz, 1-phase. Plug equipped with residual-current device
 | • | Noise level: 46 dB (A)
 | • | Hygiene: Water filtration and continuous UV purification
 | • | Outdoor use: Only when fully weather protected, ambient temperature range -7oC - +40oC
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Transportation, installation, electrical connection
 | Kuura pool is packed in covering, durable and easily transportable carton container. It can be moved
 | with a pallet jack. The package container can be stored or re-used when needed. When the product
 | is unpacked and the pool needs to be lifted/moved, remove the end panels of the product and take
 | the grip from the wooden frame instead of the sides of the basin!

 | The pool should be placed on an even ground. We recommend the pool is placed in premises
 | suitable for handling water, ideally with a tiled floor, floor drain and sufficient ventilation. When
 | placed beside a wall, make sure to leave at least a 15 cm gap between the front side and a long side
 | of the pool and wall to ensure sufficient ventilation.

 | There should be a grounded and preferably wall mounted power socket (230V/50Hz) within
 | 4 m range of the pool. Do not connect the plug to the power socket until the pool is filled at least to
 | the minimum water level (see page 9).

 | Do not use the pool if the plug or supply cord is damaged. Order a new one from your dealer and
 | make sure it is properly installed before re-starting to use the pool.

Detaching and attaching the panels
 | The side and end panels may need to be detached during transportation, service and repair work, or
 | when moving the product. No tools are needed to detach or attach the panels. The panels are
 | attached to the pool body on aluminum holders.

 | Detaching the panels
 | 1. Take a grip from the sides of the back or front panel and raise it up appr. 2 cm and
 | then pull it towards yourself (Fig. 1a and 1b).
 | 2. Slide the panel downward and the upper part of it will be released from under the
 | basin's collar. Now you have detached the front / back panel.
 | 3. Repeat the same for the other front / back panel. After this you may detach side panel(s)
 | in the same way if necessary.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | Fig. 1a | Fig. 1b

Attaching the panels
 | 1. Attach the panels side panels first and then back and front panels. NOTE that the side
 | panels and front panel have ventilation grilles to be positioned in front of the
 | machinery to ensure proper air circulation and avoid overheating of the machinery.
 | 2. Push the top of the panel plate approx. 2 cm under the basin collar (fig 1b).
 | 3. Push then the low section of the panel towards the pool and move the panel down
 | until it holds.
 | 4. Repeat the same for all side panels and then front and back panels.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Start-up instructions

 | • | Clean the pool from possible dirt and stains.
 | • | Fill the pool with water from the nearest faucet using a hose.
 | Note! Do not use salt or any other ingredients in the water which may harm the materials or cause
 | blockage to the machinery.
 | • | The minimum water level in the pool is just above the bottom of the skimmer cover (see Fig.2).
 | Water level should never be below that. Maximum water level of the pool is just below the top line
 | of the skimmer cover grills. (Fig. 2).

 | MAX

 | MIN

 | Fig. 2 Water level guidance

 | • | Do not connect the plug to the power socket until the pool is filled with water! After the pool is
 | filled connect the plug to the power socket and push the Reset button.

Entering and exiting the pool
 | In Kuura pool you can immerse fully to the neck level. While entering and exiting the pool, pay
 | close attention as the surfaces might be slippery from water. Notice that you might feel
 | temporary stiffness in limbs caused by the cold water, especially after a longer immersion time
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Operating instructions
 | Controller Interface

 | Operation Instruction of Controller

 | Power and Screen Lock
 | To unlock, long press " | " 3 seconds until you hear a "beep" sound. The lock icon " | "
 | disappears. Short press the " | " key to turn the unit on or off. After 60 seconds without pressing

 | any button, the controller will be locked automatically. When locked, the lock icon " | " is
 | displayed.

 | Modes (Cooling / Heating / Auto)
 | When the unit is on, short press " | " key to select the operating modes. The circular selecting
 | sequence is Cooling → Heating → Auto → Cooling (continual loop).

 | NOTE: Auto mode → there is a delay in changing the cooling / heating direction.
 | The heating icon " | " will display when Heating mode is on.
 | The cooling icon " | " will display when Cooling mode is on.
 | When running in Auto mode, loop to icon " | ". It is recommended to always use Auto mode.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Temperature Settings
When the cooling unit is on, unlock the screen (see "Power and Screen Lock"). Press up " | " or

down " | " to adjust the target temperature. No actions for 3 seconds will exit the display showing
the current water temperature.

Time Setting
1. Enter Time Setting: Long press the " | " key for 5 seconds until the digit in both "hour" and
 | "minute" parts flash.

2. Time Setting Method: On the time setting interface, short press " | ". Then the hour digit in

 | area will blink. Press " | " or " | " to adjust hour. Press " | " to switch to minute part and

 | repeat above actions. When setting is done, press " | " to save the setting and to exit to main
 | interface.

Power ON/OFF Timer Setting ("Auto Mode")
1. User can set up two ON/OFF "active mode" timer periods. The set periods may not overlap.
2. Power ON/OFF Timer Setting Method

On main interface, short press " | " to enter power on/off timer setting. When "1" is blinking,

press " | " to enter the power ON hour part setting of "active mode" period 1. When the hour

part is blinking, press" | " or " | " to adjust the hour. Press " | " to confirm and to enter to the
minute part. Repeat the same actions to set the time when Active Mode is OFF.

When setting is done, long press " | " to confirm and save the current power ON/OFF timer

setting. Press " | " or " | " to enter setting of "Active Mode" period 2 and repeat above
actions. Valid timer group will be shown on the main interface with a corresponding number.
Short press " | " to go to main menu.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Error messages on Display
 When the fault occurs, the corresponding error code will appear. After the error is eliminated, the
 error code will disappear. To reset the error code, restart the unit.

Error Code List

 | Fault code | Description

 | E17 | Inlet water temperature fault

 | E18 | Outlet water temperature fault

 | P01 | Water flow fault

 | P15 | Inlet/outlet water excessive temperature protection

 | P16 | Overcooling protection

 | P17 | Standby anti-freeze protection

 | P23 | Outlet water low temperature protection under cooling mode

 | P26 | Outlet water high temperature protection under heating mode

 | P27 | Outside coil over high temperature protection under cooling mode
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

General maintenance
 | Maintenance of the Kuura pool is easy. Automated and constant filtering accompanied
 | by UV cleaning will make sure the water stays clean and clear.

 | Even though the system is automated, there are important maintenance tasks to
 | perform to ensure that the product remains fully operational and the water clean. The
 | frequency of the activities needed depends directly on the rate of pool usage.

 | Water level control
 | Check that water level is above the "minimum water level" (Fig. 2). Too low water level
 | may allow air in the pipes and cause breaking of the water pump. Also check visually
 | the water quality on daily basis as well as the water circulation.

 | Checking and flushing of filters
 | The product includes skimmer and a filtration system. The coarse filter and the filter
 | cartridge can be accessed behind the skimmer cover. The cover is released by pulling it
 | (Fig. 3). Then open the hatch (Fig. 4) and remove coarse filter (Fig 5). After that remove
 | the fitting plate (Fig. 6) to access and remove filter cartridge (Fig. 7). Note: turn off the
 | pump before detaching the filter parts and make sure no objects enter the open
 | skimmer. Flush the coarse filter and filter cartridge thoroughly under warm running
 | water or shower (Fig. 8) (do not use pressure washers as it may damage the filter
 | cartridge material). After cleaning / changing the filter, attach the filtration system parts
 | back in reverse order: I.e. first insert filter cartridge (Fig. 7), insert fitting plate (Fig. 6),
 | insert coarse filter (Fig. 5), close the hatch (Fig. 4) and attach the skimmer cover by
 | pushing it firmly back to its place (Fig. 3).

 | Changing filter cartridge
 | The filter cartridge should be replaced always, if after cleaning the filter the water
 | circulation is not at normal level. You may order new filter cartridges from your
 | reseller or www.avantopool.com

 | Replacing the water
 | Before emptying the pool turn off the power (see instructions on page 10,
 | Stop/start). Empty the pool with a submersible pump to the nearest floor drain or
 | sink. You can alternatively use simple siphon method. Should you not be able to
 | fully empty the pool, use for example a wet vacuum cleaner or simply a bucket and
 | cloth. Clean the pool with mild washing agent and rinse properly. Do not use a
 | pressure washer for cleaning the pool! The pool may be filled again after it has
 | been emptied.
 | Note! Do not use salt or any other mineral ingredients in the water which may
 | harm the materials or cause blockage to the machinery.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | The water should be changed at the latest when the water is visually unclear.

 | Here are some guidelines on water change and other maintenance routine activities
 | and their recommended frequency:
 | a) private use (1-5 users per day)
 | • check water level daily
 | • check and flush filters every week
 | • change water monthly
 | • change filter cartridge every 3 months

 | b) sports club or limited commercial use ( ~10 users per day)
 | • check water level daily
 | • check and flush filters 2-3 times a week
 | • change water every second week
 | • change filter cartridge monthly

 | c) active commercial use (20-40 users per day):
 | • check water level daily
 | • check and flush filters daily
 | • change water 1-2 times per week
 | • change filter cartridge every second week

 | If the number of the users exceeds 10 users/day, or if the product is used as a warm/hot pool,
 | it is recommended to add a half tea spoon of granular chlorine into the pool when changing
 | the pool water.

Fig 3. Remove/attach skimmer cover | Fig. 4. Open/close hatch
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Fig. 5. Remove/attach coarse filter | Fig. 6. Remove/attach fitting plate

Fig. 7. Remove/attach filter cartridge | Fig. 8. Flush the filter cartridge
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

 | Replacing the UV-lamp

 | The frequency for changing the UV-lamp is one year. Power must be turned off and the pool
 | emptied of water before changing the UV-lamp. Detach the back panel (see page 7). You can find
 | the UV-disinfector behind the panel on the left (Fig. 9). Pull the black UV-disinfector casing from
 | the clips. Unscrew the cover of the UV-disinfector and gently pull out the UV-lamp (Fig.10 and
 | 11.). Change the UV-lamp (Fig. 12) and gently put the new lamp back to the UV-disinfector.
 | Connect the plug as well as place the disinfector back to its clips. Attach the back panel.

Fig. 9. UV-disinfector location | Fig. 10. Unscrew disinfector cover

Fig. 11. Pull out/fit in UV-lamp | Fig. 12. Change UV-lamp
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Problems and solutions
 | No flow-error P01
 | If the water is not circulating properly, the device will stop itself and P01 error message will
 | appear (Fig 13). Check the water level and condition of the filter cartridge. Add more water if
 | needed. Clean the filter cartridge or replace it if needed. Should the problem remain, please
 | contact the retailer or manufacturer.

 | Fig. 13. No flow error displayed

 | Temp measure error (P26 / P23)
 | Should the water temperature exceed 40oC or fall below 4oC, the device will stop itself and an
 | error message will appear. Add cooler or warmer water to the pool to adjust the temperature,
 | and check and flush the filter system (see page 13)

 | Device does not cool to set temperature

 | If the pool struggles to achieve the set temperature even though compressor is running, then
 | check the condition of the condenser unit. Remove the back and a side panel and vacuum the
 | condenser's blue grate with a vacuum cleaner (see Fig. 14).

 | Fig. 14. Vacuum grate
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Warranty
 | 3 years

 | These materials have a 3-year warranty, which applies to fractures and breaking without
 | external influence or other misuse of the device (see below limitations):
 | • | pool (basin), frame, rails
 | • | piping

 | Private use 2 years / commercial use 1 year

 | These parts and combinations (aggregate) have a limited 2-year warranty (private use) / limited
 | 1-year warranty (commercial use), which applies to breaking without misuse of the device (see
 | limitations below).
 | • | Mechanical and electrical parts and components
 | o | cooling unit (aggregate) as a whole
 | • | components: pump, heat exchanger, condenser, compressor
 | • | touch screen control panel and control system
 | • | lid, panels
 | • | NOTE: UV lamp warranty period is 6 months both in private and commercial use

 | Warranty does not cover:

 | • | Damage or defect caused by misuse of the device, wrong or inadequate electrical current or
 | connection, negligence, inappropriate on-site operating conditions, repairs by non-Avantopool
 | designated personnel, tampering, alterations or accidents in later transportations.
 | • | Flood or rainwater, insect infestation or unreasonable outdoor exposure
 | • | Damage caused due to the product not being reasonably installed, operated, maintained or
 | used in accordance with Avantopool's instructions and specifications (User Manual)
 | • | Damage caused by unauthorized alterations, accident, misuse, abuse, use of incorrect voltage,
 | power surges, thunderstorm activity, tampering and unauthorized repairs, or exposure to
 | abnormally corrosive conditions
 | • | Damage caused by the use of chemicals or minerals in the pool water.
 | • | Damage caused by water or other liquids entering the electrical or electronics of the device
 | through negligence.
 | • | Damage caused by severely overheating the product due to negligence, such as covering the
 | product's ventilations grills with towels, clothing, or other objects, or operating the pool too
 | close to a wall or in a room/place with insufficient ventilation.
 | • | Damage caused by freezing when the product is left in OFF-mode in ambient temperature
 | below 4 oC and all water is not properly vacuumed from the piping system.
 | Following instructions stated in the User Manual is imperative. Following the maintenance routine is
 | utmost important. Damage caused by neglecting the maintenance routines may void the warranty.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

Original owner & country of sale

Warranty is available only to the original purchaser / owner, purchased from Avantopool directly or from
an approved Avantopool reselling partner in corresponding market. This warranty is not transferable
except with the written consent of Avantopool. The warranty applies only in the country where the
Kuura pool was purchased or delivered to the original owner. When pool is sold by the reseller outside
its home country, the reseller is solely responsible for all the warranty related issues.

Proof

Proof of the purchase date, serial number and that the claimant is the original purchaser may be
required. Additionally, Avantopool reserves the right to request the return to Avantopool of any
component replaced under warranty, or alternatively, proof that the faulty component was disposed or
destroyed.

Right to repair or replace the product

Avantopool reserves the right to replace the product or relevant part of the product with the same or
equivalent product or part rather than repair it.

Separate warranty on replaced components

Where defective parts are replaced with new parts, the new part will carry a separate warranty from the
date of replacement, however this does not restart the original standard warranty.

Response time & place of repair work

Avantopool undertakes to approve and provide repair work promptly, however we will not accept
responsibility for any costs whatsoever in regard to any repair work or transport costs that were not
specifically approved by Avantopool prior to any such work or transport taking place. At its discretion,
Avantopool may either repair the product at the premises of the owner of the product, or if the repair is
beyond the scope of a local distributor or repair agent, Avantopool may request that the product be
shipped back to its factory for a more thorough and comprehensive examination and repair. Where
Avantopool determines that the repair needs to be carried out at its factory, Avantopool will be
responsible for the cost of land transport so long as that transport is arranged by or approved by
Avantopool. Avantopool will not be responsible for freight services arranged without its consent.

This limited warranty gives you specific legal rights in addition to remedies provided by local laws and
regulations, which may vary from country to country.
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com

EU DECLARATION OF CONFORMITY

Manufacturer:

Avantopool Oy

Finnoonlaaksontie 7

02270 Espoo

FINLAND

Declares that this appliance set to the market:

Avantopool model: Kuura

complies with the requirements of Low Voltage Directive 2014/35/EU:

Household and similar electrical appliances - Safety - General requirements IEC 60335-1

Particular requirements for whirpool baths and whirpool spas IEC 60335-2-60

and EMC 2004/108/EY requirements:

EMC IEC 61000-3-3

EMC IEC 61000-3-2

Espoo 1 / 4 / 2026

___________________

Pekka Nurmi

COO
 | Avantopool Oy, Finnoonlaaksontie 7, FI-02270 Espoo, Finland, www.avantopool.com`;
