import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Container>
      <Row>
        {posts.map(post => (
          <Col key={post.id} lg={4} md={6} sm={12} className='border rounded'>
            <h5>{post.title}</h5>
          </Col>
      ))}
      </Row>
    </Container>
  );
};

export default Posts;