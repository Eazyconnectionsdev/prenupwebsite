import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";

import { HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbHomeFilled } from "react-icons/tb";

const buttonTitlesAndHrefs = [
  {
    title: "Give Us A Call",
    href: "/contact-us",
    icon: <HiPhone className="w-5 h-5 shrink-0" />,
  },
  {
    title: "Whatsapp Us",
    href: "#",
    icon: <IoLogoWhatsapp className="w-5 h-5 shrink-0" />,
  },
  {
    title: "Book A Free Consultation",
    href: "/free-consultation",
    icon: <TbHomeFilled className="w-5 h-5 shrink-0" />,
  },
];

const ConsultationModal = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setIsMount] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);


  React.useEffect(() => {
    setIsMount(true);

    const timer = setTimeout(() => {
      setIsOpen(true);
    },15000)

    return () => clearTimeout(timer);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[650px]">
        <div className="">
          <DialogTitle className="text-[20px] font-semibold text-navy-deep mt-3 text-center">
            Let's get started on your agreement
          </DialogTitle>

          <div className="flex flex-col gap-3 px-12 mt-4">
            {buttonTitlesAndHrefs.map((button, index) => (
              <DialogClose asChild key={index + button.title}>
                <Link href={button.href}>
                  <div className="bg-gradient-to-r from-primary rounded-lg py-1.5 text-white shadow-md to-secondary hover:from-secondary hover:to-primary cursor-pointer flex items-center gap-3 justify-center text-lg font-medium">
                    {button.icon} {button.title}
                  </div>
                </Link>
              </DialogClose>
            ))}

            {/* <div className="bg-gradient-to-r from-primary rounded-lg py-1.5 text-white shadow-md to-secondary hover:from-secondary hover:to-primary cursor-pointer flex items-center gap-3 justify-center text-lg font-medium">
              <HiPhone className="w-5 h-5 shrink-0" /> Give Us A Call
            </div>
            <div className="bg-gradient-to-r from-primary rounded-lg py-1.5 text-white shadow-md to-secondary hover:from-secondary hover:to-primary cursor-pointer flex items-center gap-3 justify-center text-lg font-medium">
              <IoLogoWhatsapp className="w-5 h-5 shrink-0" /> Whatsapp Us
            </div>
            <DialogClose asChild>
              <Link href="/free-consultation">
                <div className="bg-gradient-to-r from-primary rounded-lg py-1.5 text-white shadow-md to-secondary hover:from-secondary hover:to-primary cursor-pointer flex items-center gap-3 justify-center text-lg font-medium">
                  <TbHomeFilled className="w-5 h-5 shrink-0" /> 
                </div>
              </Link>
            </DialogClose> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
