export interface Dim2 {
  height: number;
  width: number;
}

export const ar = (d: Dim2) => d.width / d.height;

export const containFit = (d: Dim2, target: Dim2): Dim2 => {
  const scaleFactor =
    ar(d) > ar(target) ? target.width / d.width : target.height / d.height;
  return { width: d.width * scaleFactor, height: d.height * scaleFactor };
};
