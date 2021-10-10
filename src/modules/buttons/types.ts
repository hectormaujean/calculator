type Numbers = '.' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type OperatorsLabels = '÷' | '×' | '−' | '+';
export type OperatorsValues = '/' | '*' | '-' | '+';
export type Actions = 'AC' | 'C' | '±' | '%' | '=';

type ButtonTypeLabel = Numbers | OperatorsLabels | Actions;

export type ButtonType = {
    label: ButtonTypeLabel;
    value?: OperatorsValues;
    color?: string;
};
