import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";

interface ErrorBaloonProps extends PropsWithChildren {
  reset: () => void;
}

function ErrorBaloon({ children, reset }: ErrorBaloonProps) {
  return (
    children && (
      <div className="rounded-lg p-3 m-5 flex justify-between items-center italic border border-red-500">
        {children}
        <div className="p-3 cursor-pointer" onClick={reset}>
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
    )
  );
}
export default ErrorBaloon;
