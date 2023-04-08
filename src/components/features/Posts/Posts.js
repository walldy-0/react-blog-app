import { Row, Col } from 'react-bootstrap';
import Post from "../Post/Post";

const Posts = ({posts}) => {

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