import { getDefaultLibFileName } from "typescript";
import { Effect1 } from "./effect";

export const image = (
  path: string,
  onLoad: Effect1<HTMLImageElement>
): HTMLImageElement => {
  const img = new Image();
  img.onload = () => {
    onLoad(img);
  };
  img.src = path;
  return img;
};
