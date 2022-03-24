/** @format */

import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import UploadCategory from "../UploadCategory/UploadCategory";
import { Wraper, Form, CategoryForm } from "./UploadFilesElements";

export default function UploadForm({ files, setFiles, selectedCategory }) {
  const types = ["image/png", "image/jpeg"];

  const selectedFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <Form>
      <input
        disabled={selectedCategory != "choose" ? false : true}
        onChange={(e) => {
          selectedFiles(e);
        }}
        type="file"
        name="img"
        id="img"
        multiple
      />
      <div className="output">
        {files
          ? files.map((file) => {
              return (
                <div key={file.name}>
                  <div>{file.name}</div>
                  <ProgressBar
                    file={file}
                    setFiles={setFiles}
                    selectedCategory={selectedCategory}
                  />
                </div>
              );
            })
          : null}
      </div>
    </Form>
  );
}
