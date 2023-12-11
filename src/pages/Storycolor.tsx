import "./Storycolor.css";

function Storycolor() {
  return (
    <div className="h-screen flex dark:bg-dark">
      <div className="h-screen flex-grow bg-light dark:bg-dark dark:text-light">
        Light
      </div>
      <div className="h-screen flex-grow bg-primary-500 dark:bg-primary-200 text-light dark:text-dark">
        Primary
      </div>
      <div className="h-screen flex-grow bg-secondary-500 dark:bg-secondary-200 text-light dark:text-dark">
        Secondary
      </div>
      <div className="h-screen flex-grow bg-dark text-light dark:bg-light dark:text-dark">
        Dark
      </div>
    </div>
  );
}

export default Storycolor;
