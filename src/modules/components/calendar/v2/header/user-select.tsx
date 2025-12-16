import { Select, Avatar } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";

export function UserSelectV2() {
	const { users, selectedUserId, filterEventsBySelectedUser } = useCalendar();

    const options = [
        {
            value: "all",
            label: (
                <div className="flex items-center gap-2">
                    <Avatar.Group size="small" maxCount={3}>
                        {users.map((user) => (
                            <Avatar key={user.id} src={user.picturePath}>
                                {user.name[0]}
                            </Avatar>
                        ))}
                    </Avatar.Group>
                    All
                </div>
            ),
        },
        ...users.map((user) => ({
            value: user.id,
            label: (
                <div className="flex items-center gap-2">
                    <Avatar size="small" src={user.picturePath}>
                        {user.name[0]}
                    </Avatar>
                    <span className="truncate">{user.name}</span>
                </div>
            ),
        })),
    ];

	return (
		<Select
            value={selectedUserId || undefined}
            onChange={filterEventsBySelectedUser}
            className="w-full min-w-[200px]"
            placeholder="Select a user"
            options={options}
            optionLabelProp="label"
        />
	);
}
