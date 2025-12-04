"use client"

import React, { useState } from "react";

export default function FolderDetails({ params }:
  { params: Promise<{ folderName: string }> }) {

  const { folderName } = React.use(params);

  return (
    <div className="folder-details">
      <div className="folder-details-top flex items-center justify-between">
        <div className="folder-title">
          <h2 className="text-(--clr-text-light) text-[1.4rem]
           font-[500] md:text-[2rem]">
            {folderName}
          </h2>
          <div className="bookmark-count">
            <p className="text-(--clr-gray-text)">
              0 Bookmarks
            </p>
          </div>
        </div>
        <div className="folder-details-actions">
          <div className="add-bookmark">

          </div>
        </div>
      </div>
      <div className="folder-bookmarks"></div>
    </div>
  )
}