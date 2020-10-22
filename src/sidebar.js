//Change app logo in sidebar
import Logo from "./assets/img/new-logo.png";

//Sidebar list configurations
let List = [
  {
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    hide: false,
    path: "/dashboard",
    child: [
      {
        name: "Overview",
        to: "/overview",
      },
      {
        name: "Traffic & Engagement",
        to: "/traffic-&-engagement",
      },
    ],
  },
  {
    name: "Vehicles",
    icon: "fas fa-car-side",
    path: "/dashboard/vehicles",
    hide: false,
  },
  {
    name: "Beacons",
    icon: "fas fa-cube",
    path: "/dashboard/beacons",
    hide: false,
  },
  {
    name: "Users",
    icon: "fas fa-users-cog",
    path: "/dashboard/users",
    hide: false,
    child: [
      {
        name: "Access Management",
        to: "/access-manegement",
      },
      {
        name: "Members",
        to: "/members",
      },
    ],
  },
  {
    name: "Settings",
    icon: "fas fa-sliders-h",
    path: "/dashboard/settings",
    hide: true,
    child: [
      {
        name: "Theme",
        to: "/theme",
      },
      {
        name: "Recapctha",
        to: "/recaptcha",
      },
    ],
  },
];

const Sidebar = {
  Logo,
  List,
};

export default Sidebar;
