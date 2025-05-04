import { login, logout, auth } from "@/lib/Firebase";
import { useChatStore } from "@/store/useChatStore";
import { useEffect } from "react";

const Auth = () => {
    const { user, setUser } = useChatStore();

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(setUser);  // Listen for auth state change and update the store
        return () => unsub();
    }, [setUser]);

    return (
        <div>
            {user ? (
                <>
                    <p> Welcome, {user.displayName}</p>
                    <button onClick={logout}>LogOut </button>
                </>
            ) : (
                <button onClick={login}> Login with Google </button>
            )}
        </div>
    );
};

export default Auth;
