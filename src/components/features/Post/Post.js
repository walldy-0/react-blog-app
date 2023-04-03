import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Post = props => {

  return (
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>
          <strong>Author:&nbsp;</strong>{props.post.author}<br />
          <strong>Published:&nbsp;</strong>{props.post.publishedDate}
        </Card.Text>
        <Card.Text>{props.isSingleMode ? props.post.content : props.post.shortDescription}</Card.Text>
        {
          !props.isSingleMode && <Button variant='primary' as={NavLink} to={'/post/' + props.post.id}>Read more</Button>
        }
      </Card.Body>
    </Card>
  );
};

export default Post;