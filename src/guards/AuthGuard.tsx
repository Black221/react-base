import Login from "../auth/Login";

export default function AuthGuard() {

    // const { user } = useAuth();

    // if (user) {
    //     return <Outlet />
    // }

    return <Login />
}