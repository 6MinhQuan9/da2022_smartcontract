import {
  Row,
  InputGroup,
  Col,
  Button,
  FormControl,
  Table,
  Container,
} from "react-bootstrap";
import "easymde/dist/easymde.min.css";
import { css } from "@emotion/css";
import { useForm } from "react-hook-form";

export default function findStudentById() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center">
              <input {...register("diplomaCode")} className="w-75"/>
              <input type="submit" />
            </form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={6} className="">
            <Table bordered hover className="">
              <thead className="">
                <tr>
                  <th>THÔNG TIN SINH VIÊN:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MÃ SINH VIÊN:</td>
                </tr>
                <tr>
                  <td>TÊN SINH VIÊN:</td>
                </tr>
                <tr>
                  <td>NGÀY SINH:</td>
                </tr>
                <tr>
                  <td>GIỚI TÍNH:</td>
                </tr>
                <tr>
                  <td>NƠI SINH:</td>
                </tr>
                <tr>
                  <td>DÂN TỘC:</td>
                </tr>
                <tr>
                  <td>QUỐC TỊCH:</td>
                </tr>
                <tr>
                  <td>LỚP:</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
