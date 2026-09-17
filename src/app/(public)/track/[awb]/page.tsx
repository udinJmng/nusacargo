import { notFound } from "next/navigation";
import { getShipment } from "@/types/shipment";

type Props = { params: Promise<{ awb: string }> };
export async function generateMetadata({ params }: Props) {
const { awb } = await params;
return {
title: `Lacak ${awb} · NusaCargo`,
description: `Status terkini pengiriman ${awb} pada jaringan NusaCargo.`,
};
}
export default async function TrackPage({ params }: Props) {
const { awb } = await params;
const shipment = await getShipment(awb);
if (!shipment) notFound();
return <section aria-labelledby="judul">{/* ... */}</section>;
}
