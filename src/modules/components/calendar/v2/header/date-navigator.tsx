import { formatDate } from "date-fns";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { Button, Tag } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";

import {
	getEventsCount,
	navigateDate,
	rangeText,
} from "@/modules/components/calendar/helpers";

import type { IEvent } from "@/modules/components/calendar/interfaces";
import type { TCalendarView } from "@/modules/components/calendar/types";

interface IProps {
	view: TCalendarView;
	events: IEvent[];
}

export function DateNavigatorV2({ view, events }: IProps) {
	const { selectedDate, setSelectedDate } = useCalendar();

	const month = formatDate(selectedDate, "MMMM");
	const year = selectedDate.getFullYear();

	const eventCount = useMemo(
		() => getEventsCount(events, selectedDate, view),
		[events, selectedDate, view],
	);

	const handlePrevious = () =>
		setSelectedDate(navigateDate(selectedDate, view, "previous"));
	const handleNext = () =>
		setSelectedDate(navigateDate(selectedDate, view, "next"));

	return (
		<div className="space-y-0.5">
			<div className="flex items-center gap-2">
				<span className="text-lg font-semibold">
					{month} {year}
				</span>
                <Tag color="cyan">
					{eventCount} events
				</Tag>
			</div>

			<div className="flex items-center gap-2">
				<Button
					type="default"
					shape="circle"
					className="flex items-center justify-center"
					icon={<LeftOutlined className="h-4 w-4" />}
					onClick={handlePrevious}
				/>

				<p className="text-sm text-muted-foreground">
					{rangeText(view, selectedDate)}
				</p>

				<Button
					type="default"
					shape="circle"
					className="flex items-center justify-center"
					icon={<RightOutlined className="h-4 w-4" />}
					onClick={handleNext}
				/>
			</div>
		</div>
	);
}
