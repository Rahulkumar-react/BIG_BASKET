import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import PersonAddAlt from "@mui/icons-material/PersonAddAlt";
import Streetview from "@mui/icons-material/Streetview";
import Report from "@mui/icons-material/Report";
import Settings from "@mui/icons-material/Settings";
import FileUpload from "@mui/icons-material/FileUpload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Icon } from "@mui/material";

export const NavConfig = [
  {
    name: "Product Rating",
    path: "/Dashboard",
    Icon: <KeyboardArrowDownIcon />,
    subItems: [
      {
        name: "Users",
        path: "/overview/users",
        rating: {
          name: "simple-controlled-users",
          value: 3, // initial value for rating
        },
      },
      {
        name: "Revenue",
        path: "/overview/revenue",
        rating: {
          name: "simple-controlled-users",
          value: 4, // initial value for rating
        },
      },
    ],
  },
  {
    name: "Brands",
    path: "/Dashboard/userWiseChart",
    Icon: <KeyboardArrowDownIcon />,

    subItems: [
      {
        name: "All Out",
        path: "/reports/reports1",
      },
      {
        name: "Amul",
        path: "/reports/reports2",
      },
      {
        name: "Bambino",
        path: "/reports/reports3",
      },
      {
        name: "BB Royal",
        path: "/reports/reports1",
      },
      {
        name: "Bikaji",
        path: "/reports/reports2",
      },
      {
        name: "Britannia NutriChoice",
        path: "/reports/reports3",
      },
      {
        name: "Britannia",
        path: "/reports/reports1",
      },
    ],
  },
  {
    name: "Price",
    path: "/Dashboard",
    Icon: <KeyboardArrowDownIcon />,

    subItems: [
      {
        name: "CreateEmployee",
        path: "/CreateEmployee",
      },
      {
        name: "View Customer",
        path: "/Dashboard/viewcustomerDetails",
      },
    ],
  },

  {
    name: "Discount",
    path: "/Dashboard",
    Icon: <KeyboardArrowDownIcon />,

    subItems: [
      {
        name: "Uploads",
        path: "/Dashboard/upload",
      },
      {
        name: "ViewUploads",
        path: "/Dashboard/viewupload",
      },
    ],
  },
];
