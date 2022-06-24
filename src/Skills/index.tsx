import { Dropdown } from "./dropdown";
import { Skills } from "./skills";
export function Index() {
    let props = Dropdown();
    // let {email,password,action_submit,form_data,form_errors,handleChange}=props;
    return <Skills
      {...props}
    />
  }