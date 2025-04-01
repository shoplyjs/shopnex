import AddressBook from "@/app/(frontend)/_components/address-book";
import { useAuth } from "@payloadcms/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "Addresses",
	description: "View your addresses",
};

export default async function Addresses(props: {
	params: Promise<{ countryCode: string }>;
}) {

	return (
		<div className="w-full" data-testid="addresses-page-wrapper">
			<div className="mb-8 flex flex-col gap-y-4">
				<h1 className="text-2xl-semi">Shipping Addresses</h1>
				<p className="text-base-regular">
					View and update your shipping addresses, you can add as many as you
					like. Saving your addresses will make them available during checkout.
				</p>
			</div>
			<AddressBook  />
		</div>
	);
}
