const images = import.meta.glob('./*.webp', { eager: true });
const brand_logo = {};

Object.keys(images).forEach((path) => {
  const id = parseInt(path.match(/(\d+)\.webp$/)?.[1]);
  if (id) brand_logo[id] = images[path].default;
});

export { brand_logo };
