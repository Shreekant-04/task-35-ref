import { useEffect, useState, useCallback } from "react";
import UserForm from "./components/UserForm";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { getUsers, createUser, getPosts, createPost } from "./api";

const App = () => {
  const [users, setUsers] = useState([]);
  //for creating users
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //for fetching posts
  const [posts, setPosts] = useState([]);
  //for creating posts
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const handleUserSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await createUser({ name, email });
        alert("User created successfully");
        setName("");
        setEmail("");
      } catch (error) {
        alert("Error creating user");
      }
    },
    [email, name]
  );

  const handlePostSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content, userId });
      alert("Post created successfully");
      setTitle("");
      setContent("");
      setUserId("");
      const postsResponse = await getPosts();
      setPosts(postsResponse.data);
    } catch (error) {
      alert("Error creating post");
    }
  },[content, title, userId]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };
    fetchUsers();
  }, [handleUserSubmit]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await getPosts();
      setPosts(postsResponse.data);
    };
    fetchData();
  }, [handlePostSubmit]);

  return (
    <div className="h-screen bg-white flex items-center flex-wrap justify-evenly relative">
      <h1 className="text-3xl font-bold text-blue-600 w-full text-center">
         Task 35 : Ref and Populate
      </h1>
      <div className="w-1/4 flex flex-col justify-start gap-4">
        <div className="w-full bg-white rounded-lg shadow-lg border p-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Create User
          </h2>
          <UserForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleUserSubmit}
          />
        </div>
  
        <div className="w-full bg-white rounded-lg shadow-lg border p-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Create Post
          </h2>
          <PostForm
            users={users}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            userId={userId}
            setUserId={setUserId}
            handleSubmit={handlePostSubmit}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg relative  h-[80%] p-2">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Post List</h2>
        <PostList users={users} posts={posts} />
      </div>
    </div>
  );
  
};

export default App;
