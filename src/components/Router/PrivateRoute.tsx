import { RouteProps, Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth/AuthProvider";

export default function PrivateRoute({
  path,
  ...props
}: RouteProps): JSX.Element {
  const {
    authState: { logged },
  } = useAuthContext();
  return (
    <>
      {logged ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate to="/login" state={{ from: path }} replace={true} />
      )}
    </>
  );
}
