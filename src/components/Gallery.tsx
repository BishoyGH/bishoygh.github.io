import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { MasonryPhotoAlbum } from "react-photo-album";

import { optSlides, slides } from "@/content/site/slides";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/masonry.css";
import { LoaderCircle } from "lucide-react";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const zoomRef = useRef(null);
  return (
    <section className="mx-auto p-8">
      <MasonryPhotoAlbum
        photos={optSlides}
        spacing={24}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1;
          if (containerWidth < 600) return 2;
          if (containerWidth < 768) return 3;
          if (containerWidth < 1024) return 4;
          return 5;
        }}
        skeleton={
          <div className="mx-auto py-20">
            <LoaderCircle className="animate-spin" size={64} />
          </div>
        }
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        plugins={[Zoom]}
        slides={slides}
        zoom={{ ref: zoomRef }}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </section>
  );
}
