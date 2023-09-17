import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";


export function Earnings() {
  const data = [
    {
      heading: "EARNINGS (MONTHLY)",
      numbers: "$40,000",
    },
    {
      heading: "EARNINGS (ANNUAL)",
      numbers: "$215,000",
    },
    {
      heading: "TASKS",
      numbers: "50%",
    },
    {
      heading: "PENDING REQUESTS",
      numbers: "18",
    },
  ];
  return (
    <div>
      <div className="earnings-card">
        {data.map((data, index) => (
          <EarningsCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
export default function EarningsCard({ data }) {
  

  return (
    <Card id="details-card" sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {data.heading}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.numbers}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}