import BlockchainIcon from "./menu-icons/blockchain-icon.svg?react";
import DocsIcon from "./menu-icons/docs-icon.svg?react";
import HomeIcon from "./menu-icons/home-icon.svg?react";
import MapIcon from "./menu-icons/map-icon.svg?react";
import ProductIcon from "./menu-icons/product-icon.svg?react";

import routes from "./app-routes";

export const menuLinks = [
    {
        id: "0",
        title: "Home",
        href: routes.home,
        desctopOnly: true,
        icon: <HomeIcon />,
    },
    {
        id: "1",
        title: "Product",
        href: routes.product,
        desctopOnly: true,
        icon: <ProductIcon />,
    },
    // {
    //     id: "2",
    //     title: "Get stated",
    //     href: "",
    // },
    {
        id: "3",
        title: "Map",
        href: `${routes.map}`,
        desctopOnly: true,
        icon: <MapIcon />,
    },
    // {
    //     id: "4",
    //     title: "Ecosystem",
    //     href: "",
    // },
    // {
    //     id: "5",
    //     title: "Pricing",
    //     href: "",
    // },
    {
        id: "6",
        title: "Blockchain",
        href: routes.blockchain,
        desctopOnly: true,
        icon: <BlockchainIcon />,
    },
    {
        id: "7",
        title: "Docs",
        href: "",
        desctopOnly: true,
        icon: <DocsIcon />,
    },
];
