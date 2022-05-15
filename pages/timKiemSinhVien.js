import { Row, Col, Table, Image, Container } from "react-bootstrap";
import { useState, useRef, useEffect } from "react"; // new
import "easymde/dist/easymde.min.css";
import { css } from "@emotion/css";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

/* import contract address and contract owner address */
import { contractAddress } from "../config";

import Quanlyvanbang_smartcontract from "../artifacts/contracts/BangDaiHoc.sol/BangDaiHoc.json";
export default function findStudentById() {
  // const [datauser, setdatauser] = useState({"address":"","username":"","isAdmin":false})
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    GetSVinfo();
  }, [id]);
  async function GetSVinfo() {
    /* we first fetch the individual post by ipfs hash from the network */
    if (!id) return;
    let provider;
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "local") {
      provider = new ethers.providers.JsonRpcProvider();
    } else if (process.env.NEXT_PUBLIC_ENVIRONMENT === "testnet") {
      provider = new ethers.providers.JsonRpcProvider(
        "https://rpc-mumbai.matic.today"
      );
    } else {
      provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-rpc.com/"
      );
    }
    const contract = new ethers.Contract(
      contractAddress,
      Quanlyvanbang_smartcontract.abi,
      provider
    );
    const val = await contract.DanhsachnguoidungHeThong();
    console.log("Lay thong tin nguoi dung:", val);
    // const data={"address":"","username":"","isAdmin":false}
    // data.address = val[0]
    // data.username = val[1]
    // data.isAdmin = val[2]
    // console.log(data)
    // setdatauser(data)
  }
  return (
    <>
      <Container fluid>
        <div className="student__info--container">
          <Row className="justify-content-center">
            <Col xs={6}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex justify-content-center"
              >
                <input {...register("diplomaCode")} className="w-75" />
                <input type="submit" />
              </form>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={2} className="d-flex align-items-center">
              <Image src="#" />
            </Col>
            <Col xs={2} className="user__table--info">
              <Table bordered hover>
                <thead>
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
          <Row className="justify-content-center">
            <Col xs={6}>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Môn học</th>
                    <th>Số TC</th>
                    <th>Điểm số</th>
                    <th>Điểm chữ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Công nghệ mạng máy tính (Mạng máy tính)</td>
                    <td>3</td>
                    <td>6.4</td>
                    <td>C+</td>
                  </tr>
                  <tr>
                    <td>Công nghệ mạng máy tính (Mạng máy tính)</td>
                    <td>3</td>
                    <td>6.4</td>
                    <td>C+</td>
                  </tr>
                  <tr>
                    <td>Công nghệ mạng máy tính (Mạng máy tính)</td>
                    <td>3</td>
                    <td>6.4</td>
                    <td>C+</td>
                  </tr>
                  <tr>
                    <td>Công nghệ mạng máy tính (Mạng máy tính)</td>
                    <td>3</td>
                    <td>6.4</td>
                    <td>C+</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
