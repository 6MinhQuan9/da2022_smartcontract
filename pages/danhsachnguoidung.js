import { css } from "@emotion/css";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Link from "next/link";
import { AccountContext } from "../context";
import { Container, Row, Col } from "react-bootstrap";

/* import contract address and contract owner address */
import { contractAddress, ownerAddress } from "../config";

/* import Application Binary Interface (ABI) */
import Blog from "../artifacts/contracts/Blog.sol/Blog.json";
import Quanlyvanbang_smartcontract from "../artifacts/contracts/BangDaiHoc.sol/BangDaiHoc.json";
import { ConstructorFragment } from "ethers/lib/utils";

export default function Home(props) {
  /* posts are fetched server side and passed in as props */
  /* see getServerSideProps */
  const { posts, totaluser } = props;
  const account = useContext(AccountContext);

  const router = useRouter();

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={9}>
            <h1>DANH SÁCH NGƯỜI DÙNG TRONG HỆ THỐNG:</h1>
            <h3>Tổng số người dùng: {totaluser}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  /* here we check to see the current environment variable */
  /* and render a provider based on the environment we're in */
  let provider;
  if (process.env.ENVIRONMENT === "local") {
    provider = new ethers.providers.JsonRpcProvider();
  } else if (process.env.ENVIRONMENT === "testnet") {
    provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.matic.today"
    );
  } else {
    provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
  }

  // const contract = new ethers.Contract(contractAddress, Blog.abi, provider)
  // const data = await contract.fetchPosts()
  // return {
  //   props: {
  //     posts: JSON.parse(JSON.stringify(data))
  //   }
  // }
  const contract = new ethers.Contract(
    contractAddress,
    Quanlyvanbang_smartcontract.abi,
    provider
  );
  const totaluser = parseInt(
    JSON.parse(JSON.stringify(await contract.totalUser())).hex,
    16
  );
  const data = await contract.DanhsachnguoidungHeThong();
  console.log("\n Index:" + data, totaluser);
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
      totaluser: totaluser,
    },
  };
}
