import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const handleDelete = (id)=> {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });
    }, []);
    return (
        <div className="home">
            {blogs && <BlogList  blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;