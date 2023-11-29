import { Navigate, Outlet, useNavigate } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PublicPage = () => {
    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    )
}

export default PublicPage;
