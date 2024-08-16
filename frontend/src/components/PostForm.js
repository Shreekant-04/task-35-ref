const PostForm = ({
  users,
  title,
  setTitle,
  content,
  setContent,
  userId,
  setUserId,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="" disabled>Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
      />
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
