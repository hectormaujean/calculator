import { Actions, OperatorsValues } from './types';

export function isSymbolAction(symbol: string | number): symbol is Actions {
    return ['AC', 'C', '±', '%', '='].includes(symbol.toString());
}

export function isSymbolOperator(symbol: string | number): symbol is OperatorsValues {
    return ['/', '*', '-', '+'].includes(symbol.toString());
}
