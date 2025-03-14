"use client";

import ItemsTemplate from "./items";
import Summary from "./summary";
import EmptyCartMessage from "../_components/empty-cart-message";
import SignInPrompt from "../_components/sign-in-prompt";
import Divider from "../_components/divider";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import Spinner from "../_components/icons/spinner";
import { useAuth } from "../_providers/auth";

const CartTemplate = () => {
    const { items } = useCart();
    const [isMounted, setIsMounted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spinner />
            </div>
        );
    }
    return (
        <div className="py-12">
            <div className="content-container" data-testid="cart-container">
                {items?.length ? (
                    <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
                        <div className="flex flex-col bg-white py-6 gap-y-6">
                            {!user && (
                                <>
                                    <SignInPrompt />
                                    <Divider />
                                </>
                            )}

                            <ItemsTemplate />
                        </div>
                        <div className="relative">
                            <div className="flex flex-col gap-y-8 sticky top-12">
                                <div className="bg-white py-6">
                                    <Summary />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <EmptyCartMessage />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartTemplate;
