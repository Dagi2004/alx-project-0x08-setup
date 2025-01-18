import React from "react";
export interface ReactComponentProps {
  children: React.ReactNode;
}
export interface GeneratedImagesProps {
  imageURL: string;
  prompt: string;
  width?: string;
  height?: string;
}
export type ImageProps = Pick<GeneratedImagesProps, "imageURL" | "prompt">;
