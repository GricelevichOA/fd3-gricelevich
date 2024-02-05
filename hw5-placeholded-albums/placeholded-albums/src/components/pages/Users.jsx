import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../actions/index";
import { Link } from "react-router-dom";

export function Users() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersAction(dispatch);
  }, []);
  
  return (
    <div>
      <h2>USERS</h2>
      {users.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="users">
          {users.items.map((user) => (
            <Link
              className="users__user"
              to={`/users/${user.id}`}
              key={user.id}
            >
              {user.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
