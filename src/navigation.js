import CIcon from "@coreui/icons-react";
import React from "react";

const navigation = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["SISTEMA DE MONITOREO"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "CC Viva Barranquilla",
    route: "/",
    icon: "cil-speedometer",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Fases",
        to: "/viva_barranquilla/fases",
        icon: "cilList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Monitoreo",
        to: "/viva_barranquilla/monitoreo",
        icon: "cilTask",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Temp-hum",
        to: "/viva_barranquilla/temp_hum",
        icon: "cilGraph",
      },
      {
        _tag: "CSidebarNavDivider",
      },
    ],
  },
];

export default navigation;