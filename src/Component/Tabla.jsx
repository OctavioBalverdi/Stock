import { Avatar, Badge, Button, Popover, Table } from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react';

export const TableComponent = () => {

const dataArray = [
  {
    avatar: "/images/company/paypal.png",
    name: "Paypal",
    withdrawType: "lo que venga",
    date: "Jan 19, 2022",
    time: "3:45 pm",
    amount: "$652.00",
    
  },
  {
    avatar: "/images/company/Visa.png",
    name: "Visa",
    withdrawType: "Withdraw",
    date: "Jan 10, 2023",
    time: "4:45 pm",
    amount: "$534.00",
  },
  
];


  return (
    <Table showCheckbox={true}>
      {/* ... Resto del código ... */}
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">ENTRADA/SALIDA</p>
          </div>
          <div className="flex items-center gap-5">
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              PUTO EL 
            </Button>
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              QUE LEE
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Body className="divide-gray-25 divide-y">
        {dataArray.map((item, index) => (
          <Table.Row className="bg-white" key={index}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img={item.avatar} size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.name}</p>
                      <span className="text-body-6 font-normal text-metal-500">{item.withdrawType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{item.date}</p>
              <p className="text-body-6 font-normal text-metal-500">{item.time}</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{item.amount}</p>
            </Table.Cell>
            <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">$652.00</p>
          </Table.Cell>
          <Table.Cell>
            <div className="inline-block">
              <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                Delivered
              </Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
              <Popover.Container className="!mt-0 !block">
                <ul>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Delete</span>
                      <span>
                        <Trash />
                      </span>
                    </button>
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Edit</span>
                      <span>
                        <Pencil />
                      </span>
                    </button>
                  </li>
                </ul>
              </Popover.Container>
              <Popover.Action>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
          </Table.Cell>
            {/* ... Resto de las celdas ... */}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};