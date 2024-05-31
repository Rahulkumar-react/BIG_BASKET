import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export const SidebarData = [
  {
    title: "Product Rating",
    path: "/overview",
    iconClosed: (
      <span style={{ fontWeight: "bold", display: "inline-block" }}>
        <SlArrowDown
          style={{ color: "black", width: "15px", verticalAlign: "middle" }}
        />
      </span>
    ),
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Brands",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "All Out",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Amul",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Bambino",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "BB Royal",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Bikaji",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Britannia NutriChoice",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Britannia",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Price",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Less than Rs 20",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rs 21 to Rs 50",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rs 51 to Rs 100",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Rs 101 to Rs 200",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rs 201 to Rs 500",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "More than Rs 500",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Discount",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Upto 5%",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "5% - 10%",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "10% - 15%",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "15% - 25%",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "More than 25%",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Country Of Origin",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Chile",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Greece",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "India",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Iran",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "New Zealand",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " Turkey",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Festival",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Shivratri",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Special Occasion",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Flavours",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Chocolate",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Cola",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Masala",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Natural",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Nuts",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " Orange",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Other Juices",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Plain",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " Regular",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Food Preference",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Non Vegetarian",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Vegetarian",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Fragrance",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Citrus",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Lemon",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Original",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Occasion",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Big Indian Grocery Sale",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Summer",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Product Type",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "Farm Egg",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Paneer",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Plain",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "SuperSaver",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Sweet Chilli Sauce",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tomato Ketchup",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Pack Size",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <SlArrowDown style={{ color: "black" }} />,
    iconOpened: <SlArrowUp style={{ color: "black" }} />,

    subNav: [
      {
        title: "900 g",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "90 g",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "860 ml",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "850 g Pouch",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "840 g (12 Packs x 70 g)",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " 800 g Pouch",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "750 ml Pet Bottle",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "750 g Pouch",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " 675ml Refill",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: " 675ml",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
];
