export const SHIPMENT_STATUS = [
    "dijemput", "transit", "di-pelabuhan", "dikirim", "selesai", "tertunda",
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

export interface Shipment {
    awb: string;
    origin: string;
    destination: string;
    status: ShipmentStatus;
    weightKg: number;
    etaISO: string;
    delayedMinutes: number;
    client: { id: string; name: string };
}

export type ShipmentSummary = Pick<Shipment, "awb" | "status" | "etaISO">;
