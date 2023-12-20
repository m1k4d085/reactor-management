export type ModeType = "light" | "dark";
export type ThemeType = "primary" | "secondary";
export type StyleType = "solid" | "outline";
export type BorderOpenedType = "top" | "bottom";

export function generateButtonStyle(
  themeType: ThemeType = "primary",
  styleType: StyleType = "solid",
  open?: BorderOpenedType
) {
  const sharedClass = [
    "px-4",
    "py-3",
    // "m-2",
    open === "top" ? "" : "rounded-t-md",
    open === "bottom" ? "" : "rounded-b-md",
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

export function generateSwitchStyle(themeType: ThemeType, value: boolean) {
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

export function generateInputStyle(themeType: ThemeType) {
  const sharedClass = [
    "rounded",
    "border",
    "hover:ring",
    "focus:ring",
    "focus:outline-none",
    "px-3",
    "py-2",
    "disabled:ring-0",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "bg-light",
    "dark:bg-dark",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "border-primary-300",
        "hover:ring-primary-500",
        "hover:border-primary-500",
        "focus:ring-primary-700",
        "focus:border-primary-700",
        "disabled:border-primary-200",
        "dark:border-primary-700",
        "dark:hover:ring-primary-500",
        "dark:hover:border-primary-500",
        "dark:focus:ring-primary-300",
        "dark:focus:border-primary-300",
        "dark:disabled:border-primary-800",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "border-secondary-300",
        "hover:ring-secondary-500",
        "hover:border-secondary-500",
        "focus:ring-secondary-700",
        "focus:border-secondary-700",
        "disabled:border-secondary-200",
        "dark:border-secondary-700",
        "dark:hover:ring-secondary-500",
        "dark:hover:border-secondary-500",
        "dark:focus:ring-secondary-300",
        "dark:focus:border-secondary-300",
        "dark:disabled:border-secondary-800",
      ].join(" ");
      break;
  }

  return `${sharedClass} ${styledClass}`;
}

export function generateButtonGroupStyle(
  themeType: ThemeType = "primary",
  styleType: StyleType = "solid",
  isSelected?: boolean,
  open?: BorderOpenedType
) {
  const sharedClass = [
    "px-4",
    "py-3",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    open === "top" ? "" : "first:rounded-t-md",
    open === "bottom" ? "" : "last:rounded-b-md",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      switch (styleType) {
        case "solid":
          styledClass = [
            "border",
            "first:border-t",
            "border-t-0",
            "border-primary-700",
            isSelected ? "bg-primary-700" : "bg-primary-500",
            "text-light",
            "hover:bg-primary-700",
            "active:bg-primary-800",
            "disabled:bg-primary-200",
            "disabled:text-dark",
            isSelected ? "dark:bg-primary-700" : "dark:bg-primary-500",
            "dark:text-dark",
            "dark:hover:bg-primary-300",
            "dark:active:bg-primary-200",
            "dark:disabled:bg-primary-800",
            "dark:disabled:text-light",
          ].join(" ");
          break;
        case "outline":
          styledClass = [
            isSelected ? "bg-primary-300" : "bg-light",
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
            isSelected ? "dark:bg-light" : "dark:bg-dark",
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
            "border",
            "first:border-t",
            "border-t-0",
            "border-secondary-700",
            isSelected ? "bg-secondary-700" : "bg-secondary-500",
            "text-light",
            "hover:bg-secondary-700",
            "active:bg-secondary-800",
            "disabled:bg-secondary-200",
            "disabled:text-dark",
            isSelected ? "dark:bg-secondary-700" : "dark:bg-secondary-500",
            "dark:text-dark",
            "dark:hover:bg-secondary-300",
            "dark:active:bg-secondary-200",
            "dark:disabled:bg-secondary-800",
            "dark:disabled:text-light",
          ].join(" ");
          break;
        case "outline":
          styledClass = [
            isSelected ? "bg-secondary-300" : "bg-light",
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
            isSelected ? "dark:bg-light" : "dark:bg-dark",
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

export function generateDrawerStyle(
  themeType: ThemeType = "primary",
  opened: boolean
) {
  const sharedClass = [
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "bg-light",
    "dark:bg-dark",
    "z-[9999]",
    "transition-all",
    "w-full",
    "md:w-1/2",
    "lg:w-1/3",
    "xl:w-1/4",
    opened ? "shadow-xl" : "shadow",
    "border-e-2",
    "p-2",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "shadow-primary-700",
        "dark:shadow-primary-300",
        "border-primary-700",
        "dark:border-primary-300",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "shadow-secondary-700",
        "dark:shadow-secondary-300",
        "border-secondary-700",
        "dark:border-secondary-300",
      ].join(" ");
      break;
  }

  return `${sharedClass} ${styledClass}`;
}

export function getBgColor(themeType: ThemeType) {
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "text-light",
        "bg-primary-700",
        "dark:bg-primary-300",
        "dark:text-dark",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "text-light",
        "bg-secondary-700",
        "dark:bg-secondary-300",
        "dark:text-dark",
      ].join(" ");
      break;
  }
  return styledClass;
}

export function getTableStyle(themeType: ThemeType) {
  const sharedClass = [
    "w-full",
    "rounded-md",
    "overflow-hidden",
    "dark:text-light",
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [].join(" ");
      break;
    case "secondary":
      styledClass = [].join(" ");
      break;
  }
  return `${sharedClass} ${styledClass}`;
}

export function getTableRowBgColor(
  themeType: ThemeType,
  clickable: boolean = false
) {
  const sharedClass = [clickable ? "cursor-pointer" : ""].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "odd:bg-primary-300",
        clickable ? "hover:bg-primary-500" : "",
        "dark:odd:bg-primary-500",
        clickable ? "dark:hover:bg-primary-700" : "",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "odd:bg-secondary-300",
        clickable ? "hover:bg-secondary-500" : "",
        "dark:odd:bg-secondary-500",
        clickable ? "dark:hover:bg-secondary-700" : "",
      ].join(" ");
      break;
  }
  return `${sharedClass} ${styledClass}`;
}

export function getDivideXColor(themeType: ThemeType) {
  const sharedClass = ["divide-x-2"].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "even:divide-primary-300",
        "dark:even:divide-primary-100",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "even:divide-secondary-300",
        "dark:even:divide-secondary-100",
      ].join(" ");
      break;
  }
  return `${sharedClass} ${styledClass}`;
}

