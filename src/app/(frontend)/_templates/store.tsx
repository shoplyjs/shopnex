import { Suspense } from "react";

import PaginatedProducts from "./paginated-product";
import type { SortOptions } from "../_util/sort-options";
import RefinementList from "../_components/refinement-list";
import SkeletonProductGrid from "../_components/skeleton-product-grid";
import { Product } from "@/payload-types";

const StoreTemplate = ({
	sortBy,
	page,
	products,
	totalPages,
	collectionId,
	productsIds,
}: {
	sortBy?: SortOptions;
	page?: string;
	products: Product[];
	totalPages: number;
	collectionId?: string;
	productsIds?: string[];
}) => {
	const pageNumber = page ? Number.parseInt(page) : 1;
	const sort = sortBy || "created_at";

	return (
		<div
			className="flex flex-col small:flex-row small:items-start py-6 content-container"
			data-testid="category-container"
		>
			<RefinementList sortBy={sort} />
			<div className="w-full">
				<div className="mb-8 text-2xl-semi">
					<h1 data-testid="store-page-title">All products</h1>
				</div>
				<Suspense fallback={<SkeletonProductGrid />}>
					<PaginatedProducts
						sortBy={sort}
						page={pageNumber}
						productsIds={productsIds}
						products={products}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default StoreTemplate;
