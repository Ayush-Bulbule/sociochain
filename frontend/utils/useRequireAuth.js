import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useRequireAuth() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }
        return;
    }, [])
}