export function getDivideYColor(themeType: ThemeType) {
  const sharedClass = ["divide-y-2"].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = ["divide-primary-300", "dark:divide-primary-100"].join(" ");
      break;
    case "secondary":
      styledClass = ["divide-secondary-300", "dark:divide-secondary-100"].join(
        " "
      );
      break;
  }
  return `${sharedClass} ${styledClass}`;
}

export function getTextColor(themeType: ThemeType) {
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = ["text-primary-700", "dark:text-primary-300"].join(" ");
      break;
    case "secondary":
      styledClass = ["text-secondary-700", "dark:text-secondary-300"].join(" ");
      break;
  }
  return styledClass;
}

export function getRingColor(themeType: ThemeType) {
  const sharedClass = ["ring"].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = ["ring-primary-600", "dark:ring-primary-400"].join(" ");
      break;
    case "secondary":
      styledClass = ["ring-secondary-600", "dark:ring-secondary-400"].join(" ");
      break;
  }
  return `${sharedClass} ${styledClass}`;
}

export function generateNavLinkStyle(
  themeType: ThemeType = "primary",
  active: boolean,
  pending: boolean
) {
  const sharedClass = [
    "flex",
    "gap-4",
    "px-4",
    "py-3",
    "no-underline",
    "rounded-lg",
    "whitespace-pre",
    getBgColor(themeType),
  ].join(" ");
  let styledClass = "";
  switch (themeType) {
    case "primary":
      styledClass = [
        "hover:bg-primary-900",
        "dark:hover:bg-primary-400",
        pending ? "bg-primary-500" : active ? "bg-primary-900" : "",
        pending ? "dark:bg-primary-50" : active ? "dark:bg-primary-400" : "",
      ].join(" ");
      break;
    case "secondary":
      styledClass = [
        "hover:bg-secondary-900",
        "dark:hover:bg-secondary-400",
        pending ? "bg-secondary-500" : active ? "bg-secondary-900" : "",
        pending
          ? "dark:bg-secondary-50"
          : active
          ? "dark:bg-secondary-400"
          : "",
      ].join(" ");
      break;
  }

  return `${sharedClass} ${styledClass}`;
}

export function sleep(ms: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fakeLoader() {
  await sleep(1000);
  return null;
}

export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );
}
