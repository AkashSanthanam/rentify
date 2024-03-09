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
  Input,
} from "@nextui-org/react";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

export default function Properties() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col ml-10 gap-4 w-[60%]">
          <div className="rounded-2xl shadow-md bg-secondary-500 h-[210px] flex flex-row items-center gap-12">
            <Image
              src="/pricesreduced.jpg"
              width={200}
              height={170}
              className="ml-5"
            ></Image>
            <div className="flex flex-col gap-4 justify-center w-[45%] mt-2">
              <h1 className="text-xl font-bold">
                Residential Complex - NS Tau
              </h1>
              <p className="text-md font-extralight flex flex-row gap-2">
                {" "}
                <CiLocationOn /> Sevilla, Palm Harbor
              </p>
              <p className="text-sm font-light">
                A modern cottage withbreathaking mountain views and an extensiv
                eyard, perfect of various types of leisure. The house features
                four spacious bedroooms, a kitchen equip...
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center w-[20%] h-[50%] mt-2">
              <p className="text-xl font-bold text-primary-700">
                $5800 <span className="text-foreground"> / m</span>
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-semibold flex flex-row gap-4">
                {" "}
                <FaBath></FaBath> 4
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <IoBed></IoBed> 6
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <TbRulerMeasure /> 23x42 m2
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow-md bg-secondary-500 h-[210px] flex flex-row items-center gap-12">
            <Image
              src="/house2.jpeg"
              width={200}
              height={170}
              className="ml-5"
            ></Image>
            <div className="flex flex-col gap-4 justify-center w-[45%] mt-2">
              <h1 className="text-xl font-bold">
                Residential Complex - NS Tau
              </h1>
              <p className="text-md font-extralight flex flex-row gap-2">
                {" "}
                <CiLocationOn /> 50 Bridge Park Drive
              </p>
              <p className="text-sm font-light">
                A secluded country house, srounded by picturesque nature, offers
                the perfect retreat for those who appriceate tranquility and the
                beauty of the enviornment. This house...
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center w-[20%] h-[50%] mt-2">
              <p className="text-xl font-bold text-primary-700">
                $4200 <span className="text-foreground"> / m</span>
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-semibold flex flex-row gap-4">
                {" "}
                <FaBath></FaBath> 4
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <IoBed></IoBed> 5
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <TbRulerMeasure /> 6x7.5 m2
              </p>
            </div>
          </div>
          <div className=" rounded-2xl shadow-md bg-secondary-500 h-[210px] flex flex-row items-center gap-12">
            <Image
              src="/house3.jpeg"
              width={200}
              height={170}
              className="ml-5"
            ></Image>
            <div className="flex flex-col gap-4 justify-center w-[45%] mt-2">
              <h1 className="text-xl font-bold">
                Residential Complex - NS Tau
              </h1>
              <p className="text-md font-extralight flex flex-row gap-2">
                {" "}
                <CiLocationOn /> 123 Maple Street, Brooklyn
              </p>
              <p className="text-sm font-light">
                An elegant villa witha private pool nd amazing terrace invites
                you to enjoy luxury and comfort. The villa boast four luxurious
                bedrooms, a stylish living room, and a dini...
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center w-[20%] h-[50%] mt-2">
              <p className="text-xl font-bold text-primary-700">
                $2900 <span className="text-foreground"> / m</span>
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-semibold flex flex-row gap-4">
                {" "}
                <FaBath></FaBath> 4
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <IoBed></IoBed> 8
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <TbRulerMeasure /> 42x46 m2
              </p>
            </div>
          </div>
          <div className=" rounded-2xl shadow-md bg-secondary-500 h-[210px] flex flex-row items-center gap-12">
            <Image
              src="/house4.jpeg"
              width={200}
              height={170}
              className="ml-5"
            ></Image>
            <div className="flex flex-col gap-4 justify-center w-[45%] mt-2">
              <h1 className="text-xl font-bold">
                Residential Complex - NS Tau
              </h1>
              <p className="text-md font-extralight flex flex-row gap-2">
                {" "}
                <CiLocationOn /> 123 Maple Street, Brooklyn
              </p>
              <p className="text-sm font-light">
                An atmospheric retro-style house with an extensive garden
                creates a unqiue atmosphere that transports you to the past.
                This house features three uniquely decorate...
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center w-[20%] h-[50%] mt-2">
              <p className="text-xl font-bold text-primary-700">
                $7400 <span className="text-foreground"> / m</span>
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-semibold flex flex-row gap-4">
                {" "}
                <FaBath></FaBath> 2
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <IoBed></IoBed> 4
              </p>
              <Divider orientation="horizontal" />
              <p className="text-md font-bold flex flex-row gap-4">
                <TbRulerMeasure /> 23.5x55 m2
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[35%] h-[600px] bg-primary-400 rounded-2xl mt-2 gap-2">
          <h1 className="text-4xl font-semibold m-4 self-start">
            Filter properties
          </h1>
          <div className="flex flex-row ml-4 gap-4 self-center">
            <Button variant="bordered" color="foreground">
              All
            </Button>
            <Button variant="bordered" color="foreground">
              House
            </Button>
            <Button variant="bordered" color="foreground">
              Apartment
            </Button>
            <Button variant="bordered" color="foreground">
              Land
            </Button>
          </div>
          <Divider
            orientation="horizontal"
            className="w-[90%] self-center mt-2"
          />
          <div className="flex flex-row">
            <div className="flex flex-col ml-4 gap-2">
              <h1 className="font-semibold text-xl mt-4">Select Date</h1>
              <Input type="date" placeholder="mm-dd-yyy" />
            </div>
          </div>
          <Divider
            orientation="horizontal"
            className="w-[90%] self-center mt-2"
          />
          <div className="flex flex-row">
            <div className="flex flex-col ml-4 gap-2">
              <h1 className="font-semibold text-xl mt-4">Address</h1>
              <Input type="address" placeholder="Enter your address" />
            </div>
          </div>
          <Divider
            orientation="horizontal"
            className="w-[90%] self-center mt-2"
          />

          <div className="flex flex-row gap-2 self-center mt-2 ">
            <IoBed className="mt-2"></IoBed>
            <Button variant="bordered" color="foreground" size="sm">
              1
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              2
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              3
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              4
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              5
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              6+
            </Button>
          </div>
          <div className="flex flex-row gap-2 self-center mt-2 ">
            <FaBath className="mt-2"></FaBath>
            <Button variant="bordered" color="foreground" size="sm">
              1
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              2
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              3
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              4
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              5
            </Button>
            <Button variant="bordered" color="foreground" size="sm">
              6+
            </Button>
          </div>
          <Button
            className="w-[10%] self-end mr-4 mt-14"
            color="secondary"
            variant="solid"
          >
            Search
          </Button>
        </div>
      </div>
    </main>
  );
}
