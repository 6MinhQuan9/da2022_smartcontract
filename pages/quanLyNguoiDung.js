import { Row, Form, Col, Button, Collapse } from "react-bootstrap";
import { useState, useRef, useEffect } from "react"; // new
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { css } from "@emotion/css";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import Link from "next/link";

/* import contract address and contract owner address */
import { contractAddress } from "../config";

import Quanlyvanbang_smartcontract from "../artifacts/contracts/BangDaiHoc.sol/BangDaiHoc.json";

import Blog from "../artifacts/contracts/Blog.sol/Blog.json";
import AddNewUser from "../components/AddNewUser";
import ModifyUser from "../components/ModifyUser";

/* define the ipfs endpoint */
const client = create("https://ipfs.infura.io:5001/api/v0");

/* configure the markdown editor to be client-side import */
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const initialState = { title: "", content: "" };

function userManagement() {
  /* configure initial state to be used in the component */
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fileRef = useRef(null);
  const { title, content } = post;
  const router = useRouter();

  async function Getinfo() {
    console.log("test Getinfo");
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        Quanlyvanbang_smartcontract.abi,
        provider
      );
      const data = await contract.DanhsachnguoidungHeThong();
      console.log("\n Danh sách người dùng:" + data);
    } else {
      console.log("no windows define");
    }
  }

  return (
    <>
      <AddNewUser/>
      <ModifyUser/>
    </>
  );
}

export default userManagement;
