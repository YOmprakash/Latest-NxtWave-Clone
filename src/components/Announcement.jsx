const AnnouncementBanner = () => {
  return (
    <div className="w-full md:h-12 px-4 py-4 bg-indigo-600 font-sans flex items-center justify-center ">
      <div className="text-white text-sm font-medium flex items-start md:items-center ">
        <span className="bg-orange-500 text-[12px] px-2 rounded-[12px] mr-2">
          NEW
        </span>
        <p className="text-left  w-[280px] md:w-full leading-6 ">
          World Economic Forum recognized NxtWave as ‘Technology Pioneer 2024.
          Know More
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
