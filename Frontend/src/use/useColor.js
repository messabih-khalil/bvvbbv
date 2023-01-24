import { useColorStore } from "../stores/cardInfo";

import { defineProps } from "vue";

export function componentColor(color) {
  const { setColor } = useColorStore();

  const props = defineProps(["compColor"]);

  // set color when change page

  onBeforeUnmount(() => {
    setColor(colorComp);
  });
  
}
