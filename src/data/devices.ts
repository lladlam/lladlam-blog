// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	REDMI: [
		{
			name: "REDMI Note 12 5G",
			image: "/images/device/redminote125G.webp",
			specs: "4Gen1 6+128G",
			description: "120Hz",
			link: "https://www.mi.com/redminote12",
		},
	],
};
