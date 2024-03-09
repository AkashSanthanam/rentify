"use client";
import Navbar from "@/components/Navbar.js";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="font-geologica">
      <Navbar></Navbar>
      <div className="flex w-full h-[800px] flex-col md:flex-row justify-center mt-10 gap-8 items-center md:items-start">
        {" "}
        <p className="text-2xl font-extrabold md:hidden">
          Let's find your Dream Home!{" "}
        </p>
        <div
          className="flex w-[80%] h-[40%] md:h-[75%] bg-center bg-cover rounded-2xl flex-col"
          style={{
            backgroundImage: "url(/homepage2.jpeg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex w-[43%] h-[90%] pt-10 flex-col ml-auto">
            <p className=" hidden md:flex md:text-6xl font-extrabold">
              Let's find your <br /> Dream Home!{" "}
            </p>
            <div className="hidden md:flex bg-gradient-to-tr from-secondary-100 to-secondary-400 w-[95%] mt-10 p-2 opacity-85 inset-0 rounded-2xl">
              <p className="text-medium font-semibold w-full">
                We can help you rent, sell, or buy accommodation, take a
                mortgage, invest in real estate, and a lot more{" "}
              </p>
            </div>
          </div>
          <div className=" hidden md:flex flex-row bg-gradient-to-tr from-secondary-100 to-secondary-400 opacity-90 p-4 m-8 w-[80%] h-[20%] gap-4 rounded-2xl">
            <div className="flex flex-col w-[25%]">
              <span className="text-medium text-slate-950">Location</span>
              <Autocomplete
                placeholder="Select Your City"
                className="bg-none"
                variant="bordered"
              ></Autocomplete>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col w-[33%]">
              <span className="text-medium text-slate-950">Property Type</span>
              <Autocomplete
                placeholder="Choose Property Type"
                className="bg-none"
                variant="bordered"
              ></Autocomplete>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col w-[25%]">
              <span className="text-medium text-slate-950">Price Range</span>
              <Autocomplete
                placeholder="Choose Price Range"
                className="bg-none"
                variant="bordered"
              ></Autocomplete>
            </div>

            <Button
              className="m-4"
              isIconOnly
              color="secondary"
              variant="solid"
            >
              <CiSearch size={30}></CiSearch>
            </Button>
          </div>
        </div>
        <p className="flex md:hidden text-lg font-normal w-[90%]">
          We can help you rent, sell, or buy accommodation, take a mortgage,
          invest in real estate, and a lot more{" "}
        </p>
        <div className="flex md:hidden flex-col bg-gradient-to-tr from-primary-100 to-primary-400 opacity-90 w-[80%]   rounded-2xl justify-center items-center gap-4 ">
          <div className="flex flex-col w-[90%] mt-10">
            <span className="text-medium text-slate-950">Location</span>
            <Autocomplete
              placeholder="Select Your City"
              className="bg-none"
              variant="bordered"
            ></Autocomplete>
          </div>
          <div className="flex flex-col w-[90%]">
            <span className="text-medium text-slate-950">Property Type</span>
            <Autocomplete
              placeholder="Choose Property Type"
              className="bg-none"
              variant="bordered"
              color="primary-100"
            ></Autocomplete>
          </div>
          <div className="flex flex-col w-[90%]">
            <span className="text-medium text-slate-950">Price Range</span>
            <Autocomplete
              placeholder="Choose Price Range"
              className="bg-none"
              variant="bordered"
              color="primary-100"
            ></Autocomplete>
          </div>
          <Button className="m-4" isIconOnly color="secondary" variant="solid">
            <CiSearch size={30}></CiSearch>
          </Button>
        </div>
      </div>

      <div className="w-full h-[1500px] md:h-[600px] flex flex-col items-center">
        <h1 className="text-2xl md:text-6xl font-bold ">Buy, Sell, or Rent</h1>
        <div className="w-full flex flex-col md:flex-row justify-center mt-10 gap-8 items-center">
          <Card className="p-4 w-[90%] md:w-[28%] cursor-pointer hover:bg-primary-500">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/buyinghome.png"
                width={270}
              />
              <h1 className="text-2xl md:text-4xl font-semibold">Buy a Home</h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-large">
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </CardBody>
          </Card>
          <Card className="p-4 w-[90%] md:w-[28%] cursor-pointer hover:bg-primary-500">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/sellinghome.png"
                width={270}
              />
              <h1 className="text-2xl md:text-4xl font-semibold">
                Sell a Home
              </h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-large">
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </CardBody>
          </Card>
          <Card className="p-4 w-[90%] md:w-[28%] cursor-pointer hover:bg-primary-500 ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/renthome.png"
                width={270}
              />
              <h1 className="text-2xl md:text-4xl font-semibold">
                Rent a Home
              </h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="w-full h-[1300px] md:h-[400px] flex flex-col justify-center items-center md:items-start">
        <h1 className="text-2xl font-bold md:ml-20 ">Browse Homes</h1>
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 items-center">
          <Card className="w-[90%] md:w-[20%] h-[200px] md:ml-20 mt-10 cursor-pointer group">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:underline transition-all">
              <h4 className="text-large text-secondary font-bold  ">
                New Listings
              </h4>
            </CardHeader>
            <Image
              isBlurred
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/newlisting.jpeg"
            />
          </Card>
          <Card className="w-[90%] md:w-[20%] h-[200px] mt-10 cursor-pointer group">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:underline transition-all">
              <h4 className="text-large text-secondary font-bold">
                New Construction
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/newconstruction.jpeg"
            />
          </Card>
          <Card className="w-[90%] md:w-[20%]  h-[200px] mt-10 cursor-pointer group">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:underline transition-all">
              <h4 className="text-large text-secondary font-bold">Land</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/land.jpg"
            />
          </Card>
          <Card className="w-[90%] md:w-[20%] h-[200px] mt-10 cursor-pointer group">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:underline transition-all">
              <h4 className="text-large text-secondary font-bold">
                Recently Sold
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/recentlysold.jpg"
            />
          </Card>
        </div>
      </div>

      <div className="w-full h-[1200px] md:h-[1000px] flex flex-col bg-secondary-500 justify-center">
        <div className="w-full h-[50%] flex flex-col md:flex-row items-center gap-4">
          <div
            style={{
              backgroundImage: "url(/workingtogether.jpeg)",
              backgroundRepeat: "no-repeat",
            }}
            className="flex w-[100%] md:w-[50%] h-full bg-center bg-cover"
          ></div>
          <div className="flex flex-col justify-center md:ml-10 w-[80%] md:w-[50%] ">
            <h1 className="text-2xl md:text-4xl font-bold">
              Need a home loan? Get pre-approved
            </h1>
            <br />
            <p className="text-lg font-semibold">
              Find a lender who can offer competitive mortgage rates and help{" "}
              <br className="hidden md:flex" /> you with pre-approval.
            </p>
            <Button
              className="w-52 mt-5"
              color="primary"
              variant="solid"
              size="lg"
              radius="md"
            >
              Get pre-approved now
            </Button>
          </div>
        </div>
        <div className="flex h-[50%] flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col justify-center md:ml-10 mt-10 w-[80%] md:w-[45.5%]">
            <h1 className="text-2xl md:text-4xl font-bold">Get Local Info</h1>
            <br />
            <p className="text-lg font-semibold">
              Does it have pet-friendly rentals? How are the schools?{" "}
              <br className="hidden md:flex" /> Get important local information
              on the area you're most interested in.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/localarea.jpeg)",
              backgroundRepeat: "no-repeat",
            }}
            className="flex w-[100%] md:w-[50%] h-full bg-center bg-cover"
          ></div>
        </div>
      </div>
      <div className="w-full h-[900px] md:h-[500px] flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold bg-gradient-to-tr from-primary-100 to-primary-500 ">
          FAQ
        </h1>
        <br />
        <h1 className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h1>
        <br />
        <br />
        <p className="text-lg font-light mb-10">
          Frequently Asked Questions About the Rental Process on Our Website:
          Answers to Common Concerns and Inquiries.
        </p>
        <div className="w-[80%] md:w-[60%]">
          <Accordion
            className="shadow-lg"
            variant="bordered"
            showDivider={true}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Are there any fees associated with using Rentify?"
              // className="transition-colors duration-300 hover:bg-primary-400"
            >
              Rentify is free for tenants to use. However, there may be fees
              associated with specific services, such as rental applications or
              background checks, depending on the landlord or property manager.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Can I apply for multiple properties at once?"
            >
              Yes, you can apply for multiple properties on Rentify. However,
              please note that each application is typically specific to a
              single property. You'll need to submit separate applications for
              each property you're interested in.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="How long does it take for a rental application to be processed?"
            >
              The processing time for rental applications varies depending on
              the landlord or property manager. Typically, it can take anywhere
              from a few days to a week to receive a decision. We recommend
              contacting the property manager directly for updates on your
              application status.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[1000px] md:h-[800px] justify-center items-center gap-4">
        <div className="flex flex-col w-[80%] md:w-[50%] md:ml-10 justify-center">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Download our app to get <br className="hidden md:flex" /> most out
            of it
          </h1>
          <br />
          <p className="text-lg font-light w-[90%]">
            Experience the convenience of finding your perfect rental property
            at your fingertips with the Rentify mobile app! Our user-friendly
            interface makes it easier than ever to search for listings, schedule
            viewings, and apply for your dream home, all from the palm of your
            hand. With real-time notifications and updates, you'll never miss
            out on new listings or important communications from landlords.
            Download the Rentify app today and discover the future of
            hassle-free renting
          </p>
          <div className="flex flex-row mt-10 gap-4">
            <Image
              className="cursor-pointer"
              width={200}
              height={200}
              src="/playstore.png"
            ></Image>
            <Image
              className="cursor-pointer"
              width={200}
              height={200}
              src="/appstore.png"
            ></Image>
          </div>
        </div>
        <div
          className="flex w-[100%] md:w-[50%] h-[800px] bg-center bg-cover justify-center items-center content-center"
          style={{
            backgroundImage: "url(/download.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image width={150} height={150} src="/logo.png"></Image>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[900px] md:h-[400px] bg-foreground text-primary-400 gap-10 md:gap-20 items-center md:items-start md:pt-10">
        <div className="flex flex-row md:flex-col mt-10 md:mt-0 md:ml-10 gap-4">
          <FaFacebook color="#C2EEFA" size={25} />
          <FaLinkedin color="#C2EEFA" size={25} />
          <FaXTwitter color="#C2EEFA" size={25}></FaXTwitter>
          <FaInstagram color="#C2EEFA" size={25}></FaInstagram>
          <IoLogoPinterest color="#C2EEFA" size={25}></IoLogoPinterest>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl">rentify</h1>
          <p className="text-lg font-light">Find Your Place, Find Yourself</p>
          <br />
          <p className="text-md font-light cursor-pointer hover:text-secondary-100">
            (123)-456-789
          </p>
          <p className="text-md font-light cursor-pointer hover:text-secondary-100">
            rentify@gmail.com
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold">COMPANY</h1>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            About us
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Careers
          </p>
          <p className="text-md cursor-pointer  font-extralight hover:text-secondary-100">
            Accessibility
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Feedback
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Agent Support
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Privacy
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Terms
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold">PRODUCTS</h1>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Leads & Branding
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            International Properties
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Avail
          </p>
          <p className="text-md cursor-pointer font-extralight hover:text-secondary-100">
            Builder Solutions
          </p>
        </div>
      </div>
    </main>
  );
}
