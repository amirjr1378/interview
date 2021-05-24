// NOTE : dont change This file!
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/axios">
          <a>Axios</a>
        </Link>
      </li>
      <li>
        <Link href="/formik">
          <a>Formik</a>
        </Link>
      </li>
    </ul>
  );
}
