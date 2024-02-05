export function getALbumThumbnail(array, id) {
  return array.filter((item) => item.albumId === id)[0]?.thumbnailUrl;
}
