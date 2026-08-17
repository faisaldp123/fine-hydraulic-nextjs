export type Category = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  intro: string;
  icon:
    | "transmission"
    | "engine"
    | "excavator"
    | "grader"
    | "roller"
    | "dozer"
    | "wiring"
    | "hydraulicPump"
    | "hydraulicMotor"
    | "trackMotor"
    | "swingDevice"
    | "catSpares"
    | "breaker"
    | "bucket"
    | "crane"
    | "filter"
    | "loader";
  images?: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  keywords: string[];
};

export const siteConfig = {
  name: "Fine Hydraulic",
  legalName: "Fine Hydraulic",
  domain: "finehydraulic.com",
  url: "https://www.finehydraulic.com",
  description:
    "Fine Hydraulic supplies rebuilt and genuine-spec transmissions, engines, hydraulic pumps and motors, undercarriage components, and CAT spares for excavators, graders, rollers and dozers — backed by testing and warranty.",
  shortDescription:
    "Genuine-spec hydraulic & heavy-equipment components: engines, pumps, motors, undercarriage parts and CAT spares.",
  phone: "+91 84478 11407",
  email: "info@finehydraulic.com",
  whatsapp: "+91 84478 11407",
  address: "New Delhi, Delhi, India",
  hours: "Mon – Sat, 9:30 AM – 7:00 PM IST",
  founded: "2005",
  social: {
    facebook: "https://facebook.com/finehydraulic",
    instagram: "https://instagram.com/finehydraulic",
    linkedin: "https://linkedin.com/company/finehydraulic",
    youtube: "https://youtube.com/@finehydraulic",
  },
};

