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
            className="font-semibold hidden md:flex"
            color="foreground"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold hidden md:flex"
            color="foreground"
            href="/properties"
            underline="hover"
            aria-current="page"
          >
            Properties
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold hidden md:flex"
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
            className="font-semibold hidden md:flex"
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
          <Button as={Link} variant="bordered" color="primary" href="#">
            <h1 className="font-semibold">Register</h1>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {" "}
        <NavbarMenuItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            aria-current="page"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            aria-current="page"
          >
            Properties
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="font-semibold "
            color="foreground"
            href="#"
            aria-current="page"
          >
            Agents
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="font-semibold"
            color="foreground"
            href="#"
            aria-current="page"
          >
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Register
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
};
export default Navbar;
