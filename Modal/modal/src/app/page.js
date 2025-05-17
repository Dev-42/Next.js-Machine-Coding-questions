'use client'
import Image from "next/image";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} setIsOpen={setIsOpen}/>
  );
}
