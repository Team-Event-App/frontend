import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

import Posts from './Posts'
import Pagination from './Pagination'
import { number } from 'yup';

const Main = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://api.indrakawasan.com/event/show');
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts();
    }, [])

    // Get Current Post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-4">My Blog</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}
export default Main;