import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map(post => (
        <Col key={post.id} lg={4} md={6} sm={12}>
          <Card key={post.id} className='mt-3'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author:&nbsp;</strong>{post.author}<br />
                <strong>Published:&nbsp;</strong>{post.publishedDate}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button variant='primary' as={NavLink} to={'/post/' + post.id}>Read more</Button>
            </Card.Body>
          </Card>
      </Col>
    ))}
    </Row>
  );
};

export default Posts;