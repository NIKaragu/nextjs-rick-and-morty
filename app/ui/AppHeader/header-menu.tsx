import { useState } from "react";

export function HeaderMenu() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button onClick={handleMenuClick} className="flex items-center rotate-90">
      {isClicked ? (
        <>
          {/* @ts-expect-error lord-icon-issue-settings*/}
          <lord-icon
            src="https://cdn.lordicon.com/xdbaztkd.json"
            trigger="in"
            state="in-compress"
            style={{ width: 40, height: 40 }}
          >
            {/* @ts-expect-error lord-icon-issue-settings*/}
          </lord-icon>
        </>
      ) : (
        <>
          {/* @ts-expect-error lord-icon-issue-settings*/}
          <lord-icon
            src="https://cdn.lordicon.com/qzlhsleu.json"
            trigger="in"
            state="in-expand"
            style={{ width: 40, height: 40 }}
          >
            {/* @ts-expect-error lord-icon-issue-settings*/}
          </lord-icon>
        </>
      )}
    </button>
  );
}
