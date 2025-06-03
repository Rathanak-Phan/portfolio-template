import { useEffect } from "react";
import Profile from "../components/Profile";

const FadeLeft = () => {
  useEffect(() => {
    const section = document.getElementById("right-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.remove("translate-x-[100%]", "opacity-0");
          section.classList.add("translate-x-0", "opacity-100");
        }
      },
      { threshold: 0.1 } // Trigger when 20% of the element is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="right-section" className="flex items-center justify-center mt-15 transform translate-x-[100%] opacity-0 transition-all duration-700 ease-out">
      <Profile />
    </div>
  );
};

export default FadeLeft;
