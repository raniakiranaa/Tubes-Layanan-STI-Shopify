"use client"

import Link from "next/link";
import Image from "next/image";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";


export default function Nav() {

  return (
    <div className="flexBetween max-container relative bg-white">
        <Navbar
        className="w-full px-8"
        maxWidth="full"
        isBordered
        >
            <NavbarBrand className="justify-start">
            </NavbarBrand>

            <NavbarContent justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="success"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">Lasti@google.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                        Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    </div>
  );
}
