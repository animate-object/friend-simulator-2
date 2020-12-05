import React, { useEffect, useState } from "react";
import "./App.css";
import { image } from "./image";
import cafeBar from "./assets/backgrounds/cafe-bar.jpg";
import zuckerberg from "./assets/friend/zuckerberg.png";
import { Effect2, Effect1 } from "./effect";
import { containFit } from "./dim";

type CanvasFn = Effect2<CanvasRenderingContext2D, HTMLCanvasElement>;

const withCtxFactory = (canvasEl: HTMLCanvasElement | null) => {
  return (fn: CanvasFn) => {
    if (canvasEl) {
      const ctx = canvasEl.getContext("2d");
      if (ctx) {
        // ctx.imageSmoothingEnabled = true;
        // ctx.imageSmoothingQuality = "high";
        fn(ctx, canvasEl);
      }
    }
  };
};

function App() {
  const [ref, setRef] = useState<HTMLCanvasElement | null>(null);
  const withCtx = withCtxFactory(ref);
  useEffect(() => {
    image(cafeBar, (img) => {
      withCtx((ctx, el) => {
        ctx.drawImage(img, 0, 0, el.width, el.height);
      });
    });
    image(zuckerberg, (img) => {
      withCtx((ctx, el) => {
        const smallBox = { width: el.width * 0.7, height: el.height * 0.7 };
        const orig = { width: img.width, height: img.height };
        const scaled = containFit(orig, smallBox);
        ctx.drawImage(
          img,
          0,
          el.height - scaled.height,
          scaled.width,
          scaled.height
        );
      });
    });
  }, [withCtx]);
  return (
    <div className="App">
      <canvas ref={(ref) => setRef(ref)} />
    </div>
  );
}

export default App;
