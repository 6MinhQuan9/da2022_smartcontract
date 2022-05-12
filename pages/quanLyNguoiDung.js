import { Row, Form, Col, Button, Collapse } from "react-bootstrap";
import "easymde/dist/easymde.min.css";
import { css } from "@emotion/css";

export default function userManagement() {
  return (
    <>
      <div className={container}>
        <div className={userForm}>
          <Row className={formHeader}>
            <Col>Thêm người dùng</Col>
          </Row>
          <Form className={formContent}>
            <Form.Group>
              <Form.Label>Địa chỉ</Form.Label>
              <Col>
                <Form.Control className={inputText} type="text" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên người dùng</Form.Label>
              <Col>
                <Form.Control className={inputText} type="text" />
              </Col>
            </Form.Group>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  Lưu
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className={userForm}>
          <Row className={formHeader}>
            <Col>Sửa thông tin người dùng</Col>
          </Row>
          <Form className={formContent}>
            <Form.Group>
              <Form.Label>Địa chỉ</Form.Label>
              <Col>
                <Form.Control className={inputText} type="text" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên người dùng</Form.Label>
              <Col>
                <Form.Control className={inputText} type="text" />
              </Col>
            </Form.Group>
            <Form.Group className={checkBox}>
              <Col>
                <Form.Check type="checkbox" />
              </Col>
              <Form.Label>Quyền admin</Form.Label>
            </Form.Group>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  Lưu
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className={userForm}>
          <Row className={formHeader}>
            <Col>Thông tin người dùng đang đăng nhập</Col>
          </Row>
          <Form className={formContent}>
            <Form.Group>
              <Form.Label>Địa chỉ</Form.Label>
              <Col></Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên người dùng</Form.Label>
              <Col></Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

const container = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const userForm = css`
  border: 1px solid black;
  margin-bottom: 20px;
  width: 50%;
`;

const formHeader = css`
  background-color: black;
  color: #fff;
  padding: 12px;
`;

const formContent = css`
  padding: 12px;
`;

const inputText = css`
  width: 100%;
`;

const checkBox = css`
  display: flex;
  justify-content: end;
`;
