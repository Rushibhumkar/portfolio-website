import Quantiix from "../app/svgComp/Quantiix";
import Axp from "../app/svgComp/Axp";
import Revo from "../app/svgComp/Revo";
import Splitr from "../app/svgComp/Splitr";
import Kinmarvel from "../app/svgComp/Kinmarvel";
import DeliDabbas from "../app/svgComp/DeliDabbas";

export const allProjects = [
  {
    title: "Delicious Dabbas",
    slug: "delicious-dabbas",
    description:
      "A tiffin delivery app for bachelors with separate apps for users and partners. Developed using the MERN stack and deployed on the Play Store.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    image: DeliDabbas,
    link: "https://play.google.com/store/apps/details?id=com.falconsquare.delicious&hl=en_IN",
    modules: [
      "User & Partner Authentication",
      "Subscription Plan Management",
      "Order Placement & Delivery Tracking",
      "Payment Gateway Integration",
      "Daily Menu & Feedback System",
    ],
  },
  {
    title: "AXP Real Estate CRM",
    slug: "axp",
    description:
      "A powerful CRM system tailored for real estate businesses, featuring dashboards, tracking, and HRMS tools.",
    tech: ["React Native", "Firebase", "Redux"],
    image: Axp,
    link: "",
    modules: [
      "User & Role Management",
      "Lead Management & Tracking",
      "Call Integration",
      "Interview Scheduling",
      "Attendance System",
      "Live Tracking",
      "Meeting Scheduling",
      "Team Hierarchy",
      "Bookings & Payroll",
      "Social Media Integration",
      "Dashboard & Graphs",
      "CRM + HRMS System",
    ],
  },
  {
    title: "Revo - Dubai Real Estate",
    slug: "revo",
    description:
      "A Dubai-based real estate CRM tailored for international users, with gamification and financial modules.",
    tech: ["React Native", "Redux", "Firebase"],
    image: Revo,
    link: "",
    modules: [
      "User Management",
      "Leads & Bookings",
      "Invoices Module",
      "Team Management",
      "Gamification Features",
      "Social Media Integration",
      "Dashboard & Graphs",
      "CRM + HRMS System",
    ],
  },
  {
    title: "Quantiix CRM",
    slug: "quantiix",
    description:
      "An advanced CRM solution built for scalable real estate businesses. Modular and customizable for multiple clients.",
    tech: ["React Native", "Firebase", "Redux"],
    image: Quantiix,
    link: "https://play.google.com/store/apps/details?id=com.quantiixapp&hl=en",
    modules: [
      "User Management",
      "Team & Lead Tracking",
      "Meeting & Booking System",
      "Social Media Integration",
      "Dashboard & Analytics",
      "CRM + HRMS System",
    ],
  },
  {
    title: "Kinmarvel - Family System",
    slug: "kinmarvel",
    description:
      "A digital family tree system with stories, posts, and messaging. Built for community engagement.",
    tech: ["React Native", "Firebase"],
    image: Kinmarvel,
    link: "https://play.google.com/apps/internaltest/4701259572554611500",
    modules: [
      "Family Tree / Hierarchy System",
      "Posts & Stories",
      "Group & Personal Chat",
      "Notifications & Media Upload",
      "Search Family Members",
    ],
  },
  {
    title: "Splitr - Expense Split App",
    slug: "splitr",
    description:
      "Splitr helps users manage and split group expenses effectively with clean UI and seamless UX.",
    tech: ["React Native", "Firebase", "Redux"],
    image: Splitr,
    link: "https://play.google.com/store/apps/details?id=lk.unio.splitr&hl=en",
    modules: [
      "Group Creation & Invitations",
      "Expense Splitting Algorithms",
      "Payment History",
      "Real-time Notifications",
      "Graph View for Balances",
    ],
  },
];
