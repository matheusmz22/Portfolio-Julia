function CostumeGallery({title, role, directed, heroImage, images}) {
  return (
    <div className="text-brownText  my-10">
      <h1 className="w-fit mx-auto font-semibold text-xl">{title}</h1>
      <h2 className="w-fit mx-auto text-center text-md px-2 mt-2">{role}</h2>
      <h3 className="w-fit mx-auto text-center text-sm ">{directed}</h3>
    </div>
  );
}

export default CostumeGallery;
