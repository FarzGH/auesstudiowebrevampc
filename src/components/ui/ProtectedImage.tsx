import React from "react";

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Wrapper <img> yang menonaktifkan klik-kanan / drag / seleksi gambar.
 * Dipakai untuk aset visual komunitas (logo, foto admin, dsb).
 */
export default function ProtectedImage({ className = "", ...props }: ProtectedImageProps) {
  return (
    <img
      {...props}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      className={`select-none [-webkit-touch-callout:none] pointer-events-auto ${className}`}
    />
  );
}
