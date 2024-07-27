const GroupProfileImage = () => {
  return (
    <div className="relative w-16 h-16">
      <img
        src="/assets/logo/default-user.jpg"
        alt="Profile 1"
        className="absolute w-10 h-10 rounded-full border-2 border-white"
        style={{ left: 0, zIndex: 10 }}
      />
      <img
        src="https://admin.pirus.app/uploads/IMG_7632_611830349a.jpg"
        alt="Profile 2"
        className="absolute w-10 h-10 rounded-full border-2 border-white"
        style={{ left: "30%", zIndex: 20 }}
      />
    </div>
  );
};

export default GroupProfileImage;
