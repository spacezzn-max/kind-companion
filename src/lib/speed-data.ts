export type LicenseStatus = "ativa" | "expirada" | "suspensa";
export type LicensePlan = "Trial" | "Pro" | "Studio" | "Enterprise";

export type License = {
  id: string;
  key: string;
  customer: string;
  email: string;
  plan: LicensePlan;
  status: LicenseStatus;
  seats: number;
  devicesUsed: number;
  createdAt: string;
  expiresAt: string;
};

export type Device = {
  id: string;
  licenseKey: string;
  name: string;
  os: string;
  lastSeen: string;
  ip: string;
  active: boolean;
};

export const licenses: License[] = [
  {
    id: "1",
    key: "SPEED-7QK2-4M9X-VT10",
    customer: "Atlas Studio",
    email: "ops@atlasstudio.com",
    plan: "Enterprise",
    status: "ativa",
    seats: 25,
    devicesUsed: 18,
    createdAt: "2026-01-14",
    expiresAt: "2027-01-14",
  },
  {
    id: "2",
    key: "SPEED-3BR8-KD22-9LMP",
    customer: "Nova Films",
    email: "financeiro@novafilms.com.br",
    plan: "Studio",
    status: "ativa",
    seats: 10,
    devicesUsed: 7,
    createdAt: "2026-03-02",
    expiresAt: "2026-09-30",
  },
  {
    id: "3",
    key: "SPEED-1JD5-77TQ-XZ44",
    customer: "Bruno Aguiar",
    email: "bruno.aguiar@gmail.com",
    plan: "Pro",
    status: "expirada",
    seats: 2,
    devicesUsed: 2,
    createdAt: "2025-08-19",
    expiresAt: "2026-08-19",
  },
  {
    id: "4",
    key: "SPEED-5PW0-2CE6-HH81",
    customer: "Lume Design",
    email: "hello@lume.design",
    plan: "Pro",
    status: "ativa",
    seats: 5,
    devicesUsed: 3,
    createdAt: "2026-05-11",
    expiresAt: "2027-05-11",
  },
  {
    id: "5",
    key: "SPEED-9TA4-6RN3-QQ07",
    customer: "Marina Prado",
    email: "marina@pradolab.io",
    plan: "Trial",
    status: "suspensa",
    seats: 1,
    devicesUsed: 1,
    createdAt: "2026-08-21",
    expiresAt: "2026-09-04",
  },
  {
    id: "6",
    key: "SPEED-0XC1-8VB5-ZE63",
    customer: "Pixel Forge",
    email: "team@pixelforge.dev",
    plan: "Studio",
    status: "ativa",
    seats: 12,
    devicesUsed: 9,
    createdAt: "2026-02-27",
    expiresAt: "2027-02-27",
  },
];

export const devices: Device[] = [
  {
    id: "d1",
    licenseKey: "SPEED-7QK2-4M9X-VT10",
    name: "ATLAS-WS-04",
    os: "Windows 11 Pro",
    lastSeen: "2026-09-04 17:42",
    ip: "189.24.11.７".replace("７", "7"),
    active: true,
  },
  {
    id: "d2",
    licenseKey: "SPEED-7QK2-4M9X-VT10",
    name: "ATLAS-MAC-11",
    os: "macOS 15.2",
    lastSeen: "2026-09-04 09:18",
    ip: "189.24.11.32",
    active: true,
  },
  {
    id: "d3",
    licenseKey: "SPEED-3BR8-KD22-9LMP",
    name: "NOVA-EDIT-02",
    os: "Windows 11 Pro",
    lastSeen: "2026-09-03 22:05",
    ip: "201.9.44.118",
    active: true,
  },
  {
    id: "d4",
    licenseKey: "SPEED-1JD5-77TQ-XZ44",
    name: "BRUNO-DESKTOP",
    os: "Windows 10",
    lastSeen: "2026-08-18 13:51",
    ip: "177.63.201.9",
    active: false,
  },
  {
    id: "d5",
    licenseKey: "SPEED-5PW0-2CE6-HH81",
    name: "LUME-STUDIO-01",
    os: "macOS 15.1",
    lastSeen: "2026-09-04 16:10",
    ip: "138.204.77.5",
    active: true,
  },
  {
    id: "d6",
    licenseKey: "SPEED-0XC1-8VB5-ZE63",
    name: "FORGE-RIG-07",
    os: "Windows 11 Pro",
    lastSeen: "2026-09-02 11:33",
    ip: "45.190.3.220",
    active: true,
  },
];

export const plans: LicensePlan[] = ["Trial", "Pro", "Studio", "Enterprise"];

export const statusStyles: Record<LicenseStatus, string> = {
  ativa: "border-success/40 bg-success/10 text-success",
  expirada: "border-destructive/40 bg-destructive/10 text-destructive",
  suspensa: "border-warning/40 bg-warning/10 text-warning",
};

export function generateKey() {
  const block = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
    let out = "";
    for (let i = 0; i < 4; i++) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  };
  return `SPEED-${block()}-${block()}-${block()}`;
}

export const overview = {
  total: licenses.length,
  ativas: licenses.filter((l) => l.status === "ativa").length,
  expiradas: licenses.filter((l) => l.status === "expirada").length,
  dispositivos: devices.filter((d) => d.active).length,
  receitaMensal: "R$ 18.940",
  ativacoes7d: [12, 18, 9, 22, 27, 19, 31],
};
