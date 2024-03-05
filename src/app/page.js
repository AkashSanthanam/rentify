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
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <main className="font-geologica">
      <Navbar></Navbar>
      <div className="w-full h-[800px] flex justify-center pt-10">
        {" "}
        <div
          className="flex w-[80%] h-[600px] bg-center bg-cover rounded-2xl flex-col"
          style={{
            backgroundImage: "url(/homepage2.jpeg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex w-[43%] h-[90%] pt-10 flex-col ml-auto">
            <p className="flex text-6xl font-bold">
              Let's find your <br /> Dream Home!{" "}
            </p>
            <div className="bg-gradient-to-tr from-secondary-100 to-secondary-400 w-[95%] mt-10 p-2 opacity-85 inset-0 rounded-2xl">
              <p className="flex text-medium font-semibold w-full">
                We can help you rent, sell, or buy accommodation, take a
                mortgage, invest in real estate, and a lot more{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-gradient-to-tr from-secondary-100 to-secondary-400 opacity-90 p-4 m-8 w-[80%] h-[20%] gap-4 rounded-2xl">
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
      </div>

      <div className="w-full h-[1024px] flex flex-col items-center">
        <h1 className="text-6xl  font-bold ">Buy, Sell, or Rent</h1>
        <div className="w-full flex flex-row justify-center mt-10 gap-8">
          <Card className="p-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/buyinghome.png"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
          <Card className="p-8" isHoverable={true}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/sellinghome.jpg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
          <Card className="p-8">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/buyinghome.jpg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
