import { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) => {
  const getDropDownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };
    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;
    //initial position calculated
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;
    //check if the dropdown is out of the screen
    if (left + dropdownWidth > window.innerWidth) {
      left = window.innerWidth - dropdownWidth; // 16 is the margin
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16; // 16 is the margin
      }
    }
    if (left < 0) {
      left = 16;
    }
    return { top, left };
  };
  return { getDropDownPosition };
};
