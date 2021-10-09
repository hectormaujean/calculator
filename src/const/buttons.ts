import { green, red } from '@mui/material/colors';

type Numbers = '.' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type OperatorsLabels = '÷' | '×' | '−' | '+';
type OperatorsValues = '/' | '*' | '-' | '+';
type Actions = 'AC' | 'C' | '±' | '%' | '=';

export function isSymbolAction(symbol: string | number): symbol is Actions {
    return ['AC', 'C', '±', '%', '='].includes(symbol.toString());
}

export function isSymbolOperator(symbol: string | number): symbol is OperatorsValues {
    return ['/', '*', '-', '+'].includes(symbol.toString());
}

type ButtonTypeLabel = Numbers | OperatorsLabels | Actions;

export type ButtonType = {
    label: ButtonTypeLabel;
    value?: OperatorsValues;
    color?: string;
};

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
