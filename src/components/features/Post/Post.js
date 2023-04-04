import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';

const Post = props => {

  const dispatch = useDispatch();

  const removeCurrentPost = () => {
    dispatch(removePost(props.post.id));
  };

  return (
    <Card className={clsx(!props.isSingleMode && 'mt-3', props.isSingleMode && 'border-0 col-md-8')} >
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <Card.Title className={clsx(props.isSingleMode && 'fs-2')}>{props.post.title}</Card.Title>
          {
            props.isSingleMode &&
            <div>
              <Button className='me-1' variant='outline-primary' as={NavLink} to={'/post/edit/' + props.post.id}>Edit</Button>
              <Button onClick={removeCurrentPost} variant='outline-danger' as={NavLink} to={'/post/' + props.post.id}>Delete</Button>
            </div>
          }
        </div>
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