import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import Post from "../Post/Post";

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map(post => (
        <Col key={post.id} lg={4} md={6} sm={12}>
          <Post post={post} isSingleMode={false} />
        </Col>
    ))}
    </Row>
  );
};

export default Posts;