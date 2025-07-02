import { useEffect, useState } from "react";
import axios from "axios";

interface ServerStatus {
  data: {
    attributes: {
      name: string;
      players: number;
      maxPlayers: number;
      status: string;
      uptimeRatio: number;
      version: string;
      location: { country: string; distance: number };
      ip: string;
      port: number;
      details?: {
        version?: string;
        passwordProtected?: boolean;
        official?: boolean;
        thirdPerson?: boolean;
        distance?: number;
        modNames: string[];
      };
    };
  };
}

export const useServerStatus = (serverId: string) => {
  const [data, setData] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.battlemetrics.com/servers/${serverId}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Server fetch error:", err))
      .finally(() => setLoading(false));
  }, [serverId]);

  return { data, loading };
};
