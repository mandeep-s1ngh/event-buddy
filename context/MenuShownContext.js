import { createContext, useState } from 'react';

export const MenuShownContext = createContext();

export const MenuShownProvider = (props) => {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <MenuShownContext.Provider value={{ menuShown, setMenuShown }}>
      {props.children}
    </MenuShownContext.Provider>
  );
};
