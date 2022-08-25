import { FC } from "react";
import "./SButton.scss";
import { ISButtonProps } from "./types";

export const SButton: FC<ISButtonProps> = ({ dummy }) => {
  return (
    <div className="SButton__container">
      <h1>{dummy}</h1>
    </div>
  );
};
