import {
	TbMinus,
	TbNotebook,
	TbSettings,
	TbShoppingCartPlus,
	TbSmartHome,
	TbUser,
} from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

export const sidebarLinks = [
	{
		name: "Dashboard",
		link: "/dashboard",
		icon: <TbSmartHome />,
	},
	{
		name: "Catalogue",
		icon: <TbNotebook />,
		subItems: [
			{
				name: "Categories",
				link: "/dashboard/categories",
				icon: <TbMinus />,
			},
			{
				name: "Products",
				link: "/dashboard/products",
				icon: <TbMinus />,
			},
		],
	},
	{
		name: "Customers",
		link: "/dashboard/customers",
		icon: <FiUsers />,
	},
	{
		name: "Orders",
		link: "/dashboard/orders",
		icon: <TbShoppingCartPlus />,
	},
	{
		name: 'Tags',
		link: '/dashboard/tags',
		icon: <TbSettings />,
	},
	// {
	//     name: 'Staff',
	//     link: '/dashboard/staff',
	//     icon: <TbUser />,
	// },
	{
		name: "Settings",
		link: "/dashboard/settings",
		icon: <TbSettings />,
	},
];
