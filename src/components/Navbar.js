"use client";
import React from "react";
import { useState } from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const MenuIcon = (isOpen) => {
    return <IoMenu size={32} />;
  };

  return (
    <NextNavbar
      isBlurred={true}
      isBordered={false}
      onMenuOpenChange={setMenuOpen}
      maxWidth="2xl"
    >
      <NavbarContent className="gap-4" justify="start">
        <NavbarMenuToggle
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          icon={MenuIcon}
        />

        <NavbarBrand>
          <Image width={80} height={80} src="/logo.png"></Image>
          <p className="text-2xl">rentify</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-12" justify="center">
        <NavbarItem>
          <Link
            underline="hover"
            className="font-semibold"
            color="foreground"
            href="#"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            underline="hover"
            aria-current="page"
          >
            Properties
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            underline="hover"
            aria-current="page"
          >
            Agents
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            underline="hover"
            aria-current="page"
          >
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem className="hidden md:flex">
          <Link color="foreground" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} color="secondary" variant="bordered" href="#">
            <h1 className="font-semibold">Register</h1>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {" "}
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            NEW RELEASES
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" aria-current="page">
            SNEAKERS
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            CONTACT
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">LOGIN</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} color="secondary" variant="light" href="#">
            <h1 className="font-extrabold">CREATE AN ACCOUNT</h1>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
};
export default Navbar;
