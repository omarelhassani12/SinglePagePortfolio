
const importAll = async () => {
  const images = {};
  const imageFiles = import.meta.glob('../../../assets/works/Tabibi/*.{png,jpg,jpeg,svg}');
  await Promise.all(Object.entries(imageFiles).map(async ([path, module]) => {
    const imageName = path.replace('../../../assets/works/Tabibi/', '');
    const imageModule = await module();
    images[imageName] = imageModule.default;
  }));
  return images;
};

const images = await importAll();

export default images;
