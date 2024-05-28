"use client";
import React, { useState, ChangeEvent } from "react";
import { toggleAdd, toggleImage } from "@/Redux/Slices/ImageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import Image from "next/image";
import { Button } from "@/shadcn/ui/button";
import { columns } from "./columns";
import { DataTable } from "../componentsfiles/ComponentTable"; // Adjust the import path as necessary
import { SubComponent } from "./dataTypes"; // Adjust the import path as necessary
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PageView3 = () => {
  const dispatch = useDispatch();
  const isAdd = useSelector((state: RootState) => state.imageSlice.isAdd);

  const [selectedCounty, setSelectedCounty] = useState("Bomet");
  const [selectedComponent, setSelectedComponent] = useState(
    "Enhanced Irrigation Infrastructures and Water Resource Developments"
  );
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (!isNaN(year)) {
      setSelectedYear(year);
    }
  };

  const subComponents: SubComponent[] = [
    {
      id: 1,
      title: "Sub-component: 1.1: Irrigation Development and Rehabilitation",
      indicators: [
        {
          id: 1,
          description:
            "Indicator: 3.1.1: Percentage completion of additional area with improved/rehabilitated irrigation and drainage services (%) (report cumulatively)",
          newTarget: 0,
          youthTarget: 0,
          remarks: "",
        },
        {
          id: 2,
          description:
            "Indicator: 3.1.2: Area with improved/rehabilitated irrigation infrastructure and drainage services (Ha)",
          newTarget: 0,
          youthTarget: 0,
          remarks: "",
        },
      ],
    },
    {
      id: 2,
      title: "Sub-component: 1.2: Enhanced Soil and Water Conservation",
      indicators: [
        {
          id: 3,
          description:
            "Indicator: 3.2.5: No. of operational boreholes & shallow wells (GAFSP)",
          newTarget: 0,
          youthTarget: 0,
          remarks: "",
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <Sheet open={isAdd} onOpenChange={() => dispatch(toggleAdd())}>
          <SheetContent className="z-[110] bg-white text-gray-950">
            <SheetHeader>
              <SheetTitle>Add your annual budget</SheetTitle>
              <SheetDescription>
                {/* Add your budget component here */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:mt-4 mt-6 flex justify-between flex-col md:flex-row items-start gap-4">
        <div className="flex justify-start gap-4 items-start mt-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select County
            </label>
            <select
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 "
            >
              <option value="Bomet">Bomet</option>
              <option value="Nakuru">Nakuru</option>
              <option value="Nairobi">Nairobi</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Component
            </label>
            <select
              value={selectedComponent}
              onChange={(e) => setSelectedComponent(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 "
            >
              <option value="Enhanced Irrigation Infrastructures and Water Resource Developments">
                Enhanced Irrigation Infrastructures and Water Resource
                Developments
              </option>
              <option value="Component 2">Component 2</option>
              <option value="Component 3">Component 3</option>
            </select>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <div>
              <label
                htmlFor="year-select"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Year:{" "}
              </label>
              <input
                id="year-input"
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                value={selectedYear}
                onChange={handleYearChange}
                min="2016"
                max="2024"
              />
            </div>

            <div>
              <label
                htmlFor="dependent-year-select"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Dependent Year:{" "}
              </label>
              <input
                id="dependent-year-input"
                type="number"
                className="bg-gray-50 border read-only:bg-green-600 text-white border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                value={selectedYear + 1 > 2025 ? 2025 : selectedYear + 1}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 w-full">
        {subComponents.map((subComponent) => (
          <div key={subComponent.id}>
            <h3 className="font-semibold text-lg">{subComponent.title}</h3>
            <DataTable columns={columns} data={subComponent.indicators} />
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="bg-green-600 text-white tracking-tight leading-tight"
        >
          Save Changes
        </Button>
        <Button
          variant="outline"
          className="bg-red-600 text-white tracking-tight leading-tight"
        >
          Cancel Changes
        </Button>
      </div>
    </div>
  );
};

export default PageView3;
