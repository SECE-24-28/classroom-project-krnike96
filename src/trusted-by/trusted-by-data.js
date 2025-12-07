import {
  faBuildingColumns,
  faChalkboardUser,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const COLOR_MINT = "rgb(0, 197, 190)";
const COLOR_BLUE = "rgb(0, 189, 235)";
const COLOR_ORANGE = "rgb(243, 176, 79)";
const COLOR_RED = "rgb(250, 63, 70)";

export const TrustedByData = [
  {
    subtitle: "100+",
    para: "COLLEGES",
    icon: faBuildingColumns,
    color: COLOR_MINT,
    boundaryType: "up",
  },
  {
    subtitle: "150",
    para: "PROFESSIONAL TRAINERS",
    icon: faChalkboardUser,
    color: COLOR_BLUE,
    boundaryType: "down",
  },
  {
    subtitle: "1000+",
    para: "STUDY MATERIALS",
    icon: faBook,
    color: COLOR_ORANGE,
    boundaryType: "up",
  },
  {
    subtitle: "1,00,000",
    para: "STUDENTS",
    icon: faUserGraduate,
    color: COLOR_RED,
    boundaryType: "down",
  },
];
