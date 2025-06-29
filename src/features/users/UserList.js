import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./UserSlice";
const UserList = () => {
const dispatch = useDispatch();
const users = useSelector(store => store.users);
const handleRemoveUser = (id) => {
dispatch(deleteUser({id}));
}
const renderCard = () => users.map(user => (
<div className="bg-gray-300 p-5 flex items-center justify-between"
key={user.id}>
<div>
<h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
<span className="font-normal text-gray-600">{user.email}</span>
</div>
<div className="flex gap-4">
<Link to={`/react-projet/edit-user/${user.id}`}>
<button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 
24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

<path strokeLinecap="round" strokeLinejoin="round"
d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 
1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
</Link>
<button
onClick={() => handleRemoveUser(user.id)}
>
supprimer
</button>
</div>
</div>
))
return(
<div>
<Link to="/react-projet/add-user"><Button>Add User</Button></Link>
<div className="grid gap-5 md:grid-cols-2">
{users.length ? renderCard() : 
<p className="text-center col-span-2 text-gray-700 font-semibold">No 
User</p>}
</div>
</div>
);
}
export default UserList;
