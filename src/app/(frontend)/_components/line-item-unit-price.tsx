import { clx } from "@medusajs/ui";
import { convertToLocale } from "../_util/money";

type LineItemUnitPriceProps = {
	item: any;
	style?: "default" | "tight";
	currencyCode: string;
};

const LineItemUnitPrice = ({ item, currencyCode }: LineItemUnitPriceProps) => {
	return (
		<div className="flex flex-col text-ui-fg-muted justify-center h-full">
			<span
				className={clx("text-base-regular")}
				data-testid="product-unit-price"
			>
				{convertToLocale({
					amount: item.price,
					currency_code: currencyCode,
				})}
			</span>
		</div>
	);
};

export default LineItemUnitPrice;
