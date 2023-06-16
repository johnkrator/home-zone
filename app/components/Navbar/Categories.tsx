import React from "react";
import {FaRegSnowflake, FaSkiingNordic, FaUmbrellaBeach} from "react-icons/fa";
import {GiBarn, GiCampingTent, GiCastle, GiCaveEntrance, GiDesert, GiIsland, GiWindmill} from "react-icons/gi";
import {HiHomeModern} from "react-icons/hi2";
import {LuMountainSnow} from "react-icons/lu";
import {MdOutlineArticle, MdOutlinePool} from "react-icons/md";
import {SiInfluxdb} from "react-icons/si";
import CategoryBox from "@/app/components/CategoryBox";
import {useSearchParams} from "next/navigation";
import Container from "@/app/components/Container";

export const categories = [
    {
        label: "Beach",
        icon: FaUmbrellaBeach,
        description: "Beach property"
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "This property has a windmill"
    },
    {
        label: "Modern",
        icon: HiHomeModern,
        description: "This property comes with a modern design"
    },
    {
        label: "Countryside",
        icon: LuMountainSnow,
        description: "This property is by the country side"
    },
    {
        label: "Pools",
        icon: MdOutlinePool,
        description: "This property has a pool"
    },
    {
        label: "Island",
        icon: GiIsland,
        description: "This property is on the Island"
    },
    {
        label: "Lake",
        icon: FaRegSnowflake,
        description: "This property is located beside a lake"
    },
    {
        label: "Skiing",
        icon: FaSkiingNordic,
        description: "This property has a beautiful landscape for skiing"
    },
    {
        label: "Castles",
        icon: GiCastle,
        description: "This property has an embedded beautiful castle"
    },
    {
        label: "Caves",
        icon: GiCaveEntrance,
        description: "This property has a cave"
    },
    {
        label: "Camping",
        icon: GiCampingTent,
        description: "This property fits nicely for family camping"
    },
    {
        label: "Artic",
        icon: MdOutlineArticle,
        description: "This property has an artic"
    },
    {
        label: "Desert",
        icon: GiDesert,
        description: "This property comes with a desert-like feel. Good for calmness"
    },
    {
        label: "Barns",
        icon: GiBarn,
        description: "This property has barns"
    },
    {
        label: "Lux",
        icon: SiInfluxdb,
        description: "This property has a lux"
    }
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get("category");

    return (
        <Container>
            <div className="flex flex-row items-center justify-between pt-3 overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
