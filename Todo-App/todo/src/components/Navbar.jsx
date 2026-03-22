import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Navbar() {
    const { logout } = useContext(AuthContext);

    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">
                Todo App
            </h1>

            <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded"
            >
                Logout
            </button>
        </div>
    )
}