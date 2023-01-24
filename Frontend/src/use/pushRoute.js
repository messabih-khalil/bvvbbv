// ** Imports
import { useRouter } from "vue-router";

export function pushRout() {
  const router = useRouter();
  // !! could be a speciality route or docs route
  const pushToNextRoute = (id, route) => {
    router.push({ name: `${route}`, params: { id: id } });
  };

  return { pushToNextRoute };
}
