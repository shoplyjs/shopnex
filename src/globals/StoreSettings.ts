import { admins, anyone } from "@/access/roles";
import type { GlobalConfig } from "payload";
import currency from "currency-codes";

const StoreSettings: GlobalConfig = {
    slug: "store-settings",
    label: "Settings",
    access: {
        read: anyone,
        update: admins,
    },
    admin: {
        group: "Settings",
    },
    fields: [
        {
            name: "name",
            type: "text",
            defaultValue: "ShopLoad",
        },
        {
            name: "currency",
            type: "select",
            options: currency.codes().map((code) => ({
                label: `${currency.code(code)?.currency} (${currency.code(code)?.code})`,
                value: code,
            })),
            defaultValue: "USD",
        },
    ],
};

export default StoreSettings;
