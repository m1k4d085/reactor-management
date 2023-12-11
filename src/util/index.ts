export type ModeType = "light" | "dark";
export type ThemeType = "primary" | "secondary";
export type StyleType = "solid" | "outline";

export function generateButtonStyle(
  themeType: ThemeType = "primary",
  styleType: StyleType = "solid"
) {
  const sharedClass = [
    "px-4",
    "py-3",
    "m-2",
    "rounded-md",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      switch (styleType) {
        case "solid":
          styledClass = [
            "bg-primary-500",
            "text-light",
            "hover:bg-primary-700",
            "active:bg-primary-800",
            "disabled:bg-primary-200",
            "disabled:text-dark",
            "dark:bg-primary-500",
            "dark:text-dark",
            "dark:hover:bg-primary-300",
            "dark:active:bg-primary-200",
            "dark:disabled:bg-primary-800",
            "dark:disabled:text-light",
          ].join(" ");
          break;
        case "outline":
          styledClass = [
            "bg-light",
            "text-primary-700",
            "border",
            "border-primary-700",
            "hover:bg-primary-700",
            "hover:text-light",
            "active:bg-primary-800",
            "active:border-primary-800",
            "disabled:bg-light",
            "disabled:border-primary-200",
            "disabled:text-primary-700",
            "dark:bg-dark",
            "dark:text-primary-300",
            "dark:border",
            "dark:border-primary-300",
            "dark:hover:text-light",
            "dark:active:bg-primary-200",
            "dark:active:border-primary-200",
            "dark:active:text-dark",
            "dark:disabled:bg-dark",
            "dark:disabled:border-primary-800",
            "dark:disabled:text-primary-300",
          ].join(" ");
          break;
      }
      break;
    case "secondary":
      switch (styleType) {
        case "solid":
          styledClass = [
            "bg-secondary-500",
            "text-light",
            "hover:bg-secondary-700",
            "active:bg-secondary-800",
            "disabled:bg-secondary-200",
            "disabled:text-dark",
            "dark:bg-secondary-500",
            "dark:text-dark",
            "dark:hover:bg-secondary-300",
            "dark:active:bg-secondary-200",
            "dark:disabled:bg-secondary-800",
            "dark:disabled:text-light",
          ].join(" ");
          break;
        case "outline":
          styledClass = [
            "bg-light",
            "text-secondary-700",
            "border",
            "border-secondary-700",
            "hover:bg-secondary-700",
            "hover:text-light",
            "active:bg-secondary-800",
            "active:border-secondary-800",
            "disabled:bg-light",
            "disabled:border-secondary-200",
            "disabled:text-secondary-700",
            "dark:bg-dark",
            "dark:text-secondary-300",
            "dark:border",
            "dark:border-secondary-300",
            "dark:hover:text-light",
            "dark:active:bg-secondary-200",
            "dark:active:border-secondary-200",
            "dark:active:text-dark",
            "dark:disabled:bg-dark",
            "dark:disabled:border-secondary-800",
            "dark:disabled:text-secondary-300",
          ].join(" ");
          break;
      }
      break;
  }

  return `${sharedClass} ${styledClass}`;
}

export function generateContainerSwitchStyle(
  themeType: ThemeType,
  value: boolean,
  disabled?: boolean
) {
  const sharedClass = [
    "rounded-full",
    "h-5",
    "w-10",
    "relative",
    "border-2",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    disabled ? "opacity-50" : "",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "border-primary-500",
        value ? "bg-primary-300" : "bg-primary-100",
        value ? "dark:bg-primary-700" : "dark:bg-primary-100",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "border-secondary-500",
        value ? "bg-secondary-300" : "bg-secondary-100",
        value ? "dark:bg-secondary-700" : "dark:bg-secondary-100",
      ].join(" ");
      break;
  }

  return `${sharedClass} ${styledClass}`;
}

export function generateSwitchStyle(
    themeType: ThemeType,
    value: boolean,
  ) {
    const sharedClass = [
      "rounded-full",
      "h-6",
      "w-6",
      "absolute",
      "z-10",
      "top-[-4px]",
      "left-[-4px]",
      "flex",
      "justify-center",
      "items-center",
      "transition-transform",
    ].join(" ");
    let styledClass = "";
    switch (themeType) {
      case "primary":
        styledClass = [
          value ? "bg-primary-800" : "bg-primary-500",
          value ? "dark:bg-primary-500" : "dark:bg-primary-300",
        ].join(" ");
        break;
      case "secondary":
        styledClass = [
          value ? "bg-secondary-800" : "bg-secondary-500",
          value ? "dark:bg-secondary-500" : "dark:bg-secondary-300",
        ].join(" ");
        break;
    }
  
    return `${sharedClass} ${styledClass}`;
  }