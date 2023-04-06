import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const PostForm = props => {

  const navigate = useNavigate();
  const [title, setTitle] = useState(props.post ? props.post.title : '');
  const [author, setAuthor] = useState(props.post ? props.post.author : '');
  const [publishedDate, setPublishedDate] = useState(props.post ? props.post.publishedDate : '');
  const [shortDescription, setShortDescription] = useState(props.post ? props.post.shortDescription : '');
  const [content, setContent] = useState(props.post ? props.post.content : '');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const post = { title: title, author: author, publishedDate: publishedDate, shortDescription: shortDescription, content: content };
    
    if (props.isNewPost) {
      dispatch(addPost(post));
    } else {
      post.id = props.post.id;
      dispatch(editPost(post));
    }

    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter author"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postPublishedDate">
          <Form.Label>Published</Form.Label>
          <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} placeholder="Enter published date"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postShortDescription">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" rows="4" value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Leave a comment here"></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postContent">
          <Form.Label>Main Content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
        </Form.Group>
      </Row>
        <Button className="mt-3" variant="primary" type="submit">
          {
            props.isNewPost ? 'Add post' : 'Edit post'
          }
        </Button>
    </Form>
  );
};

export default PostForm;