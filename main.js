var arr = [1,"H"," Hydrogen"," 1.00794",
2,"He"," Helium"," 4.002602",
3,"Li"," Lithium"," 6.941",
4,"Be"," Beryllium"," 9.012182",
5,"B"," Boron"," 10.811",
6,"C"," Carbon"," 12.0107",
7,"N"," Nitrogen"," 14.0067",
8,"O"," Oxygen"," 15.9994",
9,"F"," Fluorine"," 18.9984032",
10,"Ne"," Neon"," 20.1797",
11,"Na"," Sodium"," 22.98976928",
12,"Mg"," Magnesium"," 24.3050",
13,"Al"," Aluminum or Aluminium"," 26.9815386",
14,"Si"," Silicon"," 28.0855",
15,"P"," Phosphorus"," 30.973762",
16,"S"," Sulfur"," 32.065",
17,"Cl"," Chlorine"," 35.453",
18,"Ar"," Argon"," 39.948",
19,"K"," Potassium"," 39.0983",
20,"Ca"," Calcium"," 40.078",
21,"Sc"," Scandium"," 44.955912",
22,"Ti"," Titanium"," 47.867",
23,"V"," Vanadium"," 50.9415",
24,"Cr"," Chromium"," 51.9961",
25,"Mn"," Manganese"," 54.938045",
26,"Fe"," Iron"," 55.845",
27,"Co"," Cobalt"," 58.933195",
28,"Ni"," Nickel"," 58.6934",
29,"Cu"," Copper"," 63.546",
30,"Zn"," Zinc"," 65.38",
31,"Ga"," Gallium"," 69.723",
32,"Ge"," Germanium"," 72.64",
33,"As"," Arsenic"," 74.92160",
34,"Se"," Selenium"," 78.96",
35,"Br"," Bromine"," 79.904",
36,"Kr"," Krypton"," 83.798",
37,"Rb"," Rubidium"," 85.4678",
38,"Sr"," Strontium"," 87.62",
39,"Y"," Yttrium"," 88.90585",
40,"Zr"," Zirconium"," 91.224",
41,"Nb"," Niobium"," 92.90638",
42,"Mo"," Molybdenum"," 95.96",
43,"Tc"," Technetium"," 98",
44,"Ru"," Ruthenium"," 101.07",
45,"Rh"," Rhodium"," 102.90550",
46,"Pd"," Palladium"," 106.42",
47,"Ag"," Silver"," 107.8682",
48,"Cd"," Cadmium"," 112.411",
49,"In"," Indium"," 114.818",
50,"Sn"," Tin"," 118.710",
51,"Sb"," Antimony"," 121.760",
52,"Te"," Tellurium"," 127.60",
53,"I"," Iodine"," 126.90447",
54,"Xe"," Xenon"," 131.293",
55,"Cs"," Cesium"," 132.9054519",
56,"Ba"," Barium"," 137.327",
57,"La"," Lanthanum"," 138.90547",
58,"Ce"," Cerium"," 140.116",
59,"Pr"," Praseodymium"," 140.90765",
60,"Nd"," Neodymium"," 144.242",
61,"Pm"," Promethium"," 145",
62,"Sm"," Samarium"," 150.36",
63,"Eu"," Europium"," 151.964",
64,"Gd"," Gadolinium"," 157.25",
65,"Tb"," Terbium"," 158.92535",
66,"Dy"," Dysprosium"," 162.500",
67,"Ho"," Holmium"," 164.93032",
68,"Er"," Erbium"," 167.259",
69,"Tm"," Thulium"," 168.93421",
70,"Yb"," Ytterbium"," 173.054",
71,"Lu"," Lutetium"," 174.9668",
72,"Hf"," Hafnium"," 178.49",
73,"Ta"," Tantalum"," 180.94788",
74,"W"," Tungsten"," 183.84",
75,"Re"," Rhenium"," 186.207",
76,"Os"," Osmium"," 190.23",
77,"Ir"," Iridium"," 192.217",
78,"Pt"," Platinum"," 195.084",
79,"Au"," Gold"," 196.966569",
80,"Hg"," Mercury"," 200.59",
81,"Tl"," Thallium"," 204.3833",
82,"Pb"," Lead"," 207.2",
83,"Bi"," Bismuth"," 208.98040",
84,"Po"," Polonium"," 209",
85,"At"," Astatine"," 210",
86,"Rn"," Radon"," 222",
87,"Fr"," Francium"," 223",
88,"Ra"," Radium"," 226",
89,"Ac"," Actinium"," 227",
90,"Th"," Thorium"," 232.03806",
91,"Pa"," Protactinium"," 231.03588",
92,"U"," Uranium"," 238.02891",
93,"Np"," Neptunium"," 237",
94,"Pu"," Plutonium"," 244",
95,"Am"," Americium"," 243",
96,"Cm"," Curium"," 247",
97,"Bk"," Berkelium"," 247",
98,"Cf"," Californium"," 251",
99,"Es"," Einsteinium"," 252",
100,"Fm"," Fermium"," 257",
101,"Md"," Mendelevium"," 258",
102,"No"," Nobelium"," 259",
103,"Lr"," Lawrencium"," 262",
104,"Rf"," Rutherfordium"," 267",
105,"Db"," Dubnium"," 268",
106,"Sg"," Seaborgium"," 271",
107,"Bh"," Bohrium"," 272",
108,"Hs"," Hassium"," 270",
109,"Mt"," Meitnerium"," 276",
110,"Ds"," Darmstadtium"," 281",
111,"Rg"," Roentgenium"," 280",
112,"Cn"," Copernicium"," 285",
113,"Uut"," Ununtrium"," 284",
114,"Uuq"," Ununquadium"," 289",
115,"Uup"," Ununpentium"," 288",
116,"Uuh"," Ununhexium"," 293",
117,"Uus"," Ununseptium","",
118,"Uuo"," Ununoctium "," 294"];
var chemistryArr = [];
var data = document.getElementById("data");
var send = document.getElementById("send");
var p = document.getElementById("result")
var completeWord = [];
var word = [];
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    chemistryArr.push({
      "atomic-number": arr[i],
      "SI": arr[i+1].trim(),
      "Element": arr[i+2].trim(),
      "atomic-weight": arr[i+3]
    });
  }
};

send.addEventListener("click", function () {
  word = data.value;
	while (word.length > 0 && i > 0) {
  	var matchingElements = chemistryArr.filter(function(e){
			var symbol = e.SI.toLowerCase();
      return word.toLowerCase().startsWith(symbol);
    });

    var element = matchingElements.sort(function (e) {
      return e["atomic-weight"];
    })[0];

    if(element) {
    	completeWord.push(element);
      console.log(element);
      word = word.slice(element.SI.length);
    } else {
      //protection from infinte loop
      word = word.slice(1);
    }
    p.innerHTML = completeWord.map(e => e.SI).join("") + " ("+ completeWord.map(e => e.Element.toLowerCase()).join(", ") + ")";
  }
  completeWord = [];
  word = [];
});
