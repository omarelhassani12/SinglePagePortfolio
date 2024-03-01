const importAll = async () => {
  const images = {};
  const imageFiles = import.meta.glob('../../../assets/works/MedicalCabient/*.{png,jpg,jpeg,svg}');

  for (const path in imageFiles) {
    const imageName = path.replace(/.*\//, ''); 
    images[imageName] = (await imageFiles[path]()).default;
  }

  return images;
};

const medicalCabientImages = await importAll();

export default medicalCabientImages;
