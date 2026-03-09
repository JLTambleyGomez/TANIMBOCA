import { redirect } from "next/navigation";

export default function NotFound() {
    console.log("NotFound");
    redirect("/");
  
  return null;
}