import Image from "next/image";
import { Inter } from "next/font/google";
import Login from './login/index.tsx';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Login />
  );
}
