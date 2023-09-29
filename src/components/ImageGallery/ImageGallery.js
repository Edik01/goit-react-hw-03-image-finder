import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className="gallery">
      {hits.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            previewURL={item.previewURL}
            tags={item.tags}
          />
        );
      })}
    </ul>
  );
};
