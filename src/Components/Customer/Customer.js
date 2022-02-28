import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MaterialTable from "material-table";
import Button from "@mui/material/Button";
export default function Customer() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "Phone", field: "phone" },
  ]);

  const [data, setData] = useState([
    { id: "1", name: "Mehmet 1", address: "", phone: "", date: "", credit: 100, debit: 200, balance: 200 },
    { id: "2", name: "Mehmet 2", address: "", phone: "", date: "2-2-2021", credit: 100, debit: 200, balance: 200 },
    { id: "3", name: "Mehmet 3", address: "", phone: "", date: "3-3-2021", credit: 100, debit: 200, balance: 200 },
  ]);

  const [columns1, setColumns1] = useState([
    { title: "Date", field: "date", editComponent: props => (
      <input
        type="date"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    )
  },
    { title: "Detail", field: "details" },
    {
      title: 'Method',
      field: 'method',
      lookup: { "debit": "Debit", "credit": "Credit" },
    },
    { title: "Balance", field: "balance" },
  ]);

  const [secondTableData, setSecondTableData] = useState([]);

  console.log("secondTableData :: ", secondTableData);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: "100%" }}>
            <MaterialTable
              title=""
              columns={columns}
              data={data}
              options={{
                actionsColumnIndex: -1,
                addRowPosition: "first",
              }}
              // actions={[
              //   {
              //     icon: "more",
              //     tooltip: "Show more details",
              //     onClick: (event, rowData) => {
              //       setSecondTableData([rowData]);
              //     },
              //   },
              // ]}
              editable={{
                onRowAddCancelled: (rowData) =>
                  console.log("Row adding cancelled"),
                onRowUpdateCancelled: (rowData) =>
                  console.log("Row editing cancelled"),
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {
                    const updatedRow = [
                      ...data,
                                         ];
                    setTimeout(() => {
                      setData(updatedRow);
                      resolve();
                    }, 2000);
                    console.log(newRow);
                  }),
                onRowAdd1: (newRow) =>
                  new Promise((resolve, reject) => {
                    const updatedRow = [
                      ...data,
                      { id: Math.floor(Math.random() * 100), ...newRow },
                    ];
                    setTimeout(() => {
                      setData(updatedRow);
                      resolve();
                    }, 2000);
                    console.log(newRow);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);

                      resolve();
                    }, 2000);
                  }),
              }}
              onRowClick={(event, rowData) => {
                setSecondTableData([rowData]);
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ width: "100%" }}>
            <MaterialTable
              title=""
              columns={columns1}
              data={secondTableData}
              options={{
                actionsColumnIndex: -1,
                addRowPosition: "first",
                search: false,
              }} 
              editable={{
                onRowAddCancelled: (rowData) =>
                  console.log("Row adding cancelled"),
                onRowUpdateCancelled: (rowData) =>
                  console.log("Row editing cancelled"),
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {
                    const updatedRow = [
                      ...secondTableData,
                      { id: Math.floor(Math.random() * 100), ...newRow },
                    ];
                    setTimeout(() => {
                      setSecondTableData(updatedRow);
                      resolve();
                    }, 2000);
                    console.log(newRow);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setSecondTableData([...dataUpdate]);

                      resolve();
                    }, 2000);
                  }),
              }}
              
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
