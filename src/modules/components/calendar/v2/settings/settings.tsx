import {
	CheckOutlined,
	StopOutlined,
	MoonOutlined,
	BgColorsOutlined,
	SettingOutlined,
	SunOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import { useTheme } from "next-themes";
import { Button, Popover, Switch, Divider, Radio } from "antd";
import { useCalendar } from "@/modules/components/calendar/contexts/calendar-context";
import { useDragDrop } from "@/modules/components/calendar/contexts/dnd-context";

export function SettingsV2() {
	const {
		badgeVariant,
		setBadgeVariant,
		use24HourFormat,
		toggleTimeFormat,
		view,
		setView,
		agendaModeGroupBy,
		setAgendaModeGroupBy,
	} = useCalendar();
	const { showConfirmation, setShowConfirmation } = useDragDrop();
	const { theme, setTheme } = useTheme();

	const isDarkMode = theme === "dark";
	const isDotVariant = badgeVariant === "dot";

    const content = (
        <div className="w-64 flex flex-col gap-2">
            <h4 className="font-medium mb-1">Calendar settings</h4>
            <Divider className="my-1" />
            
            <div className="flex items-center justify-between">
                <span>Use dark mode</span>
                <Switch
                    checkedChildren={<MoonOutlined className="h-3 w-3" />}
                    unCheckedChildren={<SunOutlined className="h-3 w-3" />}
                    checked={isDarkMode}
                    onChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
            </div>
            
            <div className="flex items-center justify-between">
                <span className="text-sm">Confirmation on drop</span>
                <Switch
                    checkedChildren={<CheckOutlined className="h-3 w-3" />}
                    unCheckedChildren={<CloseOutlined className="h-3 w-3" />}
                    checked={showConfirmation}
                    onChange={(checked) => setShowConfirmation(checked)}
                />
            </div>

            <div className="flex items-center justify-between">
                <span>Use dot badge</span>
                <Switch
                    checkedChildren={<StopOutlined className="w-3 h-3" />}
                    unCheckedChildren={<BgColorsOutlined className="w-3 h-3" />}
                    checked={isDotVariant}
                    onChange={(checked) =>
                        setBadgeVariant(checked ? "dot" : "colored")
                    }
                />
            </div>

            <div className="flex items-center justify-between">
                <span>Use 24 hour format</span>
                <Switch
                    checked={use24HourFormat}
                    onChange={toggleTimeFormat}
                />
            </div>

            <Divider className="my-1" />
            
            <div className="flex flex-col gap-2">
                <span className="font-medium">Agenda view group by</span>
                <Radio.Group 
                    value={agendaModeGroupBy}
                    onChange={(e) => setAgendaModeGroupBy(e.target.value)}
                    optionType="button"
                    buttonStyle="solid"
                >
                    <Radio.Button value="date">Date</Radio.Button>
                    <Radio.Button value="color">Color</Radio.Button>
                </Radio.Group>
            </div>
        </div>
    );

	return (
		<Popover content={content} trigger="click" placement="bottomRight">
			<Button icon={<SettingOutlined className="h-4 w-4" />} />
		</Popover>
	);
}
