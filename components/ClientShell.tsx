"use client";

import dynamic from "next/dynamic";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";
import SmoothScroll from "@/components/SmoothScroll";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const isTouch = useIsTouchDevice();

  return (
    <>
      {!isTouch && <Cursor />}
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
