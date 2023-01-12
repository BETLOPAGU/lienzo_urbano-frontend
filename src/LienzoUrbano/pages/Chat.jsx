/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { LUNavbar } from 'LienzoUrbano/components/LUNavbar';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

export const Chat = () => {
  const [searchContact, setSearchContact] = React.useState(undefined);
  const [activeUser, setActiveUser] = React.useState(undefined);
  const [yourMessage, setYourMessage] = React.useState(undefined);
  const [message, setMessage] = React.useState('');
  const [chatConversation, setChatConversation] = React.useState([]);

  const currentUserId = localStorage.getItem('userId');

  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("chat-page");
    return function cleanup() {
      document.body.classList.remove("chat-page");
    };
  }, []);

  const LIST_OF_COMMENTED_USERS_QUERY = gql`
    query ListOfCommentedUsers {
      listOfCommentedUsers {
        id
        firstName
        lastName
        photoUrl
      }
    }
  `;
  const LIST_OF_COMMENTED_USERS_DATA = useQuery(LIST_OF_COMMENTED_USERS_QUERY);
  const listOfCommentedUsers = LIST_OF_COMMENTED_USERS_DATA?.data?.listOfCommentedUsers || []
  if (!activeUser && listOfCommentedUsers.length > 0) setActiveUser(listOfCommentedUsers[0])

  const CHAT_CONVERSATION_QUERY = gql`
    query ChatConversation($userId: Int!) {
      chatConversation(userId: $userId) {
        id
        commentatorId
        comment
        userId
        artworkId
        commentId
        createdDate
      }
    }
  `;
  const CHAT_CONVERSATION_DATA = useQuery(CHAT_CONVERSATION_QUERY, {
    variables: {
      userId: activeUser?.id || 0
    }
  });
  const tempChatConversation = CHAT_CONVERSATION_DATA?.data?.chatConversation || []
  if (chatConversation.length === 0 && tempChatConversation.length > 0) setChatConversation(tempChatConversation)

  const CREATE_COMMENT_QUERY = gql`
    mutation CreateComment($createCommentInput: CreateCommentInput!) {
      createComment(createCommentInput: $createCommentInput) {
        id
        commentatorId
        comment
        userId
        artworkId
        commentId
        createdDate
      }
    }
  `;
  const [createComment, { loading, data }] = useMutation(CREATE_COMMENT_QUERY, {
    variables: {
      createCommentInput: {
        comment: message,
        userId: activeUser?.id
      }
    }
  });

  const COMMENTS_SUBSCRIPTION = gql`
    subscription CommentAdded($userId: Int) {
      commentAdded(userId: $userId) {
        id
        commentatorId
        comment
        userId
        artworkId
        commentId
        createdDate
      }
    }
  `;

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  
  const createCommentButton = async () => {
    const comment = await createComment()
    const newChatConversation = [...chatConversation, comment.data.createComment]
    setChatConversation(newChatConversation)
    setMessage("");
  }

  return (
    <>
      <LUNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="section mt-5">
          <Container>
            <h2 className="title">Chat</h2>
            <Row className="flex-row">
              <Col lg="4">
                <Card className="card-plain">
                  {/* <CardHeader className="mb-3">
                    <InputGroup
                      className={classnames("form-control-lg", {
                        "input-group-focus": searchContact
                      })}
                    >
                      <Input
                        placeholder="Search contact"
                        type="text"
                        onFocus={(e) => setSearchContact(true)}
                        onBlur={(e) => setSearchContact(false)}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="tim-icons icon-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </CardHeader> */}
                  <ListGroup className="list-group-chat" flush>
                  {
                      listOfCommentedUsers.map(user => (
                        <ListGroupItem
                        href="#pablo"
                        onClick={(e) => {
                          setActiveUser(user);
                          setChatConversation([]);
                        }}
                        tag="a"
                        key={user.id}
                        className={classnames({
                          "active": user.id === activeUser?.id
                        })}
                      >
                        <Media>
                          <img
                            alt="..."
                            className="avatar"
                            src={user.photoUrl}
                          />
                          <Media body className="ml-2">
                            <div className="justify-content-between align-items-center">
                              <h6 className="mb-0">{user.firstName} {user.lastName}</h6>
                              { 
                                user.id !== activeUser?.id ?  
                                <div>
                                  <small className="text-muted">1 hour ago</small>
                                </div> 
                                : null
                              }                              
                            </div>
                          </Media>
                        </Media>
                      </ListGroupItem>
                      ))
                    }
                  </ListGroup>
                </Card>
              </Col>
              <Col lg="8">
                <Card className="card-plain card-chat">
                  <CardHeader className="d-inline-block">
                    <Row>
                      <Col md="10">
                        <Media className="align-items-center">
                          <img
                            alt="..."
                            className="avatar"
                            src={activeUser?.photoUrl}
                          />
                          <Media body>
                            <h6 className="mb-0 d-block">{activeUser?.firstName} {activeUser?.lastName}</h6>
                          </Media>
                        </Media>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>


                  {
                      chatConversation.map(chat => {

                        return currentUserId === chat.commentatorId ? 
                        (
                          <Row key={chat.id} className="justify-content-start">
                            <Col xs={{ size: "auto" }}>
                              <Card>
                                <CardBody className="p-2">
                                  <p className="mb-1">
                                    {chat.comment}
                                  </p>
                                  <div>
                                    <small className="opacity-60">
                                      <i className="far fa-clock" /> 3:14am
                                    </small>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        )
                        :
                        (
                          <Row key={chat.id} className="justify-content-end text-right">
                            <Col xs={{ size: "auto" }}>
                              <Card className="bg-primary text-white">
                                <CardBody className="p-2">
                                  <p className="mb-1">
                                    {chat.comment}<br />
                                  </p>
                                  {/* <div>
                                    <small className="opacity-60">3:30am</small>{" "}
                                    <i className="tim-icons icon-check-2" />
                                  </div> */}
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        )
                      })
                    }
                    {/* <Row className="justify-content-start">
                      <Col xs={{ size: "auto" }}>
                        <Card>
                          <CardBody className="p-2">
                            <div className="spinner">
                              <div className="bounce1" />
                              <div className="bounce2" />
                              <div className="bounce3" />
                            </div>
                            <p className="d-inline-block mr-2">Typing...</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row> */}
                  </CardBody>
                  <CardFooter className="d-block">
                    <Form className="align-items-center">
                      <InputGroup
                        className={classnames("d-flex", "form-control-lg", {
                          "input-group-focus": yourMessage
                        })}
                      >
                        <InputGroupAddon addonType="prepend" className="d-flex">
                          <InputGroupText>
                            <i className="tim-icons icon-pencil" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Tu mensaje"
                          type="text"
                          onFocus={(e) => setYourMessage(true)}
                          onBlur={(e) => setYourMessage(false)}
                          onChange={handleChange}
                          value={message}
                        />
                        <Button onClick={(e) => createCommentButton()} className="btn-simple ml-2" color="primary">
                          <i className="tim-icons icon-send" />
                        </Button>
                      </InputGroup>
                    </Form>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
