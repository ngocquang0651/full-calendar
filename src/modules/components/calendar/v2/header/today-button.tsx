import { formatDate } from "date-fns";
import { Button } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";

export function TodayButtonV2() {
	const { setSelectedDate } = useCalendar();

	const today = new Date();
	const handleClick = () => setSelectedDate(today);

	return (
		<Button
			type="default"
			className="flex h-14 w-14 flex-col items-center justify-center p-0 text-center !rounded-xl"
			onClick={handleClick}
		>
			<span
				className="w-full bg-primary py-1 text-xs font-semibold text-primary-foreground"
                style={{ lineHeight: '1' }}
			>
				{formatDate(today, "MMM").toUpperCase()}
			</span>
			<span
				className="text-lg font-bold"
                style={{ lineHeight: '1' }}
			>
				{today.getDate()}
			</span>
		</Button>
	);
}
