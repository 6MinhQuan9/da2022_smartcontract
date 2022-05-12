import {
  Row,
  InputGroup,
  Col,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import "easymde/dist/easymde.min.css";
import { css } from "@emotion/css";

export default function findStudentById() {
  return (
    <>
      <div>
        <Row className={searchInput}>
          <InputGroup>
            <InputGroup.Text>Mã Sinh Viên</InputGroup.Text>
            <FormControl />
            <Button>Button</Button>
          </InputGroup>
        </Row>
        <Row className={contentForm}>
          <Col className={tableForm}>
            <Table className={table}>
              <thead className={tableHeader}>
                <tr>
                  <th>Thông tin sinh viên</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mã sinh viên</td>
                </tr>
                <tr>
                  <td>Tên sinh viên</td>
                </tr>
                <tr>
                  <td>Ngày sinh</td>
                </tr>
                <tr>
                  <td>Giới tính</td>
                </tr>
                <tr>
                  <td>Nơi sinh</td>
                </tr>
                <tr>
                  <td>Dân tộc</td>
                </tr>
                <tr>
                  <td>Quốc tịch</td>
                </tr>
                <tr>
                  <td>Lớp</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className={tableForm}>
            <Table className={table}>
              <thead className={tableHeader}>
                <tr>
                  <th>Thông tin bằng tốt nghiệp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Số hiệu</td>
                </tr>
                <tr>
                  <td>Tên sinh viên</td>
                </tr>
                <tr>
                  <td>Ngày sinh</td>
                </tr>
                <tr>
                  <td>Năm tốt nghiệp</td>
                </tr>
                <tr>
                  <td>Xếp loại</td>
                </tr>
                <tr>
                  <td>Hình thức đào tạo</td>
                </tr>
                <tr>
                  <td>Ngày cấp</td>
                </tr>
                <tr>
                  <td>Số vào sổ</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
}

const searchInput = css`
  display: flex;
  justify-content: center;
`;

const contentForm = css`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const tableForm = css`
  border: 1px solid black;
`;

const table = css`
  width: 500px;
`;

const tableHeader = css`
  background-color: black;
  color: #fff;
`;
