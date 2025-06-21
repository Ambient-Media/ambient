import backgroundImage from "@assets/pexels-gsn-travel-28539582_1750476926875.jpg";

export function FixedBackground() {
  return (
    <div 
      className="fixed-background"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    />
  );
}
