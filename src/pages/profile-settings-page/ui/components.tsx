import { ReactNode } from "react";

import { BlackTextField } from "@/shared/ui/text-fields";

export { BlackTextField };

export const ProfileSettingsGroup = ({ children }: { children: ReactNode; title: string }) => {
    return <div className="flex flex-col gap-6 p-6 bg-silver-sand rounded-[42px] w-full h-min">{children}</div>;
};
