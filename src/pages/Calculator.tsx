import { Box } from '@mui/material';

import { MouseEvent, useEffect, useState } from 'react';
import { evaluate, format } from 'mathjs';
import { ButtonsContainer } from '../components/Buttons/Container';
import { ButtonsRow } from '../components/Buttons/Row';
import { CalculatorButton } from '../components/Buttons/Button';
import { buttons, isSymbolAction, isSymbolOperator } from '../const/buttons';
import { ScreenResult } from '../components/Screen/Result';
import { ScreenCurrentOperation } from '../components/Screen/CurrentOperation';

export function Calculator() {
    const [input, setInput] = useState<(string | number)[]>([]);
    const [result, setResult] = useState('0');

    const addSymbolToInput = (e: MouseEvent<HTMLButtonElement>) => {
        const symbol = e.currentTarget.value;
        if (isSymbolAction(symbol)) {
            if (symbol === 'AC') {
                setInput([]);
                setResult('0');
            }
            if (symbol === '±' && input.length && !isSymbolOperator(input[input.length - 1])) {
                const prevAmount = parseFloat(input[input.length - 1].toString());
                setInput((prevInput) => prevInput.slice(0, -1).concat(-prevAmount));
            }
            if (symbol === 'C') {
                setInput((prevInput) => prevInput.slice(0, -1));
            }
            if (symbol === '%' && input.length && !isSymbolOperator(input[input.length - 1])) {
                const prevAmount = parseFloat(input[input.length - 1].toString());
                setInput((prevInput) => prevInput.slice(0, -1).concat(prevAmount / 100));
            }
        } else if (isSymbolOperator(symbol)) {
            if (!input.length) {
                setInput([0, symbol]);
            } else if (isSymbolOperator(input[input.length - 1])) {
                setInput((prevInput) => prevInput.slice(0, -1).concat(symbol));
            } else {
                setInput((prevInput) => prevInput.concat(symbol));
            }
        } else if (input.length) {
            const prevAmount = input[input.length - 1];
            if (!isSymbolOperator(prevAmount)) {
                setInput((prevInput) => prevInput.slice(0, -1).concat(prevAmount + symbol.toString()));
            } else {
                setInput((prevInput) => prevInput.concat(symbol));
            }
        } else {
            setInput((prevInput) => prevInput.concat(symbol));
        }
    };

    useEffect(() => {
        if (input.length && !isSymbolOperator(input[input.length - 1])) {
            setResult(format(evaluate(input.join('')), { precision: 10 }));
        }
    }, [input]);

    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 4,
                height: 568,
                width: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
            }}
        >
            <ScreenCurrentOperation currentOperation={input.join('')} />
            <ScreenResult result={result} />
            <ButtonsContainer>
                {buttons.map((row) => (
                    <ButtonsRow key={row.reduce((res, button) => res + button.label.toString(), '')}>
                        {row.map(({ label, value, color }) => (
                            <CalculatorButton
                                key={label}
                                label={label}
                                value={value}
                                color={color}
                                handleClick={addSymbolToInput}
                            />
                        ))}
                    </ButtonsRow>
                ))}
            </ButtonsContainer>
        </Box>
    );
}
