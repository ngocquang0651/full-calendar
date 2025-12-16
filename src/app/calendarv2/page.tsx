import { CalendarV2 } from "@/modules/components/calendar/v2";
import { getEvents, getUsers } from "@/modules/components/calendar/requests";

export default async function CalendarPage() {
	const events = await getEvents();
	const users = await getUsers();

	return (
		<main className="flex max-h-screen my-10 flex-col">
			<div className="container p-4 md:mx-auto">
				<CalendarV2 events={events} users={users} />
			</div>
		</main>
	);
}
