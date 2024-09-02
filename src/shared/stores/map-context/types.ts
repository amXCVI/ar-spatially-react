export interface AppLayerInterface {
    iconSrc: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string;
        }
    >;
    label: string;
    id: string;
    isSelected: boolean;
}
