import axios from "axios";
import IUser from '../types/user';
// you don't need anything else to import

interface Props  {
  // TODO: add user type
}

export default function Home(props: Props) {
  // TODO: once you get data map through data and show them name
  return <div>Simple Axios And Data Fetching => Edit src/pages/axios.tsx</div>;
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
