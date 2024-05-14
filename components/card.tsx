import Image from "next/image";
import nextimage from "@/public/youtube.jpg";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const MyCard = () => {
  return (
    <div className="rounded-md border-s">
      <Image
        src={nextimage}
        alt="Picture of the author"
        width={400}
        height={400}
      />
      <div className="pt-3 flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl">Lorem, ipsum dolor sit amet consectetur.</h1>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
