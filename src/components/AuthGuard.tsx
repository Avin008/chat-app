import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

const AuthGuard = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const authStatus = useAuthStore(
    (store) => store.authStatus
  );
  if (authStatus) {
    return <Navigate to={"/chat/helloworld"} />;
  } else {
    return children;
  }
};

export default AuthGuard;
