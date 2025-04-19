'use client'
import FileExplorer from "@/components/FileExplorer";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'

type FileNode = {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
};

export default function Home() {
  const [data, setData] = useState<FileNode | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios('/data/data.json');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data ? <FileExplorer folderData={data} /> : <div>Loading...</div>
  );
}
