import React, { useEffect, useState } from "react";

import { FaUsers, FaMapMarkedAlt, FaSignal } from "react-icons/fa";
import { Card, InfoRow, StatusCircle, Title } from "./ServerStatus.styled";

export const ServerStatus: React.FC = () => {
  const [serverInfo, setServerInfo] = useState<{
    online: boolean;
    name?: string;
    players?: string;
    map?: string;
    version?: string;
  }>({ online: false });

  useEffect(() => {
    setServerInfo({
      online: true,
      name: "Legends of Dirisle",
      players: "0",
      map: "unknown",
      version: "1.0",
    });
  }, []);

  return (
    <Card>
      <Title>{serverInfo.name || "Server Offline"}</Title>

      <InfoRow>
        <StatusCircle online={serverInfo.online} />
        <span>{serverInfo.online ? "Online" : "Offline"}</span>
      </InfoRow>

      {serverInfo.online && (
        <>
          <InfoRow>
            <FaUsers color="#ff3333" />
            <span>{serverInfo.players}</span>
          </InfoRow>
          <InfoRow>
            <FaMapMarkedAlt color="#ff3333" />
            <span>{serverInfo.map}</span>
          </InfoRow>
          <InfoRow>
            <FaSignal color="#ff3333" />
            <span>v{serverInfo.version}</span>
          </InfoRow>
        </>
      )}
    </Card>
  );
};

export default ServerStatus;