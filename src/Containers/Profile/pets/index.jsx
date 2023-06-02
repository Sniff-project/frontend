import React from "react";
import { GalleryBlock } from "@components/smart/Gallery";

export default function PetsGallery({ gallery }) {
  return (
    <div className="gallery" style={{ minHeight: "800px" }}>
      <div className="container2000">
        <div className="gallery-container">
          <GalleryBlock
            gallery={{ content: gallery }}
            isLoading={false}
            error={false}
          />
        </div>
      </div>
    </div>
  );
}
