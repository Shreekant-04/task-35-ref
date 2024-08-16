import { useState } from 'react';

const PostList = ({ users, posts }) => {
  const [selectedUser, setSelectedUser] = useState('');

  // Filter posts based on the selected user
  const filteredPosts = selectedUser
    ? posts.filter(post => post.user._id === selectedUser)
    : posts;

  return (
    <div className="flex flex-col justify-start h-full gap-2 ">
      <div className="">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">All Users</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <ul className="  overflow-y-scroll  h-4/5">
        {filteredPosts.map((post) => (
          <li key={post._id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-500"><strong>Author:</strong> {post.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

