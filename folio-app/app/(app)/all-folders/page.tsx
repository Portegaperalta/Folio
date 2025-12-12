'use client'

import { useState } from "react";
import CreateFolderButton from "@/components/CreateFolderButton";
import CreateFolderForm from "@/components/CreateFolderForm";

export default function AllFolders() {
  const [isFolderFormVisible, setIsFolderFormVisible] = useState<boolean>(false);

  return (
    <div className="all-folders pt-4">
      {/*dark overlay*/}
      {isFolderFormVisible && (
        <div className="fixed inset-0 bg-black/60 z-40"></div>
      )}
      <div className="all-folders-content space-y-10">
        <div className="all-folders-top flex items-center justify-between">
          <div className="title">
            <h2 className="text-(--clr-text-light) text-[1.4rem]
           font-[500] md:text-[2rem]">
              All Folders
            </h2>
            <p className="text-(--clr-gray-text)">
              0 Folders
            </p>
          </div>
          <CreateFolderButton setIsFolderFormVisible={setIsFolderFormVisible} />
        </div>
        <CreateFolderForm
          isFolderFormVisible={isFolderFormVisible}
          setIsFolderFormVisible={setIsFolderFormVisible}
        />
        <div className="all-folders-list grid grid-flow-row grid-cols-2
         md:grid-cols-3 lg:grid-cols-6 gap-y-8"></div>
      </div>
    </div>
  )
}