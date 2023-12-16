import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import {
  ClockIcon,
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

const priorityOrder = {
  HR: 1,
  "Overall Informations": 2,
  Finance: 3,
  "Room Gestion": 4,
};

export function Home() {
  // Group items based on their types
  const groupedCardsData = statisticsCardsData.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  // Sort the groups based on priorityOrder
  const sortedGroups = Object.keys(groupedCardsData).sort(
    (a, b) => priorityOrder[a] - priorityOrder[b]
  );

  return (
    <div className="mt-12">
      {/* Display grouped cards */}
      {sortedGroups.map((type) => (
        <div key={type} className="mb-12">
          <Typography variant="xl" className="font-semibold mb-4">
            {type}
          </Typography>
          <div className="grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {groupedCardsData[type].map(({ icon, title, ...rest }) => (
              <StatisticsCard
                key={title}
                {...rest}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-6 h-6 text-white",
                })}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Display charts */}
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
