const IconWithGlow = ({ Icon, glowColor }) => {
  return (
    <div className="relative group">
      {Icon}
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        style={{ backgroundColor: glowColor }}
      ></div>
    </div>
  );
};

export default IconWithGlow;
