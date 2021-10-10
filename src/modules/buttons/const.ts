import { green, red } from '@mui/material/colors';
import { ButtonType } from './types';

export const buttons: ButtonType[][] = [
    [
        {
            label: 'AC',
            color: green[500],
        },
        {
            label: '±',
            color: green[500],
        },
        {
            label: '%',
            color: green[500],
        },
        {
            label: '÷',
            value: '/',
            color: red[500],
        },
    ],
    [
        {
            label: 7,
        },
        {
            label: 8,
        },
        {
            label: 9,
        },
        {
            label: '×',
            value: '*',
            color: red[500],
        },
    ],
    [
        {
            label: 4,
        },
        {
            label: 5,
        },
        {
            label: 6,
        },
        {
            label: '−',
            value: '-',
            color: red[500],
        },
    ],
    [
        {
            label: 1,
        },
        {
            label: 2,
        },
        {
            label: 3,
        },
        {
            label: '+',
            value: '+',
            color: red[500],
        },
    ],
    [
        {
            label: 'C',
            color: green[500],
        },
        {
            label: 0,
        },
        {
            label: '.',
        },
        {
            label: '=',
            color: red[500],
        },
    ],
];