export const categories: Category[] = [
  {
    slug: "transmission",
    name: "Transmission",
    shortName: "Transmission",
    tagline: "Power transfer units, rebuilt to factory tolerance",
    description:
      "Heavy-equipment transmissions — torque converters, power-shift and planetary units — inspected, rebuilt and dyno-tested before dispatch.",
    intro:
      "Our transmission division reconditions torque converters, power-shift gearboxes and planetary final units for excavators, wheel loaders and dozers. Every core is stripped, crack-checked, rebuilt with new clutch packs and seals, and run on our test stand before it leaves the shop.",
    icon: "transmission",
    specs: [
      { label: "Types", value: "Power-shift, torque-converter, planetary" },
      { label: "Compatibility", value: "CAT, Komatsu, Hitachi, Volvo, Hyundai" },
      { label: "Testing", value: "Dyno-tested under load" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavators", "Wheel loaders", "Dozers", "Graders"],
    keywords: ["transmission rebuild", "torque converter", "power shift gearbox", "final drive"],
  },
  {
    slug: "engine",
    name: "Engine",
    shortName: "Engine",
    tagline: "Reconditioned diesel engines & long blocks",
    description:
      "Reconditioned diesel engines, long blocks and short blocks for excavators, dozers, graders and rollers, rebuilt to OEM clearances.",
    intro:
      "We recondition diesel engines and long/short blocks across the CAT, Cummins, Komatsu and Isuzu range used in earthmoving equipment. Cylinder heads are pressure-tested, crankshafts ground to spec, and every engine is run-tested for oil pressure, compression and smoke before it ships.",
    icon: "engine",
    images: ["/images/engine/one.jpeg", "/images/engine/two.jpeg", "/images/engine/three.jpeg", "/images/engine/four.jpeg"],
    specs: [
      { label: "Configurations", value: "Long block, short block, complete unit" },
      { label: "Brands", value: "CAT, Cummins, Komatsu, Isuzu, Kubota" },
      { label: "Testing", value: "Compression & oil-pressure verified" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavators", "Dozers", "Graders", "Rollers", "Generators"],
    keywords: ["diesel engine rebuild", "long block", "short block", "excavator engine"],
  },
  {
    slug: "excavator",
    name: "Excavator",
    shortName: "Excavator",
    tagline: "Excavator spares & major components",
    description:
      "A complete range of excavator components — booms, arms, pins & bushings, hydraulic cylinders and control valves — for every major make.",
    intro:
      "From undercarriage to boom pins, we stock and rebuild the parts that keep excavators cutting cycle times. That includes hydraulic cylinders, main control valves, swing bearings, travel motors and structural pins & bushings for 5-tonne to 50-tonne class machines.",
    icon: "excavator",
    images: ["/images/excavator/one.jpeg", "/images/excavator/two.jpeg", "/images/excavator/three.jpeg"],
    specs: [
      { label: "Machine class", value: "5T – 50T excavators" },
      { label: "Components", value: "Cylinders, control valves, pins & bushings" },
      { label: "Brands", value: "CAT, Komatsu, Hitachi, Kobelco, JCB" },
      { label: "Warranty", value: "3–6 months, part-dependent" },
    ],
    applications: ["Mining", "Construction", "Demolition", "Quarrying"],
    keywords: ["excavator parts", "excavator cylinder", "control valve", "excavator spares"],
  },
  {
    slug: "grader",
    name: "Grader",
    shortName: "Grader",
    tagline: "Motor grader components & steering assemblies",
    description:
      "Motor grader circle drives, blade lift cylinders, steering assemblies and drawbar components rebuilt for tight tolerance grading work.",
    intro:
      "Motor graders live or die on the precision of the circle drive and blade-control hydraulics. We rebuild circle drive motors, lift and tip cylinders, and articulation/steering assemblies to keep blade tolerance where your grading spec needs it.",
    icon: "grader",
    images: ["/images/grader/one.jpeg", "/images/grader/two.jpeg"],
    specs: [
      { label: "Components", value: "Circle drive, lift cylinders, drawbar" },
      { label: "Brands", value: "CAT, Komatsu, Volvo, XCMG" },
      { label: "Testing", value: "Pressure & leak-down tested" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Road construction", "Site grading", "Airfields", "Mine haul roads"],
    keywords: ["motor grader parts", "circle drive", "grader cylinder", "blade lift"],
  },
  {
    slug: "roller",
    name: "Roller",
    shortName: "Roller",
    tagline: "Vibratory compaction & drum drive components",
    description:
      "Vibratory rollers' drum drive motors, exciter assemblies and propel pumps — rebuilt and balanced for consistent compaction output.",
    intro:
      "Compaction quality depends on a clean vibratory signal. We rebuild exciter assemblies, drum drive motors and propel/vibratory pumps for single and tandem-drum rollers, balancing eccentric weights to restore factory amplitude and frequency.",
    icon: "roller",
    images: ["/images/roller/one.jpeg", "/images/roller/two.jpeg"],
    specs: [
      { label: "Roller types", value: "Single drum, tandem, pneumatic-tyre" },
      { label: "Components", value: "Exciter units, drum motors, propel pumps" },
      { label: "Brands", value: "CAT, Bomag, Dynapac, Sakai" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Road compaction", "Soil compaction", "Landfill", "Asphalt work"],
    keywords: ["vibratory roller parts", "exciter assembly", "drum motor", "compactor pump"],
  },
  {
    slug: "dozer",
    name: "Dozer",
    shortName: "Dozer",
    tagline: "Track-type tractor drivetrain & blade components",
    description:
      "Dozer final drives, steering clutches, track frames and blade-tilt cylinders reconditioned for high-load pushing duty.",
    intro:
      "Track-type dozers put enormous cyclic load through the final drive and steering clutch packs. We recondition final drives, torque converters, and blade lift/tilt cylinders, and supply matched undercarriage sets for machines from 80 HP up to mining-class dozers.",
    icon: "dozer",
    images: ["/images/dozer/one.jpeg", "/images/dozer/two.jpeg"],
    specs: [
      { label: "Components", value: "Final drives, steering clutch, blade cylinders" },
      { label: "Brands", value: "CAT, Komatsu, Shantui, Liebherr" },
      { label: "Testing", value: "Load-tested on stand" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Land clearing", "Mining", "Earthmoving", "Ripping"],
    keywords: ["dozer parts", "final drive", "steering clutch", "bulldozer blade cylinder"],
  },
  {
    slug: "wiring-electrical-components",
    name: "Wiring & Electrical Components",
    shortName: "Wiring & Electrical",
    tagline: "Harnesses, sensors, ECMs and control modules",
    description:
      "Wiring harnesses, sensors, controllers and switches for heavy equipment electrical systems — tested for continuity before dispatch.",
    intro:
      "Modern earthmoving machines are as electrical as they are mechanical. We supply and repair wiring harnesses, pressure and speed sensors, ECM/controller units, solenoids and cab switches, every harness continuity-checked pin by pin.",
    icon: "wiring",
    images: ["/images/electric/one.jpeg", "/images/electric/two.jpeg", "/images/electric/three.jpeg"],
    specs: [
      { label: "Components", value: "Harnesses, sensors, ECMs, solenoids" },
      { label: "Testing", value: "Pin-to-pin continuity checked" },
      { label: "Brands", value: "CAT, Komatsu, Hitachi, Volvo" },
      { label: "Warranty", value: "3 months" },
    ],
    applications: ["Cab electricals", "Engine controls", "Hydraulic solenoids", "Sensors"],
    keywords: ["wiring harness", "excavator sensor", "ECM controller", "heavy equipment electrical"],
  },
  {
    slug: "hydraulic-pump",
    name: "Hydraulic Pump",
    shortName: "Hydraulic Pump",
    tagline: "Piston, gear & vane pumps, bench-tested",
    description:
      "Axial-piston, gear and vane hydraulic pumps rebuilt with genuine-spec kits and bench-tested for flow and pressure before dispatch.",
    intro:
      "The pump is the heart of the hydraulic circuit. We rebuild axial-piston main pumps, gear pumps and vane pumps with genuine-spec kits, resurfacing swash plates and valve plates, then bench-test each unit for flow, pressure and internal leakage against OEM figures.",
    icon: "hydraulicPump",
    images: ["/images/hydraulic-pump/one.jpeg", "/images/hydraulic-pump/two.jpeg", "/images/hydraulic-pump/three.jpeg"],
    specs: [
      { label: "Types", value: "Axial piston, gear, vane" },
      { label: "Testing", value: "Flow & pressure bench-tested" },
      { label: "Brands", value: "Kawasaki, Rexroth, Kayaba, CAT" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavator main pumps", "Grader hydraulics", "Crane circuits", "Industrial hydraulics"],
    keywords: ["hydraulic pump repair", "axial piston pump", "main pump rebuild", "gear pump"],
  },
  {
    slug: "hydraulic-motor",
    name: "Hydraulic Motor",
    shortName: "Hydraulic Motor",
    tagline: "Travel, swing & fan motors, rebuilt to spec",
    description:
      "Travel, swing and fan hydraulic motors reconditioned with new cylinder blocks, valve plates and seals, tested under load.",
    intro:
      "We recondition travel, swing and cooling-fan hydraulic motors, replacing cylinder blocks, pistons, valve plates and shaft seals as a matched set. Every motor is run under load on our test bench to confirm output torque and check for internal bypass before it's approved for dispatch.",
    icon: "hydraulicMotor",
    images: ["/images/hydraulic-motor/one.jpeg", "/images/hydraulic-motor/two.jpeg"],
    specs: [
      { label: "Types", value: "Travel, swing, fan motors" },
      { label: "Testing", value: "Load-tested for torque & bypass" },
      { label: "Brands", value: "Nabtesco, Kawasaki, Rexroth, CAT" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavator travel", "Swing circuits", "Cooling fan drives", "Crane slew"],
    keywords: ["hydraulic motor repair", "travel motor", "swing motor rebuild", "fan motor"],
  },
  {
    slug: "track-motors",
    name: "Track Motors",
    shortName: "Track Motors",
    tagline: "Final drive & travel motor assemblies",
    description:
      "Complete track/travel motor assemblies with integrated final drive, reconditioned and brake-tested for undercarriage duty.",
    intro:
      "Track motors combine a hydraulic travel motor with a planetary final drive in one sealed housing. We strip, inspect and rebuild both halves as a unit — new bearings, seals and friction discs for the parking brake — then bench-test for holding brake pressure and travel speed.",
    icon: "trackMotor",
    images: ["/images/track-motor/one.jpeg", "/images/track-motor/two.jpeg", "/images/track-motor/three.jpeg"],
    specs: [
      { label: "Assembly", value: "Travel motor + planetary final drive" },
      { label: "Testing", value: "Brake-hold & travel-speed tested" },
      { label: "Brands", value: "CAT, Komatsu, Hitachi, Doosan" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavator undercarriage", "Crawler cranes", "Track loaders"],
    keywords: ["track motor", "travel motor final drive", "undercarriage motor", "final drive assembly"],
  },
  {
    slug: "breakers", name: "Hydraulic Breakers", shortName: "Breakers", tagline: "Hydraulic rock breakers and demolition attachments",
    description: "Hydraulic breakers, hammers and demolition attachments for excavators, supplied with dependable service support.",
    intro: "We supply hydraulic rock breakers and demolition hammers for excavators across common operating weights. Our team can help match the breaker, tool and hose configuration to your machine and working conditions.",
    icon: "breaker", images: ["/images/breakers/one.jpeg", "/images/breakers/two.jpeg"],
    specs: [{ label: "Type", value: "Hydraulic rock breaker / hammer" }, { label: "Fitment", value: "Excavator-mounted" }, { label: "Support", value: "Tool and hose matching available" }, { label: "Use", value: "Rock breaking and demolition" }],
    applications: ["Demolition", "Quarrying", "Road work", "Site clearance"], keywords: ["hydraulic breaker", "excavator hammer", "rock breaker", "demolition attachment"],
  },
  {
    slug: "buckets", name: "Excavator Buckets", shortName: "Buckets", tagline: "Excavator buckets and heavy-duty digging attachments",
    description: "Excavator buckets and digging attachments for earthmoving, trenching, quarry and construction work.",
    intro: "Our bucket range covers general-purpose, trenching and heavy-duty excavation applications. We can help identify the correct capacity, pin size and attachment configuration for your excavator.",
    icon: "bucket", images: ["/images/bucket/one.jpeg", "/images/bucket/two.jpeg", "/images/bucket/three.jpeg"],
    specs: [{ label: "Types", value: "General-purpose, trenching, heavy-duty" }, { label: "Fitment", value: "Excavator pin-on attachments" }, { label: "Applications", value: "Digging, loading, trenching" }, { label: "Support", value: "Machine matching available" }],
    applications: ["Earthmoving", "Trenching", "Quarrying", "Construction"], keywords: ["excavator bucket", "digging bucket", "trenching bucket", "excavator attachment"],
  },
  {
    slug: "cranes", name: "Cranes", shortName: "Cranes", tagline: "Crane components and hydraulic equipment support",
    description: "Crane components and hydraulic equipment support for lifting, construction and material-handling applications.",
    intro: "We support crane hydraulic and mechanical component requirements, helping customers source dependable parts for lifting and material-handling equipment.",
    icon: "crane", images: ["/images/crane/one.jpeg", "/images/crane/two.jpeg", "/images/crane/three.jpeg"],
    specs: [{ label: "Coverage", value: "Hydraulic and mechanical components" }, { label: "Equipment", value: "Mobile and crawler cranes" }, { label: "Applications", value: "Lifting and material handling" }, { label: "Support", value: "Part identification assistance" }],
    applications: ["Construction lifting", "Material handling", "Infrastructure", "Industrial sites"], keywords: ["crane parts", "crane hydraulic components", "crawler crane parts", "mobile crane components"],
  },
  {
    slug: "filters", name: "Filters", shortName: "Filters", tagline: "Hydraulic, engine and fuel filtration components",
    description: "Hydraulic, engine, fuel and air filters for dependable heavy-equipment maintenance.",
    intro: "We supply essential filtration components to protect hydraulic circuits and engines from contamination. Share your machine or part number and our team can help match the correct filter.",
    icon: "filter", images: ["/images/filter/one.jpeg"],
    specs: [{ label: "Types", value: "Hydraulic, engine, fuel and air" }, { label: "Use", value: "Routine maintenance and protection" }, { label: "Fitment", value: "Heavy equipment applications" }, { label: "Support", value: "Part-number matching available" }],
    applications: ["Hydraulic systems", "Diesel engines", "Fuel systems", "Preventive maintenance"], keywords: ["hydraulic filter", "excavator filter", "engine filter", "heavy equipment filters"],
  },
  {
    slug: "loaders", name: "Loaders", shortName: "Loaders", tagline: "Wheel loader parts and hydraulic components",
    description: "Wheel loader components and hydraulic parts for construction, quarry and material-handling operations.",
    intro: "We help keep wheel loaders productive with hydraulic, drivetrain and attachment-related component support for demanding loading applications.",
    icon: "loader", images: ["/images/loader/one.jpeg", "/images/loader/two.jpeg"],
    specs: [{ label: "Coverage", value: "Hydraulic, drivetrain and attachment parts" }, { label: "Equipment", value: "Wheel loaders" }, { label: "Applications", value: "Loading and material handling" }, { label: "Support", value: "Part identification assistance" }],
    applications: ["Quarry loading", "Construction", "Material handling", "Stockpiling"], keywords: ["wheel loader parts", "loader hydraulic parts", "loader components", "construction loader parts"],
  },
  {
    slug: "swing-device",
    name: "Swing Device",
    shortName: "Swing Device",
    tagline: "Swing motor + reduction gear assemblies",
    description:
      "Swing device assemblies — swing motor, reduction gearbox and parking brake — rebuilt and tested for smooth, precise slewing.",
    intro:
      "The swing device controls how smoothly an excavator's upper structure slews. We rebuild the swing motor, planetary reduction gearbox and multi-disc parking brake as a matched assembly, replacing bearings and seals, and bench-test slew speed and brake release pressure.",
    icon: "swingDevice",
    specs: [
      { label: "Assembly", value: "Swing motor + reduction gearbox + brake" },
      { label: "Testing", value: "Slew speed & brake release tested" },
      { label: "Brands", value: "CAT, Komatsu, Hitachi, Kobelco" },
      { label: "Warranty", value: "6 months / 1000 hrs" },
    ],
    applications: ["Excavator slew ring drive", "Crawler cranes", "Material handlers"],
    keywords: ["swing device", "slew reduction gearbox", "swing motor assembly", "excavator swing gear"],
  },
  {
    slug: "cat-spares",
    name: "Cat Spares",
    shortName: "Cat Spares",
    tagline: "Caterpillar aftermarket & genuine-spec parts",
    description:
      "A wide inventory of aftermarket and genuine-spec Caterpillar parts — filters, seal kits, undercarriage, engine and hydraulic components.",
    intro:
      "Our Cat Spares division stocks fast-moving aftermarket and genuine-spec Caterpillar parts across engine, hydraulic, undercarriage and electrical systems, so common wear items are available off the shelf instead of on back-order.",
    icon: "catSpares",
    specs: [
      { label: "Coverage", value: "Engine, hydraulic, undercarriage, electrical" },
      { label: "Sourcing", value: "Genuine-spec & premium aftermarket" },
      { label: "Machine range", value: "CAT excavators, dozers, graders, loaders" },
      { label: "Warranty", value: "As per part category" },
    ],
    applications: ["CAT excavators", "CAT dozers", "CAT graders", "CAT wheel loaders"],
    keywords: ["cat spares", "caterpillar parts", "cat aftermarket parts", "cat undercarriage parts"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
