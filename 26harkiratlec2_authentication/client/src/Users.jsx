import { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get('https://didactic-tribble-5jxpjq447q727wqw-3000.app.github.dev/users',{
            headers:{
                Authorization: `Bearer ${token}`
            },
        });
        setUsers(response.data);
        console.log(users);
        setLoading(false);
      } catch (error) {
        alert("there is some issue");
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
  );
}

export default Users;
