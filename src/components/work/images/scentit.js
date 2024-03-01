const importAll = async () => {
  const images = {};
  const imageFiles = import.meta.glob('../../../assets/works/Scentit/*.{png,jpg,jpeg,svg}');

  for (const path in imageFiles) {
    const imageName = path.replace(/.*\//, ''); 
    images[imageName] = (await imageFiles[path]()).default;
  }

  return images;
};

const scentitImages = await importAll();

export default scentitImages;
