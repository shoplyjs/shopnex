import { admins } from "@/access/roles";
import { groups } from "@/collections/groups";
import { Block, GlobalConfig } from "payload";

const HeroBlock: Block = {
    slug: "hero",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
        },
        {
            name: "ctaButtonText",
            label: "CTA Button Text",
            type: "text",
        },
        {
            name: "ctaButtonLink",
            label: "CTA Button Link",
            type: "text",
        },
        {
            name: "backgroundImage",
            type: "upload",
            relationTo: "media",
        },
    ],
};

const CarouselBlock: Block = {
    slug: "carousel",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
        },
        {
            name: "featuredProducts",
            type: "upload",
            relationTo: "media",
            hasMany: true,
        },
        {
            name: "backgroundImage",
            type: "upload",
            relationTo: "media",
        },
    ],
};

export const HeroSection: GlobalConfig = {
    slug: "hero-section",
    admin: {
        group: groups.customizations,
    },
    access: {
        read: admins,
        update: admins,
    },
    fields: [
        {
            name: "type",
            type: "blocks",
            blocks: [HeroBlock, CarouselBlock],
            required: true,
            maxRows: 1,
        },
    ],
};
