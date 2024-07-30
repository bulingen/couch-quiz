type Category =
  | "Underhållning"
  | "Vetenskap"
  | "Kultur & litteratur"
  | "Geografi"
  | "Historia"
  | "Sport & fritid";
type DegreeOfDifficulty = "Lätt" | "Medel" | "Svår";

export type Question = {
  question: string;
  answer: string;
  incorrectOptions: [string, string, string];
  background: string;
  mainCategory: Category;
  extraCategories: Category[];
  degreeOfDifficulty: DegreeOfDifficulty;
};

export const questions: Question[] = [
  {
    question: "Vilket år släpptes den första Star Wars-filmen?",
    answer: "1977",
    mainCategory: "Underhållning",
    extraCategories: [],
    degreeOfDifficulty: "Medel",
    incorrectOptions: ["1975", "1980", "1983"],
    background:
      'Den första Star Wars-filmen "Star Wars: A New Hope" regisserades av George Lucas.',
  },

  {
    question: "Vem spelar karaktären Iron Man i Marvel-filmerna?",
    answer: "Robert Downey Jr.",
    mainCategory: "Underhållning",
    extraCategories: [],
    degreeOfDifficulty: "Lätt",
    incorrectOptions: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
    background:
      "Robert Downey Jr. har spelat Iron Man sedan 2008 och är en av de mest ikoniska superhjältarna i Marvel Cinematic Universe.",
  },

  {
    question: "Vad är den kemiska beteckningen för vatten?",
    answer: "H₂O",
    mainCategory: "Vetenskap",
    extraCategories: [],
    degreeOfDifficulty: "Lätt",
    incorrectOptions: ["CO₂", "O₂", "H₂"],
    background: "Vatten består av två väteatomer och en syreatom.",
  },

  {
    question: "Vad heter den största planeten i vårt solsystem?",
    answer: "Jupiter",
    mainCategory: "Vetenskap",
    extraCategories: [],
    degreeOfDifficulty: "Medel",
    incorrectOptions: ["Saturnus", "Uranus", "Neptunus"],
    background:
      "Jupiter är så stor att den rymmer över 1 300 jordklot inuti sig.",
  },

  {
    question: 'Vem skrev romanen "Brott och straff"?',
    answer: "Fjodor Dostojevskij",
    mainCategory: "Kultur & litteratur",
    extraCategories: [],
    degreeOfDifficulty: "Svår",
    incorrectOptions: ["Leo Tolstoj", "Anton Tjechov", "Ivan Turgenev"],
    background:
      '"Brott och straff" publicerades 1866 och är en av Dostojevskijs mest kända verk.',
  },

  {
    question:
      "Vad heter huvudpersonen i J.K. Rowlings bokserie om en ung trollkarl?",
    answer: "Harry Potter",
    mainCategory: "Kultur & litteratur",
    extraCategories: [],
    degreeOfDifficulty: "Lätt",
    incorrectOptions: ["Ron Weasley", "Hermione Granger", "Draco Malfoy"],
    background:
      'Harry Potter är huvudkaraktären i den populära bokserien som började med "Harry Potter och de vises sten."',
  },

  {
    question: "Vilket land har störst yta i världen?",
    answer: "Ryssland",
    mainCategory: "Geografi",
    extraCategories: [],
    degreeOfDifficulty: "Medel",
    incorrectOptions: ["Kanada", "Kina", "USA"],
    background:
      "Ryssland är det största landet i världen och täcker över 17 miljoner kvadratkilometer.",
  },

  {
    question: "Vad heter huvudstaden i Australien?",
    answer: "Canberra",
    mainCategory: "Geografi",
    extraCategories: [],
    degreeOfDifficulty: "Lätt",
    incorrectOptions: ["Sydney", "Melbourne", "Brisbane"],
    background:
      "Canberra valdes som huvudstad 1908 som en kompromiss mellan Sydney och Melbourne.",
  },

  {
    question: "Vilket år startade andra världskriget?",
    answer: "1939",
    mainCategory: "Historia",
    extraCategories: [],
    degreeOfDifficulty: "Medel",
    incorrectOptions: ["1938", "1940", "1941"],
    background:
      "Andra världskriget började när Tyskland invaderade Polen den 1 september 1939.",
  },

  {
    question: "Vem var drottning av England under den viktorianska eran?",
    answer: "Drottning Victoria",
    mainCategory: "Historia",
    extraCategories: [],
    degreeOfDifficulty: "Lätt",
    incorrectOptions: [
      "Drottning Elizabeth I",
      "Drottning Mary",
      "Drottning Anne",
    ],
    background:
      "Drottning Victoria regerade från 1837 till 1901 och den viktorianska eran är uppkallad efter henne.",
  },

  {
    question: "Vilket land vann fotbolls-VM för herrar 2018?",
    answer: "Frankrike",
    mainCategory: "Sport & fritid",
    extraCategories: [],
    degreeOfDifficulty: "Medel",
    incorrectOptions: ["Kroatien", "Brasilien", "Tyskland"],
    background: "Frankrike vann finalen mot Kroatien med 4-2.",
  },

  {
    question:
      "Vad heter Sveriges mest kända långdistanslöpare som vann OS-guld i maraton 1948?",
    answer: "Gunder Hägg",
    mainCategory: "Sport & fritid",
    extraCategories: [],
    degreeOfDifficulty: "Svår",
    incorrectOptions: ["Arne Andersson", "John Akii-Bua", "Emil Zátopek"],
    background:
      "Gunder Hägg var en framstående svensk långdistanslöpare som slog många världsrekord under 1940-talet.",
  },
];
