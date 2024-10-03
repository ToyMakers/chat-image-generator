import html2canvas from "html2canvas";
import * as clipboard from "clipboard-polyfill";
import { ClipboardItem } from "clipboard-polyfill";

export const useClipboard = (ref) => {
  const clipboardHandler = () => {
    if (ref.current) {
      html2canvas(ref.current).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            clipboard.write([new ClipboardItem({ "image/png": blob })]);
          }
        });
      });
    }
  };

  return { clipboardHandler };
};
