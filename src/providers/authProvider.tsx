import { initAuth, selectAuth, updateAuth } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { getUserLS } from "@/utils/authLS";
import { ReactNode, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

type AuthGuardProp = {
  children: ReactNode;
};

type PermissionGuardProp = {
  children: ReactNode;
  permission: string;
};

type AuthProviderProp = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProp) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // set auth store
    const user = getUserLS();
    if (user) {
      dispatch(
        updateAuth({
          isAuthenticated: true,
          user: user,
        })
      );
    } else {
      dispatch(initAuth());
    }
  }, []);

  return <>{children}</>;
};

export const AuthGuard = ({ children }: AuthGuardProp) => {
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!auth.isAuthenticated && auth.isInitialized) {
      navigate("/login");
      toast.error("Chưa đăng nhập");
    }
  }, [auth]);

  return <>{children}</>;
};

export const PermissionGuard = ({
  children,
  permission,
}: PermissionGuardProp) => {
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!auth.isAuthenticated && auth.isInitialized) {
      navigate("/login");
      toast.error("Chưa đăng nhập");
    }

    if (!auth.user) {
      navigate(-1);
    }

    if (auth.user?.role.permissions.some((per) => per.code !== permission)) {
      navigate(-1);
    }
  }, [auth]);

  return <>{children}</>;
};
