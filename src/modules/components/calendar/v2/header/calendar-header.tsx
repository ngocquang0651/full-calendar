"use client";

import { motion } from "framer-motion";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import {
	slideFromLeft,
	slideFromRight,
	transition,
} from "@/modules/components/calendar/animations";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";
import { AddEditEventDialog } from "@/modules/components/calendar/dialogs/add-edit-event-dialog";

import { TodayButtonV2 } from "./today-button";
import { DateNavigatorV2 } from "./date-navigator";
import FilterEventsV2 from "./filter";
import ViewsV2 from "./view-tabs";
import { UserSelectV2 } from "./user-select";
import { SettingsV2 } from "../settings/settings";

export function CalendarHeaderV2() {
	const { view, events } = useCalendar();

	return (
		<div className="flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between bg-white dark:bg-zinc-950 rounded-t-xl transition-colors">
			<motion.div
				className="flex items-center gap-3"
				variants={slideFromLeft}
				initial="initial"
				animate="animate"
				transition={transition}
			>
				<TodayButtonV2 />
				<DateNavigatorV2 view={view} events={events} />
			</motion.div>

			<motion.div
				className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-1.5"
				variants={slideFromRight}
				initial="initial"
				animate="animate"
				transition={transition}
			>
				<div className="options flex-wrap flex items-center gap-4 md:gap-2">
					<FilterEventsV2 />
					<ViewsV2 />
				</div>

				<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-1.5">
					<UserSelectV2 />

					<AddEditEventDialog>
						<Button type="primary" icon={<PlusOutlined className="h-4 w-4" />}>
							Add Event
						</Button>
					</AddEditEventDialog>
				</div>
				<SettingsV2 />
			</motion.div>
		</div>
	);
}
