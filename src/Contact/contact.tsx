import { useContainer } from "./container";
import { View } from "./view";
export function Contact() {
  let props = useContainer();
  return <View {...props} />
}