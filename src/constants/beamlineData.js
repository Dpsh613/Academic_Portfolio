export const beamlineData = [
  {
    id: 1,
    facility: "ISIS Neutron and Muon Source (STFC)",
    acronym: "STFC",
    location: "United Kingdom",
    logo: "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971244/ISIS_logo_v7wwas.png",
    bgImg:
      "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971296/ISIS_topview_lzt3sv.png",
    link: "https://www.isis.stfc.ac.uk/",
    desc: "A world-leading pulsed neutron and muon spallation source operated by STFC. It provides high-intensity microscopic probes essential for determining local magnetic environments, mapping magnetic excitations, and investigating structural distortions and complex phase transitions at the atomic scale",
    instruments: [
      {
        name: "MuSR",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971339/ISIS_MuSR_xqwvkr.png",
        link: "https://www.isis.stfc.ac.uk/instruments/musr/",
        desc: "The MuSR spectrometer is used for muon spin relaxation, rotation, and resonance experiments.",
        proposals: [
          {
            id: "2220325",
            awarded: "2 days",
            desc: "Investigation of superconductivity in thiospinel compound CuCo2S4 using muon spin relaxation and rotation.",
          },
        ],
      },
      {
        name: "EMU",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971365/ISIS_EMU_ff98tb.png",
        link: "https://www.isis.stfc.ac.uk/instruments/emu/",
        desc: "A versatile $\mu$SR spectrometer optimized for zero-field and longitudinal-field measurements, ideal for exploring magnetism and spin fluctuation.",
        proposals: [
          {
            id: "2310347",
            awarded: "4 days",
            desc: "Exploring the contribution of spin fluctuations in the formation of quantum spin liquid like state in KLnSe2 (Ln = Ce and Pr)",
          },
        ],
      },
      {
        name: "MERLIN",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971335/ISIS_MERLIN_lws7fk.png",
        link: "https://www.isis.stfc.ac.uk/instruments/merlin/",
        desc: "High-resolution, high-flux direct geometry time-of-flight chopper spectrometer.",
        proposals: [
          {
            id: "2610315",
            awarded: "1 day",
            desc: "Probing Magnetic excitation and Crystal Field States in the Quasi-2D Honeycomb layered oxide Na3Cu2SbO6.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    facility: "Paul Scherrer Institute (PSI)",
    acronym: "PSI",
    location: "Switzerland",
    logo: "https://res.cloudinary.com/dsbslj3nb/image/upload/q_auto/f_auto/v1775462609/images_onjjkb.png",
    bgImg:
      "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971671/PSI_overview_k3javp.jpg",
    link: "https://www.psi.ch/en",
    desc: "Switzerland's premier research center, home to the world's most intense continuous muon source (SμS). Its high-intensity continuous beams provide an ultra-sensitive local probe, essential for mapping complex magnetic ground states, quantum spin liquids, and superconducting properties at the microscopic scale.",
    instruments: [
      {
        name: "GPS",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971723/PSI_GPS_gn1j6y.png",
        link: "https://www.psi.ch/en/smus/gps",
        desc: "A General Purpose Surface-Muon Spectrometer tailored for standard ZF, LF, and TF measurements without complex sample environments.",
        proposals: [
          {
            id: "20221271",
            awarded: "1 day",
            desc: "Investigation of the quantum disordered magnetic ground state in RbCeO2 by muon.",
          },
          {
            id: "20221274",
            awarded: "1 day",
            desc: "Study of spin fluctuating states in honeycomb layered oxide Cu3M2SbO6 (M = Co and Ni) using muon spin relaxation.",
          },
        ],
      },
      {
        name: "GPD",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971730/PSI_GPD_ysmrsl.png",
        link: "https://www.psi.ch/en/smus/gpd",
        desc: "A General Purpose Decay-Channel Spectrometer optimized for experiments requiring special sample environments, such as high-pressure cells.",
        proposals: [
          {
            id: "20211455",
            awarded: "2 days",
            desc: "Search for Kitaev Spin Liquid in 3d Transition Metal Oxide.",
          },
          {
            id: "20221276",
            awarded: "5 days",
            desc: "Investigation of superconducting dome on four-layer-type bismuth chalcogenides : LaOPbBiS3 and La2O2Bi3AgS6 by muon.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    facility: "Deutsches Elektronen-Synchrotron (DESY)",
    acronym: "DESY",
    location: "Germany",
    logo: "https://res.cloudinary.com/dsbslj3nb/image/upload/q_auto/f_auto/v1774970012/DESY_logo_smiisc.png",
    bgImg:
      "https://res.cloudinary.com/dsbslj3nb/image/upload/q_auto/f_auto/v1774970053/DESY_overview_yw60la.jpg",
    link: "https://desy.de/",
    desc: "One of the world's leading accelerator centers, operating the high-brilliance PETRA III synchrotron. Its ultra-bright X-ray beams are crucial for high-resolution structural determination and probing subtle temperature-dependent structural disorders in quantum materials.",
    instruments: [
      {
        name: "PETRA III - P24",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/q_auto/f_auto/v1774971080/DESY_Petra-III_P24_2_bmsa0j.jpg",
        link: "https://photon-science.desy.de/facilities/petra_iii/beamlines/p24_chemical_crystallography/index_eng.html",
        desc: "P24 Chemical Crystallography beamline optimized for high-resolution single-crystal and powder X-ray diffraction, enabling precise structural analysis under varied sample environments.",
        proposals: [
          {
            id: "20220829",
            awarded: "3 days",
            desc: "Understanding the role of structural disorder at ambient pressure to th observed QSL like state in AYbSe2 (A=RbandCs): A temperature dependen X-ray study",
          },
          {
            id: "20220336",
            awarded: "2 days",
            desc: "Understanding the role of structure in the observed quantum spin liquid like state in KLnSe2 (Ln = La, Ce, Pr, and Nd).",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    facility: "Japan Proton Accelerator Research Complex",
    acronym: "JPARC",
    location: "Japan",
    logo: "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971448/JPARC_logo_nmbtqj.png",
    bgImg:
      "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971501/JPARC_overview_ji52bl.jpg",
    link: "https://j-parc.jp/c/en/index.html",
    desc: "Japan's state-of-the-art high-intensity proton accelerator complex. Its Materials and Life Science Experimental Facility (MLF) delivers intense pulsed muon beams, offering a powerful microscopic probe to investigate delicate spin dynamics and magnetic phase transitions in strongly correlated electron systems.",
    instruments: [
      {
        name: "Muon D1",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971528/JPARC_Muon_D1_mtrhw6.jpg",
        link: "https://mlfinfo.jp/en/d1/",
        desc: "D1 Surface Muon Beamline, a versatile instrument highly effective for precise ZF and LF-$\mu$SR measurements of quantum magnets.",
        proposals: [
          {
            id: "2022B",
            awarded: "2 days",
            desc: "Investigation of the magnetic ground state in Bilayer Square Lattice Tb2SrAl2O7 having magnetic frustration. ",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    facility: "Raja Ramanna Centre for Advanced Technology",
    acronym: "RRCAT",
    location: "India",
    logo: "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774971957/RRCAT_logo_lipbmg.png",
    bgImg:
      "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774972149/RRCAT_overview_xofyhz.jpg",
    link: "https://www.rrcat.gov.in/",
    desc: "India's state-of-the-art synchrotron facility, operating the Indus-1 and Indus-2 storage rings. It provides an essential suite of X-ray diffraction and absorption spectroscopy beamlines for the comprehensive structural and electronic characterization of novel materials.",
    instruments: [
      {
        name: "INDUS-II, BL09",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774972200/RRCAT_BL09_alrqfq.png",
        link: "https://www.rrcat.gov.in/technology/accel/srul/beamlines/exafsscan.html",
        desc: "Scanning EXAFS beamline dedicated to high-precision X-ray absorption fine structure studies, ideal for resolving local atomic environments and oxidation states.",
        proposals: [
          {
            id: "6025",
            awarded: "2 days",
            desc: "Investigating the oxidation state of Cu and its local environment in Na3Cu2SbO6.",
          },
        ],
      },
      {
        name: "INDUS-I, BL02",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774972201/RRCAT_Indus-I_spwt6f.jpg",
        link: "https://www.rrcat.gov.in/technology/accel/srul/indus1beamline/aipes.html",
        desc: "Angle Integrated Photoelectron Spectroscopy (AIPES) beamline tailored for probing the valence band and averaged electronic structure of solid-state materials.",
        proposals: [
          {
            id: "5525",
            awarded: "7 days",
            desc: "Study of averaged electronic structure of Na3Cu2SbO6. ",
          },
        ],
      },
      {
        name: "INDUS-II, BL12",
        instImg:
          "https://res.cloudinary.com/dsbslj3nb/image/upload/v1774972196/RRCAT_BL12_xasoab.png",
        link: "https://www.rrcat.gov.in/technology/accel/srul/beamlines/adxrd.html",
        desc: "Angle Dispersive X-ray Diffraction (ADXRD) beamline optimized for identifying structural phase transitions and crystallographic distortions.",
        proposals: [
          {
            id: "5524",
            awarded: "2 days",
            desc: "Investigation of structural change/distortion prior to the AFM order in Na3Co2SbO6.",
          },
          {
            id: "5383",
            awarded: "2 days",
            desc: "Investigation of structural phase transition in Na3Cu2SbO6.",
          },
        ],
      },
    ],
  },
];
