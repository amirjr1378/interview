import axios from "axios";
import IUser from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
}

export default function AxiosTest(props: Props) {
  console.log(props);

  // TODO: once you get data map through data and show them name
  return <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx</div>;
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("http://localhost:3000/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
