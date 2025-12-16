import React from "react";
import { CalendarBodyV2 } from "./calendar-body";
import { CalendarProvider } from "@/modules/components/calendar/contexts/calendar-context";
import { DndProvider } from "@/modules/components/calendar/contexts/dnd-context";
import { CalendarHeaderV2 } from "./header/calendar-header";
import { IEvent, IUser } from "../interfaces";

interface CalendarProps {
	events: IEvent[];
	users: IUser[];
}

export function CalendarV2({ events, users }: CalendarProps) {
	return (
		<CalendarProvider events={events} users={users} view="month">
			<DndProvider showConfirmation={false}>
				<div className="w-full border rounded-xl">
					<CalendarHeaderV2 />
					<CalendarBodyV2 />
				</div>
			</DndProvider>
		</CalendarProvider>
	);
}
