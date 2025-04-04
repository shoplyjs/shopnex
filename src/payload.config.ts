import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Collections } from "./collections/Collections";
import { Products } from "./collections/Products";
import { Orders } from "./collections/Orders";
import StoreSettings from "./globals/StoreSettings";
import { Variants } from "./collections/Variants";
import { Options } from "./collections/Options";
import { plugins } from "./plugins";
import { Policies } from "./collections/Policies";
import { populatePolicies as createDefaultPolicies } from "./app/services/policies";
import { GiftCards } from "./collections/GiftCards";
import { HeroSection } from "./globals/HeroSection";
import { Footer } from "./globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const catalog = [Collections, Products, Variants, Options];

export default buildConfig({
    telemetry: false,
    admin: {
        suppressHydrationWarning: false,
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },

        components: {
            beforeDashboard: [
                {
                    path: "@/custom/Dashboard.tsx",
                },
            ],
            Nav: "@/custom/Nav/Nav.tsx",
        },
    },
    collections: [Orders, ...catalog, Users, Media, Policies, GiftCards],
    globals: [StoreSettings, HeroSection, Footer],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: sqliteAdapter({
        client: {
            url: process.env.DATABASE_URI || "",
        },
    }),
    sharp,
    plugins,
    onInit: async (payload) => {
        await createDefaultPolicies(payload);
    },
});
