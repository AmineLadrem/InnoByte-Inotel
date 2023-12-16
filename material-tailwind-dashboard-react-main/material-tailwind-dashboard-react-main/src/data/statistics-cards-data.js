import {
  BanknotesIcon,
  UsersIcon,
  ChartBarIcon,
  HomeIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  StarIcon,
  RssIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import { data } from "autoprefixer";

const fetchData = async() => {
  const response = await fetch("http://192.168.0.6:1880/stafflist")
  const data = await response.json()
  console.log(data);
}

fetchData()

export const statisticsCardsData = [
  {
    color: "gray",
    icon: UsersIcon,
   title: "Today's Clients",
    value: "50",
    type: "HR"

  },
  {
    color: "gray",
    icon: BriefcaseIcon,
   title: "Eployees Number",
    value: "50",
    type: "HR"
  },
  {
    color: "gray",
    icon: BuildingOfficeIcon,
   title: "Active Members",
    value: "15",
    type: "HR"
  },
  {
    color: "gray",
    BanknotesIcon,
    icon: BanknotesIcon,
    title: "Today's Profit",
    value: "12,300 DA",
    type: "Finance"
  },
  {
    color: "gray",
    BanknotesIcon,
    icon: HomeIcon,
    title: "In use Rooms",
    value: "17",
    type: "Room Gestion"
  },
  {
    color: "gray",
    icon: HomeIcon,
    title: "Available Rooms",
    value: "50",
    type: "Room Gestion"
  },
  {
    color: "gray",
    icon: CurrencyDollarIcon,
    title: "Sales",
    value: "103,430 DA",
    type: "Finance"
  },
  {
    color: "gray",
    icon: StarIcon,
    title: "Avergae Rating",
    value: "8/10",
    type: "Overall Informations"
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Overall Temperature",
    value: "20°C",
    type: "Overall Informations"
  },
  {
    color: "gray",
    icon: RssIcon,
    title: "Wifi Debit",
    value: "10MB",
    type: "Overall Informations"
  },
];

export default statisticsCardsData;
