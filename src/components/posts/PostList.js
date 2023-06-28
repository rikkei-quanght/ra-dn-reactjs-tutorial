import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPostList } from './../../actions/postAction'
import { getPostListApi } from "../../apis/postApi";
import { useEffect } from "react";

export default function PostList() {
    const postList = useSelector(state => state.posts)
    // debugger
    const dispatch = useDispatch();

    const getPosts = (posts) => {
        dispatch(getPostList(posts))
    }

    useEffect(() => {
        getPostListApi()
            .then(posts => {
                getPosts(posts)
            })
    }, [])

    return (
        <>
            <h1 className="text-center">Danh sách bài viết</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Nội dung</th>
                        <th>ID tác giả</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>{post.userId}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
