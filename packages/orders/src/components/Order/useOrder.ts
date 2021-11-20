import { useEffect, useState } from "react";

const useOrder = () => {
  const [open, setOpen] = useState<boolean>(false)
  return { open }
}

export default useOrder;