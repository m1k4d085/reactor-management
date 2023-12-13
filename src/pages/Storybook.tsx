import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Storybook.css";
import Button from "../components/Button";
import Switch from "../components/Switch";
import { useTheme } from "../hooks/useTheme";
import TextInput from "../components/TextInput";
import ButtonGroup from "../components/ButtonGroup";
import react from "../assets/react.svg";
import Select from "../components/Select";
// import Drawer from "./components/Drawer";

function Storybook() {
  const theme = useTheme();

  return (
    // <Drawer opened>
    <div className="dark:bg-dark dark:text-light p-5">
      {/* <h2 className="text-4xl font-bold">Primary</h2> */}
      <h2 className="text-4xl font-bold">Set mode</h2>
      <Switch
        iconTrue={faSun}
        iconFalse={faMoon}
        value={theme!.modeType === "light"}
        onChange={(value) => theme?.setMode(value ? "light" : "dark")}
      />
      <h2 className="text-4xl font-bold">Set theme</h2>
      <Select
        styleType="solid"
        valueIndex={theme?.themeType === "primary" ? 0 : 1}
        options={[
          {
            children: "Primary",
            onClick: () => theme?.setTheme("primary"),
          },
          {
            children: "Secondary",
            onClick: () => theme?.setTheme("secondary"),
          },
        ]}
      />
      <div>
        <span className="text-2xl mx-5 font-bold">SOLID</span>
        <Button styleType="solid">Button</Button>
        <Button styleType="solid" disabled>
          Disabled
        </Button>
        <ButtonGroup
          styleType="solid"
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: "Click 2",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <ButtonGroup
          styleType="solid"
          disabled
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <Select
          styleType="solid"
          options={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: "Click 2",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
      </div>
      <div>
        <span className="text-2xl mx-5 font-bold">OUTLINE</span>
        <Button styleType="outline">Button</Button>
        <Button styleType="outline" disabled>
          Disabled
        </Button>
        <ButtonGroup
          styleType="outline"
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 3</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <ButtonGroup
          styleType="outline"
          disabled
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <Select
          styleType="outline"
          options={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: "Click 2",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
      </div>
      <div>
        <Switch />
        <Switch disabled />
      </div>
      <div>
        <TextInput label="Input" />
        <TextInput label="Disabled" disabled />
      </div>
      {/* <h2 className="text-4xl font-bold mt-5">Secondary</h2>
      <div>
        <span className="text-2xl mx-5 font-bold">SOLID</span>
        <Button styleType="solid">Button</Button>
        <Button styleType="solid" disabled>
          Disabled
        </Button>
        <ButtonGroup
          styleType="solid"
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <ButtonGroup
          styleType="solid"
          disabled
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <Select
          styleType="solid"
          options={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: "Click 2",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
      </div>
      <div>
        <span className="text-2xl mx-5 font-bold">OUTLINE</span>
        <Button styleType="outline">Button</Button>
        <Button styleType="outline" disabled>
          Disabled
        </Button>
        <ButtonGroup
          styleType="outline"
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <ButtonGroup
          styleType="outline"
          disabled
          buttons={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
        <Select
          styleType="outline"
          options={[
            {
              children: "Click 1",
              onClick: () => console.log("Click 1"),
            },
            {
              children: "Click 2",
              onClick: () => console.log("Click 1"),
            },
            {
              children: (
                <div className="flex gap-3 items-center">
                  <img src={react} width={30} />
                  <span>Click 2</span>
                </div>
              ),
              onClick: () => console.log("Click 1"),
            },
          ]}
        />
      </div>
      <div>
        <Switch />
        <Switch disabled />
      </div>
      <div>
        <TextInput label="Input" />
        <TextInput label="Disabled" disabled />
      </div> */}
    </div>
    // </Drawer>
  );
}

export default Storybook;
