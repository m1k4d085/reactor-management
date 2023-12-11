import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Button from "./components/Button";
import Switch from "./components/Switch";
import { useTheme } from "./hooks/useTheme";

function App() {
  const theme = useTheme();

  return (
    <div className="dark:bg-dark dark:text-light">
      <h2 className="text-4xl font-bold">Primary</h2>
      <div>
        <span className="text-2xl mx-5 font-bold">SOLID</span>
        <Button themeType="primary" styleType="solid">
          Button
        </Button>
        <Button themeType="primary" styleType="solid" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <span className="text-2xl mx-5 font-bold">OUTLINE</span>
        <Button themeType="primary" styleType="outline">
          Button
        </Button>
        <Button themeType="primary" styleType="outline" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Switch themeType="primary" />
        <Switch themeType="primary" disabled />
        <Switch
          themeType="primary"
          iconTrue={faSun}
          iconFalse={faMoon}
          value={theme!.modeType === "light"}
          onChange={(value) => theme?.setMode(value ? "light" : "dark")}
        />
      </div>
      <h2 className="text-4xl font-bold mt-5">Secondary</h2>
      <div>
        <span className="text-2xl mx-5 font-bold">SOLID</span>
        <Button themeType="secondary" styleType="solid">
          Button
        </Button>
        <Button themeType="secondary" styleType="solid" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <span className="text-2xl mx-5 font-bold">OUTLINE</span>
        <Button themeType="secondary" styleType="outline">
          Button
        </Button>
        <Button themeType="secondary" styleType="outline" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Switch themeType="secondary" />
        <Switch themeType="secondary" disabled />
      </div>
    </div>
  );
}

export default App;
