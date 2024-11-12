import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RouteDisplay = ({ routes }) => (
  <div>
    <Typography variant="h5">원하는 경로를 선택하세요.</Typography>
    {routes.map((route, index) => (
      <Card key={index} style={{ margin: '10px 0' }}>
        <CardContent>
          <Typography variant="h6">{route.description}</Typography>
          <Typography>비용: {route.cost}, 환승: {route.transfers}, 도보: {route.walkTime}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default RouteDisplay;
