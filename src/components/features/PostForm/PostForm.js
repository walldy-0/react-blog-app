import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';

const PostForm = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title: title, author: author, publishedDate: publishedDate, shortDescription: shortDescription, content: content }));

    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={e => setTitle(e.target.value)} placeholder="Enter title"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control onChange={e => setAuthor(e.target.value)} placeholder="Enter author"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postPublishedDate">
          <Form.Label>Published</Form.Label>
          <Form.Control onChange={e => setPublishedDate(e.target.value)} placeholder="Enter published date"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postShortDescription">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" rows="4" onChange={e => setShortDescription(e.target.value)} placeholder="Leave a comment here"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postContent">
          <Form.Label>Main Content</Form.Label>
          <Form.Control as="textarea" rows="10" onChange={e => setContent(e.target.value)} placeholder="Leave a main content here"></Form.Control>
        </Form.Group>
      </Row>
        <Button className="mt-3" variant="primary" type="submit">
          Add post
        </Button>
    </Form>
  );
};

export default PostForm;