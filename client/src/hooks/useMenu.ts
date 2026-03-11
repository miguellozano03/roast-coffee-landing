import { useState, useEffect } from "react";
import { type MenuItemDTO } from "@interfaces/menu";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItemDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getMenuItems = async () => {
    try {
      setLoading(true);
      const response = await fetch("/menu/menu.json");
      if (!response.ok) {
        throw new Error(`An error an occurred: ${response.status}`);
      }
      const data: MenuItemDTO[] = await response.json();
      setMenu(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error ocurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return { menu, loading, error };
};
