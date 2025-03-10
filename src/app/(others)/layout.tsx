'use client'
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.theme === "dark") {
            const isLoggedIn = localStorage.getItem("islogin");

            if (isLoggedIn !== "true") {
                router.push("/login");
            }
        }
    }, [router]);

    return(

        <>
        <div className={`nc-LayoutPage relative`}>
            <div
                className={`absolute h-[400px] top-0 left-0 right-0 w-full bg-primary-100 dark:bg-neutral-800 bg-opacity-25 dark:bg-opacity-40`}
            />
            <div className="container relative pt-6 sm:pt-10 pb-16 lg:pt-20 lg:pb-28">
                <div className="p-5 mx-auto bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16 dark:bg-neutral-900">
                    {children}
                </div>
            </div>
        </div>
    </>
    );
};

export default Layout;
