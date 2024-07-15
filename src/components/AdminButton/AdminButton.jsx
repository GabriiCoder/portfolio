"use client"
import React from "react";
import styles from "../AdminButton/AdminButton.module.css"
export default function AdminButton() {
    return (
      <div className={styles.adminButton}>
        <a href="/Admin/Dashboard">Admin</a>
      </div>
    );
  }