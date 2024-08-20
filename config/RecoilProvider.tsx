"use client";

import { RecoilRoot } from "recoil";

export default function RecoilProvider({ children }: React.PropsWithChildren): JSX.Element {
    return <RecoilRoot>{children}</RecoilRoot>;
}
