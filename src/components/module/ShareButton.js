"use client"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import styles from "@/module/ShareButton.module.css";
import { useEffect, useState } from "react";

function ShareButton() {
    const[url, setUrl]= useState("")
    useEffect(()=>{
        setUrl(window.location.href)
    },[])
  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <span>اشتراک گذاری</span>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
