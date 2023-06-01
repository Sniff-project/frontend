import React from "react";
import { GalleryBlock, SortingSelects } from "@components/smart/Gallery";

export default function PetsGallery({ gallery }) {
  return (
    <div className="gallery" style={{ minHeight: "800px" }}>
      <div className="container2000">
        <div className="gallery-container">
          <SortingSelects
            currentSlideIndex={0}
            handleIsChanged={() => {}}
            hideRegion={true}
            hideCity={true}
          />

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
