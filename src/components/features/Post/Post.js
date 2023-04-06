import { Card, Button, Modal } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { useState } from 'react';

const Post = props => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const category = useSelector(categories => getCategoryById(categories, props.post.categoryId)).name;

  const modalShow = () => setShowModal(true);
  const modalHide = () => setShowModal(false);

  const dispatch = useDispatch();

  const removeCurrentPost = () => {
    dispatch(removePost(props.post.id));
    navigate('/');
  };

  return (
    <>
      <Card className={clsx(!props.isSingleMode && 'mt-3', props.isSingleMode && 'border-0 col-md-8')} >
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title className={clsx(props.isSingleMode && 'fs-2')}>{props.post.title}</Card.Title>
            {
              props.isSingleMode &&
              <div>
                <Button className='me-1' variant='outline-primary' as={NavLink} to={'/post/edit/' + props.post.id}>Edit</Button>
                <Button onClick={modalShow} variant='outline-danger'>Delete</Button>
              </div>
            }
          </div>
          <Card.Text>
            <strong>Author:&nbsp;</strong>{props.post.author}<br />
            <strong>Published:&nbsp;</strong>{props.post.publishedDate}<br />
            <strong>Category:&nbsp;</strong>{category}
          </Card.Text>
          <Card.Text dangerouslySetInnerHTML={{ __html: props.isSingleMode ? props.post.content : props.post.shortDescription }}></Card.Text>
          {
            !props.isSingleMode && <Button variant='primary' as={NavLink} to={'/post/' + props.post.id}>Read more</Button>
          }
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={modalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app.<br />
          Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={removeCurrentPost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Post;