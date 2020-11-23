import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
export interface ItemProps {
    className: string;
    children: React.ReactNode;
    index: number;
    direction?: 'horizontal' | 'vertical';
    size?: SizeType | number;
    marginDirection: 'marginLeft' | 'marginRight';
    split?: string | React.ReactNode;
}
export default function Item({ className, direction, index, size, marginDirection, children, split, }: ItemProps): JSX.Element | null;
