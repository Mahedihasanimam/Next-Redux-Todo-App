import AddEmplye from "@/components/AddEmplye";
import ShowEmploye from "@/components/ShowEmploye";
import { DoubleRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>


    <Link  className="text-blue-500" href={'/posts'}>Go to Posts <DoubleRightOutlined />  </Link>
    <AddEmplye/>

    <ShowEmploye/>
   </main>
  );
}
