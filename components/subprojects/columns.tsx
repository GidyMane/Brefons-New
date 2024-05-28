import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../LogFrames/ColumnHeader";

// This type is used to define the shape of our data.
export type Subprojects =  {
  id: string,
  code: string,
  male: number,
  female: number,
  status: string,
  remarks: string,
  activity: string,
  category: string,
  latitude: string,
  county_id: string,
  longitude: string,
  contractor: string,
  start_date: string,
  budget_amount: number,
  contract_amount: number,
  contract_description: string
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "Ksh",
  }).format(amount);
};

export const columns: ColumnDef<Subprojects>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ID" />
  //   ),
  //   cell: ({ row }) => (
  //     <p className="text-black tracking-tight text-balance leading-tight">
  //       {row.original.id}
  //     </p>
  //   ),
  // },
  {
    accessorKey: "code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-balance leading-tight">
        {row.original.code}
      </p>
    ),
  },
  {
    accessorKey: "activity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Activity" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.activity}
      </p>
    ),
  },
  {
    accessorKey: "budget_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount Budgeted" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {formatCurrency(row.original.budget_amount)}
      </p>
    ),
  },
  {
    accessorKey: "contract_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contract Description" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.contract_description}
      </p>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.category}
      </p>
    ),
  },
  {
    accessorKey: "contractor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contractor" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.contractor}
      </p>
    ),
  },
  {
    accessorKey: "contract_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contract Amount" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {formatCurrency(row.original.contract_amount)}
      </p>
    ),
  },
  {
    accessorKey: "start_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {new Date(row.original.start_date).toLocaleDateString()}
      </p>
    ),
  },
  {
    accessorKey: "female",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estimated Female" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.female}
      </p>
    ),
  },
  {
    accessorKey: "male",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estimated Male" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.male}
      </p>
    ),
  },
  {
    accessorKey: "longitude",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Longitude" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.longitude}
      </p>
    ),
  },
  {
    accessorKey: "latitude",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Latitude" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.latitude}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <p
        className={`text-white tracking-tight text-wrap flex justify-start items-start leading-tight ${
          row.original.status === "cancelled"
            ? "bg-red-600"
            : row.original.status === "stalled"
            ? "bg-yellow-600"
            : "bg-green-600"
        } p-2 rounded-lg`}
      >
        {row.original.status}
      </p>
    ),
  },
  {
    accessorKey: "remarks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remarks" />
    ),
    cell: ({ row }) => (
      <p className="text-black tracking-tight text-wrap flex justify-start items-start leading-tight">
        {row.original.remarks}
      </p>
    ),
  },
];

// Example dummy data
// export const subprojects: Subprojects[] = [
//   {
//     id: 1,
//     code: "SC-001",
//     activity: "Design and Planning",
//     amountBudgeted: 1000.0,
//     contractDescription: "Contract for initial design and planning phase.",
//     category: "Planning",
//     contractor: "ABC Design Corp",
//     contractAmount: 5000.0,
//     startDate: "2023-01-15",
//     estFemale: 30,
//     estMale: 40,
//     longitude: -122.4194,
//     latitude: 37.7749,
//     status: "active",
//     remarks: "Project is on schedule and progressing as planned."
//   },
//   {
//     id: 2,
//     code: "SC-002",
//     activity: "Development",
//     amountBudgeted: 2000.0,
//     contractDescription: "Development phase including coding and testing.",
//     category: "Development",
//     contractor: "XYZ Development Ltd",
//     contractAmount: 10000.0,
//     startDate: "2023-02-20",
//     estFemale: 25,
//     estMale: 35,
//     longitude: -118.2437,
//     latitude: 34.0522,
//     status: "stalled",
//     remarks: "Development has been stalled due to unexpected technical issues."
//   },
//   {
//     id: 3,
//     code: "SC-003",
//     activity: "Testing",
//     amountBudgeted: 1500.0,
//     contractDescription: "Testing phase to ensure product quality.",
//     category: "Testing",
//     contractor: "Testers Inc.",
//     contractAmount: 3000.0,
//     startDate: "2023-03-10",
//     estFemale: 20,
//     estMale: 30,
//     longitude: -74.006,
//     latitude: 40.7128,
//     status: "active",
//     remarks: "Testing is ongoing with no major issues reported."
//   },
//   {
//     id: 4,
//     code: "SC-004",
//     activity: "Deployment",
//     amountBudgeted: 500.0,
//     contractDescription: "Deployment to live environment.",
//     category: "Deployment",
//     contractor: "DeployNow LLC",
//     contractAmount: 2000.0,
//     startDate: "2023-04-05",
//     estFemale: 15,
//     estMale: 25,
//     longitude: -87.6298,
//     latitude: 41.8781,
//     status: "cancelled",
//     remarks: "Deployment cancelled due to budget constraints."
//   },
//   {
//     id: 5,
//     code: "SC-005",
//     activity: "Maintenance",
//     amountBudgeted: 800.0,
//     contractDescription: "Ongoing maintenance and support.",
//     category: "Maintenance",
//     contractor: "SupportServices Ltd",
//     contractAmount: 4000.0,
//     startDate: "2023-05-01",
//     estFemale: 10,
//     estMale: 20,
//     longitude: -71.0589,
//     latitude: 42.3601,
//     status: "active",
//     remarks: "Maintenance activities are proceeding smoothly."
//   }
// ];
