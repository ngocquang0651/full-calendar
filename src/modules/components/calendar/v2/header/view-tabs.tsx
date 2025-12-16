import { Segmented } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";
import {
  ScheduleOutlined,
  UnorderedListOutlined,
  ColumnWidthOutlined,
  CalendarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { TCalendarView } from "@/modules/components/calendar/types";
import { memo } from "react";

const tabs = [
  {
    name: "Agenda",
    value: "agenda",
    icon: <ScheduleOutlined className="h-4 w-4" />,
  },
  {
    name: "Day",
    value: "day",
    icon: <UnorderedListOutlined className="h-4 w-4" />,
  },
  {
    name: "Week",
    value: "week",
    icon: <ColumnWidthOutlined className="h-4 w-4" />,
  },
  {
    name: "Month",
    value: "month",
    icon: <CalendarOutlined className="h-4 w-4" />,
  },
  {
    name: "Year",
    value: "year",
    icon: <AppstoreOutlined className="h-4 w-4" />,
  },
];

function ViewsV2() {
  const { view, setView } = useCalendar();

  return (
    <Segmented
      value={view}
      onChange={(value) => setView(value as TCalendarView)}
      options={tabs.map((tab) => ({
        label: (
          <div className="flex items-center gap-2 p-1">
            {tab.icon}
            <span className="hidden sm:inline">{tab.name}</span>
          </div>
        ),
        value: tab.value,
      }))}
      className="bg-muted text-muted-foreground"
    />
  );
}

export default memo(ViewsV2);
