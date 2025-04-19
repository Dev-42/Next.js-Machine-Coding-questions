'use client'
import React, { useState } from 'react'


type FileNode = {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
};

interface FileExplorerProps {
  folderData: FileNode;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ folderData }) => {
  const [showChildren,setShowChildren] = useState<boolean>(false)
  const handleClick = () => {
    setShowChildren(!showChildren)
  }
  return (
    <div className='border-l p-[1rem]'>
      <h5 className='m-[0.5rem]'>{folderData?.type === 'folder' ? (showChildren ?'📂' :'📁') : '📖'}{" "}<span className='cursor-pointer' onClick={handleClick}>{folderData?.name}</span></h5>
      {
        folderData.type ==='folder' && Array.isArray(folderData.children) && folderData.children?.length > 0 && (
          <div className='ml-[1rem]'>
             {
              showChildren && folderData.children.map((childData,index) => (
                <FileExplorer key={index} folderData={childData}/>
              ))
             } 
          </div>
        )
      }
    </div>
  );
};

export default FileExplorer
