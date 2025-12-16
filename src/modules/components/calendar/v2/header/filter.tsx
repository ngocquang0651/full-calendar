import { FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";
import type { TEventColor } from "@/modules/components/calendar/types";

export default function FilterEventsV2() {
	const { selectedColors, filterEventsBySelectedColors, clearFilter } =
		useCalendar();

	const colors: TEventColor[] = [
		"blue",
		"green",
		"red",
		"yellow",
		"purple",
		"orange",
	];

    const items: MenuProps['items'] = [
        ...colors.map((color, index) => ({
            key: color,
            label: (
                <div className="flex items-center gap-2 capitalize">
                    <div
                        className={`size-3.5 rounded-full bg-${color}-600 dark:bg-${color}-700`}
                    />
                    {color}
                    {selectedColors.includes(color) && (
                        <span className="text-blue-500 ml-auto leading-none">
                             ✓
                        </span>
                    )}
                </div>
            ),
            onClick: () => {
                // e.domEvent.preventDefault(); // Antd handles this
                filterEventsBySelectedColors(color);
            }
        })),
        {
            type: 'divider',
        },
        {
            key: 'clear',
            label: (
                <div className="flex items-center gap-2">
                    <ReloadOutlined className="size-3.5" />
                    Clear Filter
                </div>
            ),
            disabled: selectedColors.length === 0,
            onClick: clearFilter,
        }
    ];

	return (
		<Dropdown menu={{ items }} trigger={['click']}>
            <Button icon={<FilterOutlined className="h-4 w-4" />}>
            </Button>
		</Dropdown>
	);
}
